class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}


class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
        this.numOfVehicles = 0;
    }

    add(newVehicle){
        if(newVehicle instanceof Vehicle && this.numOfVehicles < this.capacity){
            if(newVehicle instanceof Car){
                this.numOfVehicles++;
                this.vehicles.push("Car");
            } else if(newVehicle instanceof Motorcycle){
                this.numOfVehicles++;
                this.vehicles.push("Motorcycle");
            }
    } else if(!newVehicle instanceof Vehicle){
        return "Only vehicles are allowed in here!";
    } else {
        return "Sorry we're full.";
    }
}
};

