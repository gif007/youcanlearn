const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const session = require('express-session');
const MemcachedStore = require('connect-memjs')(session);

const { checkIfAuthenticated } = require('./firebase-service');
const { dummyQuiz } = require('./quiz.data');

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
        })
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
        saveUninitialized: false
    }));
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});


app.post('/quiz-api/start', checkIfAuthenticated, (req, res) => {
    if (req.body.lessonId) {
        if (req.session.views) {
            req.session.views++;
        } else {
            req.session.views = 1;
        }
        if (req.session.currentLesson) {
            if (req.session.currentLesson !== req.body.lessonId) {
                req.session.currentLesson = req.body.lessonId;
                req.session.views = 1;
            }
        } else {
            req.session.currentLesson = req.body.lessonId;
        }
        
        console.log(`Quiz has been requested for lesson ${req.body.lessonId}`);
        console.log(`User has hit this route ${req.session.views} time(s)`);
        res.send({ lesson: dummyQuiz });
    }
});
