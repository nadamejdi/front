const express = require ('express'); 
const {createCategories,addCategory,getCategories,updateCategories,deleteCategories}= require('../controllers/category');
/*add user*/
router.post('/category',createCategories)
    
/*find all  user*/
router.get('/category',addCategory)

/*find single  user*/
router.get('/category/:id',getCategories)

/*modif user*/
router.put('/category/:id',updateCategories)

/*delete user*/
router.delete('/category/:id',deleteCategories)
module.exports = router;