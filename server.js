const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/RazorGrip-Project'));
app.listen(process.env.PORT || 8080);