const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: createdAtVal => dateFormat(createdAtVal)
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

const User = model('User', UserSchema);

module.exports = User;