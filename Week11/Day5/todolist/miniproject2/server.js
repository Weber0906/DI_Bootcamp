const express = require('express');
const app = express();
const port = 5001;


let todos = [];

app.get('/api/todos', (req,res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json(newTodo);
});

app.delete('api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    todos = todos.filter(todo => todo.id !== todoId);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});