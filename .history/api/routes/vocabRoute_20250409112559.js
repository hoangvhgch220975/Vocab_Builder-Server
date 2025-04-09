const vocabBuilder = require('../controllers/VocabController');

const VocabRoute = (app) => {
    // Declare API endpoints here (URL)
    // 1 without id
    app.route('/vocabs')
        .get(vocabBuilder.ViewAllVocabs)
        .post(vocabBuilder.create_a_vocab)


    // 2 with id
    app.route('/vocabs/:id')
        .get(vocabBuilder.ViewVocab)
        .put(vocabBuilder.update_a_vocab)
        .delete(vocabBuilder.delete_a_vocab);
}
module.exports = VocabRoute;