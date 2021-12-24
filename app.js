function getName() {
  let dayOfBirth = document.getElementById("day-input").value;
  let monthOfBirth = document.getElementById("month-input").value;
  let yearOfBirth =document.getElementById("year-input").value;
  let genders = document.getElementsByName("gender");
}

//Gender Validation
function getGender () {
      if (Male.checked){
        return "Male"
      }else if(Female.checked){
        return "Female"
      } 
  }

  //Date Validation
  function getDate(){
    
  }