let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let db = {};

app.use('/', express.static('public'));

app.use(parser.json());
//app.use(technologger);

//TODO REST API



app.post('/users', (req, res) => {
    email = req.body['email'];
    db[email] = db[email] ? ++db[email] : 1;
    someText = req.body['someText'];
    res.send({
        number: db[email],
        someText: someText,
        email : email
    });
    // TODO: вернуть количество обращений
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
