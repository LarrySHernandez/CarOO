class Vehicle {
    constructor (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
        console.log(make, model, year);
    }
    honk(){
        return 'beep';
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return 'VROOM';
    }
}


class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
    this.vehicle = vehicle;
        if(!(this.vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }else if(this.vehicles.length > this.capacity){
            return "Sorry, we're full."
        }else{
            this.vehicles.push(this.vehicle);
        }
    }
}