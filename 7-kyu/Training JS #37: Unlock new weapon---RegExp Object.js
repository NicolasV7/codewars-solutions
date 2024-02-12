function countAnimals(animals, count) {
  return count.map((animal) => animals.split(animal).length - 1);
}

