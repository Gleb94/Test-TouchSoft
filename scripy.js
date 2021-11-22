// №1

const someFn = "пиТе";  
function change_register(someFn) {
let new_someFn = "";
let len = someFn.length;
  for (var i = 0; i < len; i++) {
    if (someFn[i] === str[i].toLowerCase()) {
      new_someFn += someFn[i].toUpperCase();
    } else {
      new_someFn += someFn[i].toLowerCase();
    }
  }
  return new_someFn;
}

document.writeln(change_register(someFn));

// №2

function sayHello(name){
  if(name === 'Mark'){
    console.log("hi")
  }else{
    console.log("hello")
  }
}

sayHello('Mark')

// №3 


