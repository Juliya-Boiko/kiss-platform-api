const { Schema, model } = require('mongoose');

const taskSchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  descr: {
    type: String,
    required: [true, 'Description is required'],
  },
  status: {
    type: String,
    enum: ['in progress', 'done', 'paused', 'urgently'],
    default: 'in progress'
  },
}, { versionKey: false, timestamps: true });

const Task = model('task', taskSchema);

module.exports = Task;