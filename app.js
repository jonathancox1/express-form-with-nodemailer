const express = require('express');
const bodyParser = require('body-parser');

const contactRouter = require('./routes/contact')
const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'MyWebsite'
    })
})

app.use('/contact', contactRouter);


app.listen(port, () => {
    console.log(`Listening Open http://localhost:${port} to view`)
})