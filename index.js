const express = require('express');
const cors = require('cors');
const app = express();
const port =  process.env.PORT ||4000;
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => console.log(`Serer is running at ${port}`));