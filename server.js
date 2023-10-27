const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
require("./models")
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
// remove force: true after testing
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening", PORT));
});
