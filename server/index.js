const express = require('express');
const bodyParser = required('body-parser');

const port = 3000;
const app = express();

//generates req.body for us to use
app.use(bodyParser.json());

//importing books_controller
//must be between app.use and above app.listen
const {read, create, update, destroy} = require('./controllers/books_controller');

//attaching our methods to the proper operations
app.post('/api/books', create);
app.get('/api/books', read);
app.put('/api/books/:id', update);
app.delete('/api/books/:id', destroy);


//making express listen and checking that it works
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});






