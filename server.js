/**
 * Created by userr on 14/11/2016.
 */
const bodyParser = require("body-parser")
const express = require('express');
const app = express();

let staticAssets = __dirname + '/public';
app
    .use(express.static(staticAssets))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .get('/products/',(req,res,next)=>{
        res.send(products)
    })
    .get('/products/:id',(req,res,next)=>{
        let product = {}
        if(req.params.id){
            product = products.find(prod => prod.id === Number(req.params.id))
        }
        res.send(product)
    })

app.listen(3000);
console.log("Listening on 3000 ...");

let products = [{
    "id": 1,
    "name": "suscipit",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    "price": 58,
    "creation_date": "27/08/2016"
}, {
    "id": 2,
    "name": "bibendum",
    "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "price": 14,
    "creation_date": "10/01/2016"
}, {
    "id": 3,
    "name": "justo",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "price": 56,
    "creation_date": "07/07/2016"
}, {
    "id": 4,
    "name": "elit",
    "description": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    "price": 37,
    "creation_date": "13/05/2016"
}, {
    "id": 5,
    "name": "pulvinar",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
    "price": 35,
    "creation_date": "23/12/2015"
}, {
    "id": 6,
    "name": "justo",
    "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "price": 24,
    "creation_date": "23/04/2016"
}, {
    "id": 7,
    "name": "pulvinar",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "price": 1,
    "creation_date": "11/10/2016"
}, {
    "id": 8,
    "name": "vivamus",
    "description": "Morbi a ipsum. Integer a nibh.",
    "price": 31,
    "creation_date": "14/04/2016"
}, {
    "id": 9,
    "name": "nibh",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    "price": 68,
    "creation_date": "12/02/2016"
}, {
    "id": 10,
    "name": "posuere",
    "description": "Aliquam non mauris. Morbi non lectus.",
    "price": 21,
    "creation_date": "19/05/2016"
}]