const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('<h1>Home page</h1>');
})
app.listen(port);

console.log(`Server is running at port ${port}`);