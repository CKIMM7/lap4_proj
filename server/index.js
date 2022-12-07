const app = require('./server');

const port = process.env.PORT || 3600;

app.listen(port, () => console.log(`Database server now departing from port ${port}!`))