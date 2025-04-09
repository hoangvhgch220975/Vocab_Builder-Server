const express = require('express');
const port = process.env.PORT || 3001; // config port to 3001 (cloud port usually 3001)
const app = express();
const cors = require('cors');


// connect to mongodb
const mongoose = require('mongoose');
// define connection string(local or cloud)
const dbURI = 'mongodb+srv://001343305:Hoang1910%40@mycluster.zopvl.mongodb.net/vocab-builder';
// connect to mongodb and test connection status
mongoose.connect(dbURI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

// Enable CORS for all routes
app.use(cors());




// setup middleware (for getting client request data)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// // setup middleware (for getting client request data)
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// setup routes
var vocabRoute = require('./api/routes/vocabRoute.js');
vocabRoute(app);

app.get('/', (req, res) => {
    res.send("<h1>This is homepage of backend side</h1>")
 })
 

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});

// return html content
// app.get('/', (req, res) => {
//     res.send("<h1 style = 'color: red' >Hello World</h1>");
// });

// return json content
// app.get('/api', (req, res) => {
//     var data = [
//         {
//             name: "John Doe",
//             age: 25,
//             location: "USA"
//         },
//         {
//             name: "Tony Vlachos",
//             age: 30,
//             location: "Canada"
//         }
//     ];
//     res.status(200).json(data);
// });

