function funConstructor(name, yearStarted){
    this.name = name;
    this.yearStarted = yearStarted;

    this.describe = ()=>{
        console.log(`${this.name} was started in ${this.yearStarted}`)
    }
}

// Creating an object of the function that I have created.
const fun = new funConstructor("Uganda", 1962)

fun.describe()

class Country{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // Now create a method.
    describe(){
        console.log(`${this.name} started in ${this.year}`)
    }
}

const country = new Country("kenya", 1963);
country.describe();