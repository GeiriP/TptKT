function checkTemp (T){
 if (T <= 20) return -1;
 else if(21 <= T && T <= 40) return 0;
 else return 1;
 }
console.log(checkTemp(30));
console.log(checkTemp(100));
console.log(checkTemp(1));
