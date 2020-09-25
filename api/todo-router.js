const router = require('express').Router();

let todoArr = [];

router.get('', (_req, res) => {
	res.send({
		todos: todoArr
	});
});

router.put('', (req, res) => {
	if(!req.body.todo) {
		return res.status(400).send({
			error: 'Request body must include "todo"'
		});
	}
	todoArr.push(req.body.todo);
	res.send({
		todos: todoArr
	});
});

router.delete('', (req, res) => {
	if(!req.body.todo) {
		return res.status(400).send({
			error: 'Request body must include "todo"'
		});
	}
	console.log(`Deleteing todos: ${req.body.todo}`);
	todoArr = todoArr.filter(elem => req.body.todo !== elem);
	res.send({
		todos: todoArr
	});
});

module.exports = router;
