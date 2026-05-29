const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from inside your Docker container');
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

app.get('/users', (req, res) => {
    res.send([
        {
            id: 1,
            name: "John Doe",
            age: 30,
        },
        {
            id: 2,
            name: "Jane Doe",
            age: 25,
        },
    ])
})