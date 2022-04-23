//exemplo de objeto

class Meal {
    constructor(food) {
        this.food = food
    }
    eat() {
        return 'Hmmm'
    }
}

class Animal {
    constructor(type = 'animal') {
        this.type = type
    }
    get type() { //getter
        return this._type
    }

    set type(val) { // setter
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type); //OUTPUT ANIMAL

//herança

class Cat extends Animal {
    constructor() {
        super('cat') //Construindo CAT herdando as propriedades de ANIMAL (pai)
    }
    makeSound() {
        super.makeSound() //sobrescreve o método do pai
        console.log('Meow!')
    }
}

let b = new Cat()

console.log(b.type) // OUTPUT CAT
console.log(b.makeSound()) // OUTPUT Meow!