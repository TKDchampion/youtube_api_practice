const express = require('express');

const app = express();

app.use(express.static('./dist/inter-view'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/inter-view/'}),
);

app.listen(process.env.PORT || 8080);
