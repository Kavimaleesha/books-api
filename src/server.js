const app = require('./app');

const PORT = process.env.PORT || 3000;

const swaggerDocs = require("./config/swagger");
swaggerDocs(app, PORT);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
