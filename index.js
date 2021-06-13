const  express = require('express');
const app = express();
const dotenv = require('dotenv')
const port = 3000;
var cors = require('cors');
app.use(cors());
const path = require('path');
var exphbs  = require('express-handlebars');

dotenv.config();
// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Route
const contactRoute = require('./routes/contact');

// Set View Engine
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs(
    {
        extname: '.hbs', 
        partialsDir: 'views/',
        defaultLayout: false
    }));
app.set('view engine', '.hbs');

// Contact Route endpoint
app.use('/api/', contactRoute);


app.listen(port, () => console.log(`Example app listening on port port!`));