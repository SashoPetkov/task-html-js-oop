  // BASE class (main)
class Animal {
  constructor(age){
    this.age = age;
  }
  sayAge() {
    console.log(this.age);
  }
  sleep() {
    console.log('zzzzzzzz');
  }
}

  // first extension
class Predator extends Animal {
  constructor(age) {
    super(age);
  }
  eat() {
    console.log('yummy');
  }
}

  // mixin class for Eagle
let MixinFunc = (initialClass) => class extends initialClass {
  fly(){
    console.log('whoohooo');
  }
};


  // ANIMALS - Dolphin
class Dolphin extends Animal {
  constructor(age) {
    super(age);
  }
  swim() {
    console.log('splah');
  }
}

let myDolphin = new Dolphin(44);

console.log("<- myDolphin ->");
myDolphin.sayAge();
myDolphin.sleep();
myDolphin.swim();

  // ANIMALS - Lion
class Lion extends Predator {
  constructor(age) {
    super(age);
  }
  roar() {
    console.log('wrrrrr');
  }
}

let myLion = new Lion(51);

console.log("<- myLion ->");
myLion.sayAge();
myLion.sleep();
myLion.roar();
myLion.eat();

  // ANIMALS - Eagle
class Eagle extends MixinFunc(Predator){
  constructor(age){
    super(age);
  }
}

let myEagle = new Eagle(87);

console.log("<- myEagle ->");
myEagle.sayAge();
myEagle.sleep();
myEagle.fly();
myEagle.eat();

  // ANIMALS - Bee
class Bee extends MixinFunc(Animal) {
  constructor(age) {
    super(age);
  }
}

let myBee = new Bee(1);

console.log("<- myBee ->");
myBee.sayAge();
myBee.sleep();
myBee.fly();
