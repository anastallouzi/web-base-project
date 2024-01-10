function displayValues() {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var lifeStyle = document.getElementById("lifestyle").value;
  
  
  
    document.getElementById("h").innerHTML = height; 
    document.getElementById("w").innerHTML = weight; 
    document.getElementById("Age").innerHTML = age; 
    document.getElementById("g").innerHTML = gender; 
    document.getElementById("ls").innerHTML = lifeStyle;
  
    var BMI = Number((weight / height /height)*10000) ;
     document.getElementById("bmi").innerHTML = BMI;
  
    if (BMI < 18.5){
      document.getElementById("status").innerHTML = "underweight";
  
    }
    else if (BMI > 18.5 && BMI < 24.9){
      document.getElementById("status").innerHTML = "Normal";
    }
    else if (BMI > 25  && BMI < 29.9){
      document.getElementById("status").innerHTML = "Overweight";
    }
    else if (BMI > 30 && BMI < 34.9){
      document.getElementById("status").innerHTML = "Overweight";
    }
    else if (BMI > 35){
      document.getElementById("status").innerHTML = "Extremely Obese";
    }
    else{
      document.getElementById("status").innerHTML = "invalid";
    }
  
  
  
  
  
  
  
  }