/* Define a variable whose initial value is an empty array. 
This array will store all of the plants that are growing in the field. */

const fieldPlants = [];

// This function will add the seed to the field 
export const addPlant = (seed) => {
    fieldPlants.push(seed)

}

export const usePlants = () => {
    return fieldPlants
}
