const router = require('express').Router();

const GuestTasks = require('./guestTasks-model');

router.get('/', (req, res, next) => {
  GuestTasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res, next) => {
  // this should include the username as well
  const newTask = req.body;
  
  GuestTasks.add(newTask)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;

  GuestTasks.findById(id)
    .then(task => {
      if (task) {
        GuestTasks.update(changes, id)
          .then(updatedTask => {
            res.status(201).json(updatedTask);
          })
      } else {
        res.status(404).json({ message: 'Could not find task with given id' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update task' });
    });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  GuestTasks.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
})



module.exports = router;