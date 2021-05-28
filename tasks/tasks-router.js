const router = require('express').Router();

const Tasks = require('./tasks-model');

router.get('/', (req, res, next) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.get('/users/:id', (req, res, next) => {
  const { id } = req.params;

  Tasks.findByUserId(id)
    .then(tasks => {
      if (tasks) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given user.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
});

router.post('/', (req, res, next) => {
  // this should include the username as well
  const newTask = req.body;
  
  Tasks.add(newTask)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;

  Tasks.findById(id)
    .then(task => {
      if (task) {
        Tasks.update(changes, id)
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

  Tasks.remove(id)
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
});


module.exports = router;