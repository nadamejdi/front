const express = require ('express');
const { AddUser, FindAllUsers, FindSingleUser, UpdateUser, DeleteUser } = require('../controllers/users.controller');
const router  = express .Router()


/*add user*/
router.post('/users',AddUser)
    
/*find all  user*/
router.get('/users',FindAllUsers)

/*find single  user*/
router.get('/users/:id',FindSingleUser)

/*modif user*/
router.put('/users/:id',UpdateUser)

/*delete user*/
router.delete('/users/:id',DeleteUser)




module.exports = router;