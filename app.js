function getName() {
  let dayOfBirth = document.getElementById("day-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let yearOfBirth = Number(document.getElementById("year-input").value);
  let genders = document.getElementsByName("gender");
}

function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }