import express from 'express';

const app = express();
let root = process.argv[2];

// Serve static files
app.use(express.static(root, {'root': './' + {root}}));

// Serve bundle
app.get('*.js', (req, res) => {
    res.sendFile('bundle.min.js', {'root': './' + root});
});

// Serve index page
app.get('*', (req, res) => {
    res.sendFile('index.html', {'root': './' + root});
});

// Express server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Essential React listening at http://%s:%s', host, port);
});
