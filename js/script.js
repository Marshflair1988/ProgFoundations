const firstName = "John";
const surname = "Doe";

console.log (firstName, surname);

const house = {
    type: "detached",
    numberOfRooms: 4,
    buildingMaterial: "brick",
    occupied: true
}

console.log(house);


var bookOne = {
    id: 1,
    name: "Moby Dick",
    genre: "fiction",
};

var bookTwo = {
    id: 2,
    name: "Lord of the rings",
    genre: "fiction",
};

var bookThree = {
    id: 2,
    name: "Harry Potter",
    genre: "fiction",
};

var books = [bookOne, bookTwo, bookThree];


function logBooks (books) {
    for(title of books)
    console.log("i like " + title.name);
}


logBooks(books);

