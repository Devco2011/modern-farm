console.log("Welcome to the main module");
import { createPotato } from "./seeds/potato.js";
import { createPlan } from "./plan.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()
const potatoSeed = createPotato()

addPlant(potatoSeed);

const field = usePlants()

console.log(field)

plantSeeds(yearlyPlan)

