// Global variables
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

// Task 1
function logDairy() {
    for (const item of dairy) {
        console.log(item);
    }
}

logDairy();

// Task 2
function birdCan() {
    for (const prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (const prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan();