var Answer = require('../models/answer')
exports.addAnswer = (req, res) => {

    const { body,q_id } = req.body;
    
    var answer = new Answer({
        body:body, uname: req.userid ,q_id
    })
    try {
        doc = answer.save();
        console.log("Answer added successfully")
        return res.json({ message: 'Answer added successfully' });
    }
    catch (err) {
        return res.json({ error: 'Something went wrong' });
    }
}
//db.getCollection('').find({}).sort({_id:-1}) 
exports.getallAnswers = async (req, res) => {

    try {
        const answers = await Answer.find({q_id:req.params.id}).sort({update_time:-1})
        console.log(answers)
        
         res.json({ answers });
    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

exports.editAnswer = async (req, res) => {
        try {
        if (!req.params.id) {
            return res.json({ error: 'Id is required' });
        }

        const { body } = req.body;
        const update_time = Date.now();
        _ = await Answer.updateOne({ _id: req.params.id, uname: req.userid}, { body,update_time})
        return res.json({ message: 'successfully updated answer' });

    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

exports.deleteAnswer = async (req, res) => {

    try {
        if (!req.params.id) {
            return res.json({ error: 'Id is required' });
        }

        _ = await Answer.deleteOne({ _id: req.params.id, uname: req.userid })
        return res.json({ message: 'successfully deleted answer' });

    } catch (error) {
        return res.json({ error: 'Something went wrong' });
    }
}

