const todo = require("../models/todo");

exports.getAllTodos = async (req, res,) => {
    
  try {
    const todo = await todoModel.find()
    res.json(todo)
} catch (err) {
    res.status(500).json({message: err.message})  
    
}
}


