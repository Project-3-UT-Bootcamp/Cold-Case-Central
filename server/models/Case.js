const { Schema, model, Types } = require('mongoose');

const CaseSchema = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        date: {
            type: Date,
            //default: Date.now,
            //get: createdAtVal => dateFormat(createdAtVal)
        },
        status: {
            type: String
        },
        author: {
            type: String
        },
        // use ReplySchema to validate data for a reply
        //replies: [ReplySchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Case = model('Case', CaseSchema);

module.exports = Case;