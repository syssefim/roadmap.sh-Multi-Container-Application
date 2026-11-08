//////////////////////////////////////////////
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => { console.error(err); process.exit(1); });

////////////////////////////////////////

const express = require('express');
const app = express();

app.use(express.json());



//GET todos
app.get('/todos', (req, res) => {
  // res.send('sup world')
  res.status(200).json(todos);
});


//POST todos
app.post('/todos', (req, res) => {
  // const newTask = req.body.name;

  // if (!newTask) {
  //   return res.status(400).json({ error: 'Task field is required' });
  // }

  // const newTODO = {
  //   id: todos.length + 1,
  //   task: newTask
  // };

  // // Save to our mock database
  // todos.push(newTODO);

  // // Respond with the newly created resource and HTTP status 201 (Created)
  // res.status(201).json(newTODO);

  const task = await todos.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  console.log('Created article:', article);


});

//GET todos/:id
app.get('/todos/:id', (req, res) => {
  //res.status(200).json(todos);
  res.send(`hello ${req.params.id}`);
  res.status(200).json(todos);
});

//POST todos/:id

//DELETE /todos/:id


const PORT = process.env.PORT || 6767;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));