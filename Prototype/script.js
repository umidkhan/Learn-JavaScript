let hiPrototype = {
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

function setCity(city) {
  this.city = city;
}

Object.assign(setCity.prototype, hiPrototype);

const newCity = new setCity("London");
newCity.greet();

// const createObj = Object.create(hiPrototype); // create object prototype
// createObj.greet()
