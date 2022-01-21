const express = require('express');
const morgan = require('morgan');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');
const connctDB = require('./server/database/connection');



const app = express();

dotEnv.config({ path: '.env' });
const appPort = process.env.APP_PORT || 8080

// Log request
app.use(morgan('tiny'));

// mongoDB connection
connctDB();

// Pass request to body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", 'ejs');
//app.set("views", path.resolve(__dirname, 'views/ejs'));

// Load Assets 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

// Load routers

app.use('/', require('./server/routes/router'));

app.listen(appPort, () => { console.log(`Server id UP and running on http://localhost:${appPort}`) })