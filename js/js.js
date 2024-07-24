

function getalert(){
    alert("The toggle accoured")
}

// ...changetime...


function chngtime(){
    document.getElementById('butn').innerHTML= Date()
}


// Create an object:
const person = {
    firstName: "John",
    lastName: "David",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  

  // display data

  document.getElementById('name').innerHTML = person.fullName();

  const person2 = {
    firstName: "Eshban",
    lastName: "Younis",
    id: 4444,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
  };

  //display dta

  document.getElementById('name2').innerHTML = person2.fullName();
