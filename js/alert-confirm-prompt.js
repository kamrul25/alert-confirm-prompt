// alert("Taka dar de 500 taka")
const showAlert = () =>{
    alert("Dosto , Tui amre 500 taka dar dibi");
}

const lendMoney = () =>{
   const result = confirm("Dosto, Tui ki amy 500 taka dar dibi");
   console.log(result);
   if(result === true){
    alert("Tui Amar sasa dos");
   }
   else{
    alert("Tui dore giya mor")
   }
}

const getInfo = () =>{
   const name = prompt("Nam ki tor?")
   console.log(name);
   if(name === null){
    alert("Name chara de kono kam nai . Ja dore giya mor!!!");
   }
   else{
       console.log(name, "Welcome to new world");
    // console.log(alert(`Hi! ${name} .`));
       alert(`Hi! ${name}. Welcome to new world!!!`);
   }
}