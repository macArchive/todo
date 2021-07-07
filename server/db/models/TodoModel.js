import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    user: String,
    text: String,
    complete: Boolean
  },
  { timestamps: true }
)

export default Todo = mongoose.model('Todo', todoSchema)
