// import the model
import vocabModel from '../models/vocabModel.js';

// define controller functions
const ViewAllVocabs = async (req, res) => {
    try {
        // get all data from collection (table) vocabs
        var vocabs = await vocabModel.find({});
        // return data to client by JSON format
        res.json(vocabs);
    } catch (err) {
        // catch error
        console.log(err);
    };
}

const ViewVocab = async (req, res) => {
    try {
        // get id parameter from APT url
        var id = req.params.id;
        // get data from collection (table) vocabs by id
        var vocab = await vocabModel.findById(id);
        // return json data to client
        res.json(vocab);
    } catch (err) {
        // catch error
        console.log(err);
    }
}

const create_a_vocab = async (req, res) => {
    try {
        // get data from client
        var vocab = req.body;
        // create new data in collection (table) vocabs
        await vocabModel.create(vocab);
        // return message to client
        res.json({ message: 'Vocab created!' });
    }
    catch (err) {
        // catch error
        console.log(err);
    }
}

const update_a_vocab = async (req, res) => {
    try {
        // get id parameter from APT url
        var id = req.params.id;
        // get data from client
        var vocab = req.body;
        // update data in collection (table) vocabs by id
        await vocabModel.findByIdAndUpdate(id, vocab);
        // return message to client
        res.json({ message: 'Vocab updated!' });
        // res.send("<h1>Update successful!</>");
    } catch (err) {
        // catch error
        console.log(err);
    }
}

const delete_a_vocab = async (req, res) => {
    try {
        // get id parameter from APT url
        var id = req.params.id;
        // delete data in collection (table) vocabs by id
        await vocabModel.findByIdAndDelete(id);
        // return message to client
        res.json({ message: 'Vocab deleted!' });
    } catch (err) {
        // catch error
        console.log(err);
    }
}


// export controller functions
export {
    ViewAllVocabs,
    ViewVocab,
    create_a_vocab,
    update_a_vocab,
    delete_a_vocab
}