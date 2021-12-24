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
  function getDate(day,month,year){
    if (year % 4 == 0 && month == 2){
      if(day >29){
        return false;
      }else{
        return true;
      }
    }
    if (year % 4 !=0 && month != 2){
      if(day > 28){
        return false;
      }else{
        return true;
      }
    }
    
    let present = new Date();
    let d = new Date(year +"/"+month +"/"+day);
    if(d > present){
      return false;
    }else{
      return true;
    }
























  }