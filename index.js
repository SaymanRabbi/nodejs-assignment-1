const express = require('express');
const cors = require('cors');
const app = express();
const port =  process.env.PORT ||4000;
const userRoutes = require('./routes/user.routes.js');
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes );

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => console.log(`Serer is running at ${port}`));