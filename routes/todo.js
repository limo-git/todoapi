const express = require('express')
const router = express.Router()
const todo = require(.../models/todo)

// getting all todos
router.get('/', async (req,res) => {
  getallTodo(req,res)
})
// getting one

router.get('/:id', getTodo,(req,res) => {
  res.json(res.todo)

})

//creating one
router.post('/', async(req,res) => {
  const todo = new todoModel({
      work: req.body.work,
      completed: req.body.completed
  })
  try {
      const newTodo = await todo.save()
      res.status(201).json(newTodo)
  } catch (err) {
      res.status(404).json({message : err.message})
  }
})

// updating
router.patch('/:id',getTodo, async (req,res)=> {
  if (req.body.work != null) {
      res.todo.work = req.body.work
  }
  if (req.body.completed != null){
      res.todo.completed = req.body.completed
      
  }
  try {
      const updatedTodo = await res.todo.save()
      res.json(updatedTodo)
  } catch (err) {
      res.status(400).json({message: err.message})
      
  }

})
  

// delete
router.delete('/:id', async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    await todo.deleteOne(todo);
    if (!todo) {
      return res.status(404).json({ message: 'work not found' });
    }
    res.status(201).json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router
 