// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Bring in controller functions (destructure methods)
const { 
    findAllLogs,
    showNewView, 
    createNewLog,
    showOneLog,
    showEditView,
    updateOneLog,
    deleteOneLog, 
    clearData
} = require('../controllers/logController')

// Bring in controller object (with methods attached)
// const logController = require('../controllers/logController')
// Example: router.get('/', logController.findAllLogs)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllLogs)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneLog)

// Setup "update" route
router.put('/:id', updateOneLog)

// Setup "create" route
router.post('/', createNewLog)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// // Setup "seed" route
// router.get('/seed', seedStarterData)

// Setup "clear" routa
router.get('/clear', clearData)

// Setup "show" route  
router.get('/:id', showOneLog)

module.exports = router
