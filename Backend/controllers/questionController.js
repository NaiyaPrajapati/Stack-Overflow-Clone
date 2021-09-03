var Question = require('../models/question')
exports.addQuestion = (req, res) => {

    const { title, body, tags } = req.body;
    let tag_array = tags.split(" ");
    tag_array = [...new Set(tag_array)];
    tag_array = tag_array.map(name => name.toLowerCase());

    var question = new Question({
        title, body: body,tags:tag_array, uname: req.userid
    })
    try {
        doc = question.save();
        console.log("Question added successfully")
        return res.json({ message: 'Question added successfully' });
    }
    catch (err) {
        return res.json({ error: 'Something went wrong' });
    }
}
//db.getCollection('').find({}).sort({_id:-1}) 
exports.getallQuestions = async (req, res) => {

    try {
        const questions = await Question.find({user:req.userid}).sort({update_time:-1})
        console.log(questions)
        // console.log(blogs)
        return res.json({ questions });
    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}
exports.getOverAllQuestions = async (req, res) => {

    try {
        const questions = await Question.find({}).sort({update_time:-1})
        console.log(questions)
        // console.log(blogs)
        return res.json({ questions });
    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}
exports.getQuestion = async (req, res) => {

    if (!req.params.id) {
        return res.json({ error: 'Id is required' });
    }
    try {
        const questions = await Question.findOne({user:req.userid, _id:req.params.id}).sort({update_time:-1})
        console.log(questions)
        // console.log(blogs)
        return res.json({ questions });
    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

exports.getQuestionsByTag = async (req, res) => {
    const { tag } = req.params;
    let array = [tag]
    try {
        const questions = await Question.find({user:req.userid, tags: { $in: array }}).sort({update_time:-1})
        
        return res.json({ questions });
    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}
exports.editQuestion = async (req, res) => {
        try {
        if (!req.params.id) {
            return res.json({ error: 'Id is required' });
        }

        const { title, description } = req.body;
        const update_time = Date.now();
        _ = await Question.updateOne({ _id: req.params.id, user: req.userid }, { title, description,update_time})
        return res.json({ message: 'successfully updated question' });

    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

exports.deleteQuestion = async (req, res) => {

    try {
        if (!req.params.id) {
            return res.json({ error: 'Id is required' });
        }

        _ = await Question.deleteOne({ _id: req.params.id, uname: req.userid })
        return res.json({ message: 'successfully deleted question' });

    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

