const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./todo-router');

const PORT = 5000;

// Parse request body as JSON data
app.use(bodyParser.json());
// use cors
app.use(cors());

// Add router for requests going to /post/*
app.use('/to-do', postRouter);

// test routes
app.get('/hello-world', (_req, res) => {
	res.send({
		response: 'hello world'
	});
});

app.get('/error-test', (_req, res) => {
	res.status(500).send({
		error: 'An internal server error occured.'
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
