const { Schema, model } = require('mongoose');

const CaseSchema = new Schema({
    caseTitle: {
        type: String
    },
    caseDescription: {
        type: String,
    },
    caseStartDate: {
        type: Date
    },
    caseStatus: {
        type: String,
        default: 'Unsolved'
    },
    author: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

// create the Case model using the caseSchema
const Case = model('Case', caseSchema);

// export the Case model
module.exports = Case;