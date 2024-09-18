const car = {
    type: "fiat",
    model: "F500",
    color: "red"
}
document.getElementById("JsObject1").innerHTML = "the car type is " + car.type + " and the model is " + car.model + " also the color is " + car.color;

// const car = {
//     type: "Fiat",
//     model: "F500",
//     color: "red"
// }
// console.log(car)

// Tugas JS OBJECT
const person = {
    firstname: "John",
    lastname: "Doe",
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
};
alert(person.fullName() + " Dilarang Masuk !!!!");
