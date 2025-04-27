const express = require('express');
const bodyParser = require('body-parser');
const TodoRoute = require('./src/routes/route.js');
const cors = require('cors');
const { isCelebrateError } = require('celebrate');
const dotenv = require('dotenv').config();

const { REE, RES } = require('./src/services/service.js');

const connectDB  = require('./src/config/mongodb_con.js');

const app = express();

const PORT = dotenv.parsed.PORT;

app.use(cors({
    origin: '*'
}));


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', TodoRoute)

app.use((req, res) => {
    REE(res, 'Endpoint not found', 404);
  });

app.use((err, req, res, next) => {
    if (!isCelebrateError(err)) {
        next(err);
        return;
    }

    let errorBody = err.details.get('query') || err.details.get('body') || err.details.get('params');

    if (!errorBody) {
        errorBody = err.details.get('body');
    }

    const { details: [errorDetails] } = errorBody;

    REE(res, errorDetails.message, 400);
});

app.get('/', (req, res) => {
    RES(res, 'Server is running successfully', 200);
});

connectDB()
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
