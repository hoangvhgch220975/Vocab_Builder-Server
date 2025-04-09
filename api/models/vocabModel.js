const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema(
    {
        // validation rules for the english and german fields
        english: {
            type: String,
            required: [true, 'English word cannot be blank'],
            unique: true,
            minLength: 2,
            maxLength: 10,
        },
        german: {
            type: String,
            required: [true, 'German word cannot be blank'],
            unique: true,
            minLength: 2,
            maxLength: 10,
        }

        // not validation example
        // english: String,
        // german: String,
    },
    { collection: 'vocabs' },
    { versionKey: false } // remove __v field

);
// module.exports = mongoose.model('Vocab', vocabSchema);


const vocabModel = mongoose.model('vocabs', vocabSchema);
module.exports = vocabModel;
