const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "why no bacon"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
    name: "pineapple",
    rating: 9,
    review: "whatever, its delicious"
});

pineapple.save();


const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFood: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
    name: "blank name",
    age: 17,
    favoriteFood: pineapple
});

people.save();

// fruit.save();

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 1,
//     review: "whatever"
// });
// const banana = new Fruit({
//     name: "banana",
//     rating: 10,
//     review: "whatever"
// });
// const strawberry = new Fruit({
//     name: "strawberry",
//     rating: 8,
//     review: "whatever"
// });

// Fruit.insertMany([kiwi, banana, strawberry], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("successfully added all fruits to fruitsDB")
//     }
// })

function printName(fruit) {
    console.log(fruit.name);
}

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(printName)
    }
})

// Fruit.updateOne({_id: "62b58585c72e9e909c4003bd"}, {name: "ass"},  function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully updated document")
//     }
// })




People.deleteMany({name: "hubaferencz"},  function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("successfully updated document")
    }
})





