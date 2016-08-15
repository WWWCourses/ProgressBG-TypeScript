function patientGenerator( x, firstName, lastName ){
    this.age = x;
    this.firstName = firstName;
    this.lastName= lastName;
    this.printAge = function(){
        console.log("Patient age is: ", this.age)
    };
    // Дефинирайте метода printObj(),
    // който трябва да принтира в конзолата всички
    // свойства и техните стойности ;
};

var p1 = new patientGenerator( 12, "Ivan", "Popov");
var p2 = new patientGenerator( 54, "Stoian", "Ivanov");

p2.printAge();
p1.printObj();
