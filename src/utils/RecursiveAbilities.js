export const recursiveAbilities = (list) => {
  let listAbilities = "";
  function loopArray(arr) {
    if (arr.length === 0) return;
    let currentValue = arr[0];
    if (arr.length === 1) {
      listAbilities += currentValue.ability.name;
    } else {
      listAbilities += currentValue.ability.name + ", ";
    }
    return loopArray(arr.slice(1));
  }
  loopArray(list);
  return listAbilities;
};
