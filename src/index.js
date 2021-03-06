const express = require('express');//1
const bodyParser = require('body-parser');//2
const route = require('./routes/route.js');//6
const { default: mongoose }= require('mongoose');


const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://jitendra-p4:0NyBk5LhigaK4V5V@cluster0.2ph0d.mongodb.net/test", {
     useNewUrlParser: true

})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
