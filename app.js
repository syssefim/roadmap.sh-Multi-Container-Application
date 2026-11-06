const express = require('express');
const app = express();

app.use(express.json());

//Mock db
let todos = [
  { id: 1, task: 'Wash dishes' },
  { id: 2, task: 'Clean bathroom' }
];


//GET
app.get('/todos', (req, res) => {
  // res.send('sup world')
  res.status(200).json(todos);
});


//POST
app.post('/todos', (req, res) => {
  const newTask = req.body.name;

  if (!newTask) {
    return res.status(400).json({ error: 'Task field is required' });
  }

  const newTODO = {
    id: todos.length + 1,
    task: newTask
  };

  // Save to our mock database
  todos.push(newTODO);

  // Respond with the newly created resource and HTTP status 201 (Created)
  res.status(201).json(newTODO);
});


const PORT = process.env.PORT || 6767;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));