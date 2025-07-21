const express = require('express');
const app = express();
const port = 3001;
const { readdirSync } = require('fs')
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json({ limit: '20mb' }))
app.use(cors())
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

app.listen(port, () => {
    console.log("server runing onPort");
})