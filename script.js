// Math functions exercise ---------------

// const square = (a) => {
//     return a * a;
// }

// const hypotenuse = (a, b) => {
//     return Math.sqrt(square(a), square(b));
// }

// const abs = (number) => {
//     if (number >= 0){
//         return number;
//     }else {
//         return -number;
//     }
// }

// Generating emails -----------------

const emailFromLogin = (name) => name + '@covidconspiracy.il';

const loginFromName = (first, last) =>{
  const part1 = last.substr(0,4)
  const part2 = first.substr(0,3)
  return part1.toLowerCase() + part2.toLowerCase()
}

const emailFromName = (first, last) =>{
  const login = loginFromName (first, last);
  return emailFromLogin(login);
}

// Salary function exercise -----------------

const salary = (pay, hours, days) => {
  return pay * hours * days;
};

const taxed_salary = (salary, tax) => {
  return (salary * (1-(tax/100)));
};

// Maximum from 3 values exercise --------------

const max3 = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
 
  if (b > c) {
    return b;
  }
 
  return c;
}

