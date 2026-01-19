import express from 'express';

//console.log('Starting server...');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the cars API!');
});
app.get('/cars', (req, res) => {
    res.send('List of cars will be here.');
});
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// process.on('SIGINT', () => {
//     console.log('Server shutting down...');
//     process.exit(0);
// });