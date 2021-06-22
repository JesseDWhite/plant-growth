class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

let plant = new Plant();

//example of each individual function tied to Plant
const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

const giveLight = (plant) => {
  return {
    light: (plant.light || 0) + 1
  }
};

//refactored function that takes the place of the above functions
const changeState = (state, prop, value) => ({
  ...state,
  [prop]: (state[prop] || 0) + value
});

//refactored again to curry the properties
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

//example of how to implement the above function
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

//I want to water my plant to a set value more that one
hydrate(7)(plant)

//I also want to have certain types of food that hold different values to give to each instance of plant
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

//Now I can feed my plant a specific food
blueFood(plant)