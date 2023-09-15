function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}

leapYear(1900); // Output: leap year
