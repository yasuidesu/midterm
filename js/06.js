function isPrimeNumber(number){
  if(number < 2){
      return false;
    }
    var a = 2;
    while(a < number / 2){
      if(number % a == 0){
         return false;
      }
    }
    var a = 3;
    while(a < number / 3){
      if(number % a == 0){
         return false;
       }
     }


var a = 5;
while(a < number / 5){
  if(number % a == 0){
     return false;
return true;
}
}
var a = 7;
while(a < number / 7){
  if(number % a == 0){
     return false;
return true;
}
}
{

return true;
}
}
