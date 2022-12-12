class patient {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }
  
  let MyPatient = new Patient("12289", "Mohamed ali", 14);
  document.getElementById("demo").innerHTML=
 MyPatient.id + " " + MyPatient.name + " " + MyPatient.age;