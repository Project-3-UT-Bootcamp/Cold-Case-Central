const { Schema, model } = require('mongoose');

const mediaSchema = new Schema(
    {
      mediaTitle: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 150
      },
      mediaDescription: {
          type: String,
          minlength: 1,
          maxlength: 280
      },
      mediaType: {
          type: String,
          required: true
      },
      mediaAuthor: {
          type: String,
          minlength: 1,
          maxlength: 100
      },
      mediaURL: {
          type: String,
          required: 'There needs to a be URL for this media item',
          unique: true,
          match: [/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/, 'Must be a valid URL']
      }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

module.exports = mediaSchema;

