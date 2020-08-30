console.log("Welcome to the main module");
import { createPotato } from "./seeds/potato.js";
import { createPlan } from "./plan.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

const potatoSeed = createPotato()

addPlant(potatoSeed);
const field = usePlants();

console.log(field)
const yearlyPlan = createPlan()
console.log(yearlyPlan)

