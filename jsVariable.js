// Use Var
var x1,y1,z1;
x1 = 10;
y1 = 20;
z1 = x1 + y1;
console.log("the value of z1 if using var variabel is " + z1);

// Use Let
let x2,y2,z2;
x2 = 100;
y2 = 20;
z2 = x2 / y2;
console.log("the value of z2 if using let variabel is " + z2);

// Use Nothing
x3 = 5;
y3 = 7;
z3 = x3 * y3;
console.log("the value of z3 if using nothing variabel is " + z3);

// Contoh Mutable with Object
const student = {
    nama: "Steven",
    age: 22,
    class: "Informatika A"
}

student.faculty = "Teknik Informatika";
console.log(student);

// Contoh Mutable with Array
const dataMurid = ['spongeboob', 'patrick star', 'Mr. Krab', 'Squidward'];
dataMurid.push('sandy');
console.log(dataMurid);