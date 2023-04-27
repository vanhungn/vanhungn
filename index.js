// //function
// const students =[
//     {
//         name:"Nguyen Van A",
//         gender:"male",
//         math:8,
//         english:7,
//         chemischy:4,
//     },
//     {
//         name:"Nguyen Van B",
//         gender:"male",
//         math:8,
//         english:9,
//         chemischy:7,
//     },
//     {
//         name:"Nguyen Van C",
//         gender:"male",
//         math:8,
//         english:7,
//         chemischy:10,
//     },
//     {
//         name:"Nguyen Van D",
//         gender:"male",
//         math:8,
//         english:6,
//         chemischy:8,
//     },
// ];
// function greeting(name){
//    console.log("hello"+name+"!");
// }
// greeting("ronaldo");
// greeting("messi");
// greeting("mitoma");
//  function calculate(math,chemischy,english)
//  {
//     const result =(math + chemischy+english)/3;
//     return result;
//  }
//  const studentsA=calculate(7,8,9,);
//  const studentsB=calculate(7,6,9,);
 
// console.log(studentsA);
 
// console.log(studentsB);
function vendingMachine(numberofproduct){
    switch(numberofproduct)
    {
        case 1: console.log("Pepsi");
       return 2;
        case 2: console.log("Cocacola");
       return 3;
        case 3: console.log("NutiBoost");
       return 3;
        case 4: console.log("Không Độ");
       return 5;
        case 5: console.log("DR Thanh");
       return 1;
        case 6: console.log("revine");
       return 4;
        default:
            return ;
    }
    
}
// const top=vendingMachine(5);
// console.log(top);

let toto=parseInt(prompt("please insert money :"));

if(isNaN(toto))
{
    console.log(" Mời nhập lại:");
}
else if(!isNaN(toto) && toto>0 && parseInt(toto)===toto)
{
    while(toto>=0)
    {
        
        let num=parseInt(prompt("please insert money drink:"));
        let top=vendingMachine(num);
      
        if(toto>=top)
        {
           toto -=top;
        console.log("số tiền còn lại của bạn là :" ,toto);
        }
        else
        {
            console.log("Số tiền còn lại của bạn không đủ  bạn còn thiếu ",top - toto);
            break;
        }

    }
  
}