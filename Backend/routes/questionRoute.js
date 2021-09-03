var express = require('express')
var router = express.Router()
var questionController = require("../controllers/questionController");
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/addquestion',authMiddleware.authMiddleware,questionController.addQuestion)
router.put('/editquestion/:id', authMiddleware.authMiddleware, questionController.editQuestion)
router.delete('/deletequestion/:id', authMiddleware.authMiddleware, questionController.deleteQuestion)
router.get('/getallquestions', authMiddleware.authMiddleware, questionController.getallQuestions)
router.get('/getoverallquestions', authMiddleware.authMiddleware, questionController.getOverAllQuestions)
router.get('/getquestionsbytag/:tag', authMiddleware.authMiddleware, questionController.getQuestionsByTag)
router.get('/getquestion/:id', authMiddleware.authMiddleware, questionController.getQuestion)
module.exports = router