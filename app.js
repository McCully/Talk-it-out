var value = 42;
if (value >= 53){
 value += 42;
} else {
value -= 13;
}
value += "11";  // "2911"
var array =[];
for(var i=0; i < value.length; i++){
// console.log(value.length);
 array.push(value.charAt(i));
 // console.log("logging out " , array[i]);
}

array.shift();
array.pop();
// console.log(array);
var hey = "";
// console.log(array.length);
for(i = array.length -1; i >= 0; i--) {
   hey += array[i];
// console.log(hey);
}
value=parseInt(value);
hey = parseInt(hey);
console.log(value);
console.log(hey);


// value += hey;
value = value + hey;
console.log("is this working", value);

if (value < 60){
  value = 14;
}else if(value = 2930){
  value = 27;
}else{
  value = 2;
}
// console.log("for loop", value);

for( i=10; i >= 1; i--){
  value ++;
}
// console.log("for loops 10", value);


var functionA = function(val){
  val = val.toString();
  console.log("step 1 ", val);
  if(val.length > 1){
    val = val.substr(1);
    console.log("step 2", val);
  };
  return val;
}

value = functionA(value);
console.log("this is value", value);
