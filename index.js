//In the package.json be sure to have ` "proxy": "http://localhost:5008/"`
const express = require('express');
const app = express();
const port = process.env.PORT || 5008;
const env = process.env.ENVIRONMENT || 'dev'

app.use(express.json())
app.listen(port, () => console.log(`Listening on port ${port}`));

if (env === 'production') {
    //be sure to run `npm run build` in your CICD step to build out the static files
    console.log('running in production mode')
    app.use(express.static('build'))

    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });
}

app.get('/health', (req, res) => {
    res.send({ ok: true });
});


