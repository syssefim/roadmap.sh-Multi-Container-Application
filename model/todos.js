import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const todos = new Schema(
  {
    id: Number,
    task: String,
    completed: Boolean,
  }
);

const Todos = model('Todos', todos);
export default Todos;

