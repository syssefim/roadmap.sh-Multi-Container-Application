import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const todos = new mongoose.Schema({
  name: String
});

const Todos = model('Todos', todos);
export default Todos;

