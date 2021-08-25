const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const { checkIfAuthenticated } = require('./firebase-service');
const { dummyQuiz } = require('./quiz.data');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});


app.post('/quiz-api/start', checkIfAuthenticated, (req, res) => {
    if (req.body.lessonId) {
        console.log(`Quiz has been requested for lesson ${req.body.lessonId}`);
        res.send({ lesson: dummyQuiz });
    }
})