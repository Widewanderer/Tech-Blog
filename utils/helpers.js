// Define a Handlebars helper to format dates as MM/DD/YY
const Handlebars = require("handlebars");

Handlebars.registerHelper("format_date", function (date) {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString(undefined, options);
});


