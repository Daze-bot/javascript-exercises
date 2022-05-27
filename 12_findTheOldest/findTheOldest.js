const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(array) {
  let oldest = array.sort((a, b) => {
    return (getAge(a.yearOfBirth, a.yearOfDeath)) > (getAge(b.yearOfBirth, b.yearOfDeath)) ? -1 : 1
  });
  let first = oldest[0];

  let alive = array.some(person => {
    if (!person.yearOfDeath) {
      return true;
    }
  });

  if (alive) {
    return first;
  } else {
    return "All Dead";
  }
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

console.log(findTheOldest(people));
// Do not edit below this line
//module.exports = findTheOldest;
