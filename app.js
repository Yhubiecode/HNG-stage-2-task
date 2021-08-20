class myDetails {
    constructor(name) {
      this.name = name;
    }
  
    myName() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const Me = new myDetails('Ubong Okon');
  
  Me.myName();