const express = require('express');
const app = express();
const port = 3000;

let appName = process.env.APP_NAME
app.get(`/${appName}`, (req, res) => res.send(`Hello World from ${appName}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));