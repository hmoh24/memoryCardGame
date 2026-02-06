function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomiseArray(array, randomIndexFunc) {
  let returnArray = [];
  let arrayStartLength = array.length;
  for (let i = 0; i < arrayStartLength; i++) {
    let index = randomIndexFunc(array);
    returnArray.push(array.at(index));
    array = array.filter((element, position) => {
      return position !== index;
    });
  }

  return returnArray;
}

export { randomIndex, randomiseArray };
