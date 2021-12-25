let akanMale = [
  { day: "sunday", name: "Kwasi" },
  { day: "monday", name: "Kwadwo" },
  { day: "tuesday", name: "Kwabena" },
  { day: "wednesday", name: "Kwaku" },
  { day: "thursday", name: "Yaw" },
  { day: "friday", name: "Kofi" },
  { day: "saturday", name: "Kwame" },
];
let akanFemales = [
  { day: "sunday", name: "Akosua" },
  { day: "monday", name: "Adwoa" },
  { day: "tuesday", name: "Abenna" },
  { day: "wednesday", name: "Akua" },
  { day: "thursday", name: "Yaa" },
  { day: "friday", name: "Afua" },
  { day: "saturday", name: "Ama" },
];
let button = document.querySelector("#submit");
button.addEventListener("click", function () {
  let error = 0;
  let day = document.getElementById("day-input").value;
  let month = document.getElementById("month-input").value;
  let year = document.getElementById("year-input").value;
  let male = document.getElementsById("male");
  let female = document.getElementsById("female");
  let valid = document.getElementById("error");

  if (day <= 0 || day > 31) {
    error = 1;
  } else {
    if (month <= 0 || month > 12) {
      error = 1;
    } else {
      if (year <= 0 || year > 2021) {
        error = 1;
      }
    }
  }
  if (error == 1) {
    valid.style.color = "red";
    valid.innerHTML = "Enter a valid date";
  } else {
    if (getDate(day, month, year)) {
      let d = new Date(year + "/" + month + "/" + day);

      //Gender Validation
      if (male.checked) {
        return "male";
      } else if (female.checked) {
        return "female";
      } else {
        valid.style.color = "red";
        valid.innerHTML = "Enter a valid gender";
      }
    }
  }
});
//Date Validation

function getDate(day, month, year) {
  if (year % 4 == 0 && month == 2) {
    if (day > 29) {
      return false;
    } else {
      return true;
    }
  }
  if (year % 4 != 0 && month != 2) {
    if (day > 28) {
      return false;
    } else {
      return true;
    }
  }

  let present = new Date();
  let d = new Date(year + "/" + month + "/" + day);
  if (d > present) {
    return false;
  } else {
    return true;
  }
}
