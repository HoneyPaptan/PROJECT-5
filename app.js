const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listID = "601f823406";

const url= "https://us-14.api.mailchimp.com/3.0/lists/listID";



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
