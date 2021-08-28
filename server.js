const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const session = require('express-session');
const MemcachedStore = require('connect-memjs')(session);

const { checkIfAuthenticated } = require('./firebase-service');
const { dummyQuestion } = require('./quiz.data');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: 'false',
        saveUninitialized: 'false',
        store: new MemcachedStore({
            servers: [process.env.MEMCACHIER_SERVERS],
            prefix: '_session_'
        }),
        cookie: {
            maxAge: 60000 * 60 // 1 hour
        }
    }));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

if (process.env.NODE_ENV !== 'production') {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        store: new MemcachedStore({
            servers: [process.env.MEMCACHIER_SERVER],
            username: process.env.MEMCACHIER_USERNAME,
            password: process.env.MEMCACHIER_PASSWORD
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000 * 60 // 1 hour
        }
    }));
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

// Initialize quiz instance
app.post('/quiz-api/start', checkIfAuthenticated, (req, res) => {
    if (req.body.lessonId) {
        req.session.currentLesson = req.body.lessonId;
        req.session.score = 0;
        req.session.answers = 0;
    }
    console.log(`Quiz has been requested for lesson ${req.body.lessonId}`);
    
    res.send({
        question: dummyQuestion,
        score: req.session.score,
        health: 2 - Math.abs(req.session.answers - req.session.score)
    });
});

// Submit an answer
app.post('/quiz-api/submit', checkIfAuthenticated, (req, res) => {
    let correct = false;
    
    if (req.body.answerId) {
        req.session.answers++;

        if (dummyQuestion.answers.filter(ans => ans.id.toString() === req.body.answerId.toString())[0]['correct']) {
            req.session.score++;
            correct = true;
        }
        if (req.session.score === 5) {
            res.send({
                done: true,
                result: 'win',
                score: req.session.score,
                health: 2 - Math.abs(req.session.answers - req.session.score)
            });
            return;
        }
        if (Math.abs(req.session.score - req.session.answers) === 2) {
            res.send({
                done: true,
                result: 'loss',
                score: req.session.score,
                health: 2 - Math.abs(req.session.answers - req.session.score)
            });
            return;
        }

        res.send({
            correct,
            score: req.session.score,
            health: 2 - Math.abs(req.session.answers - req.session.score)
        });
    }
});

// Get the next question
app.post('/quiz-api/next', checkIfAuthenticated, (req, res) => {
    if (req.body.lessonId) {
        console.log(`Quiz has been requested for lesson ${req.body.lessonId}`);
    }
    res.send({
        question: dummyQuestion,
        score: req.session.score,
        health: 2 - Math.abs(req.session.answers - req.session.score)
    });
});