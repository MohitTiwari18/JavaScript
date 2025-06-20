function firstFunctionName(callback) {
  console.log("Frist function is running");
  callback();
}
function secondFunctionName() {
  console.log("second function is running");
}
firstFunctionName(secondFunctionName);
