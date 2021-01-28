const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const dateFormat = require('../utils/dateFormat');

const CaseSchema = new Schema({
    caseTitle: {
        type: String,
        required: 'This case should have a title!',
        minlength: 1,
        maxlength: 120
    },
    caseSummary: {
        type: String,
        required: 'This case should have a summary!',
        minlength: 1,
        maxlength: 500
    },
    caseDescription: {
        type: String,
        required: 'This case should have a story!',
        minlength: 1,
        maxlength: 5000
    },
    caseStartDate: {
        type: Date,
        required: true,
        get: timestamp => dateFormat(timestamp)
    },
    caseStatus: {
        type: String,
        required: true,
        default: 'Unsolved'
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    comments: [commentSchema]
},
{
    toJSON: {
        getters: true
    }
});

CaseSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

// create the Case model using the caseSchema
const Case = model('Case', CaseSchema);

// export the Case model
module.exports = Case;