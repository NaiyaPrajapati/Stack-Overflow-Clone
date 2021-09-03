var express = require('express')
var router = express.Router()
var answerController = require("../controllers/answerController");
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/addanswer',authMiddleware.authMiddleware,answerController.addAnswer)
router.put('/editanswer/:id', authMiddleware.authMiddleware, answerController.editAnswer)
router.delete('/deleteanswer/:id', authMiddleware.authMiddleware, answerController.deleteAnswer)
router.get('/getallanswers/:id', authMiddleware.authMiddleware, answerController.getallAnswers)

module.exports = router