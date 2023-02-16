//Using a recursive function to get the values for the abilities
export const recursiveAbilities = (list) => {
  let currentValue = list[0];
  if (list.length === 1) return currentValue.ability.name;
  return currentValue.ability.name + ", " + recursiveAbilities(list.slice(1));
};

//Using a recursive function to get the values for the types
export const recursiveTypes = (list) => {
  let currentValue = list[0];
  if (list.length === 1) return currentValue.type.name;
  return currentValue.type.name + ", " + recursiveTypes(list.slice(1));
};
