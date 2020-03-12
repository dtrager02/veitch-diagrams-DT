console.log("Made by daniel trager");
var case1 = [];
/*var a = false;
var b = false;
var c = false;
var d = false;*/
var origExp = "";
var dict = {
    'A': false,
    "B": false,
    "C": false,
    "D": false
  };
  var cases = [[1,1,0,0],
                [1,1,1,0],
                [0,1,1,0],
                [0,1,0,0],
                [1,1,0,1],
                [1,1,1,1],
                [0,1,1,1],
                [0,1,0,1],
                [1,0,0,1],
                [1,0,1,1],
                [0,0,1,1],
                [0,0,0,1],
                [1,0,0,0],
                [1,0,1,0],
                [0,0,1,0],
                [0,0,0,0],];
var outputs = [];
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the boolean expression: ', exp => {
    origExp = exp;
    
  //origExp = 'B~D+~B~D';
var orArr = origExp.split('+');
var orArrSimp = [];
for(var  k = 0; k < cases.length; k++){
    case1  = cases[k];
    dict["A"] = !(!case1[0]);
    dict["B"] = !(!case1[1]);
    dict["C"] = !(!case1[2]);
    dict["D"] = !(!case1[3]);
    orArrSimp = [];
    //console.log(dict["A"]);
    for(var  i = 0; i < orArr.length; i++){
      var temp = true;
      var j = 0;
      while(j < orArr[i].length){
        if(orArr[i][j] == "~"){
          temp = temp && !dict[orArr[i][j+1]]
          j+=2;
          //console.log('in if');
        }
        else{
          temp = temp && dict[orArr[i][j]]
          j+=1;
        }
        //console.log(j < orArr[i].length);
      }
      orArrSimp.push(temp);
      //console.log(orArrSimp);
    }
    temp = orArrSimp[0];
    for(var  h = 1; h < orArrSimp.length; h++){
       temp = temp || orArrSimp[h];
    }
    outputs.push(temp);
}
    
console.log(outputs);
for(var  h = 1; h < outputs.length; h++){
  if(outputs[h]){
    outputs[h] = 1;
  }
  else{
    outputs[h] = 0;
  }
}
var ConvertBase = function (num) {
  return {
      from : function (baseFrom) {
          return {
              to : function (baseTo) {
                  return parseInt(num, baseFrom).toString(baseTo);
              }
          };
      }
  };
};
ConvertBase.bin2hex = function (num) {
  return ConvertBase(num).from(2).to(16);
};

var bin = 0;
var hex =''
for(var i = 0; i <= 15; i+=4){
  bin = 0;
  bin += outputs[i]*1000 + outputs[i+1]*100 + outputs[i+2]*10 + outputs[i+3];
  bin +='';
  hex += ConvertBase.bin2hex(bin);
}
console.log(hex);

readline.close();
  });

