function forLoop(){
  var finalStr = '';
  for(i=1; i< 25; i++){
    if (i == 1){
      finalStr += 'I am 1 strange loop. ';
    }
    else {
      finalStr += 'I am ${i} strange loops. ';
    }
  }
  return finalStr;
}


function whileLoop(num){
  while (num > 0){
    console.log(num--);
  }
  return 'done';
}
