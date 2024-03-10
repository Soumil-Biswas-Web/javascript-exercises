function getAge(yearOfBirth, yearOfDeath){
    if(!yearOfDeath){
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

const findTheOldest = function(people) {
    const maxAge = people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        if (oldestAge > currentAge){
            return oldest;
        }
        else return current;
    });
    return maxAge;
};

// Do not edit below this line
module.exports = findTheOldest;
