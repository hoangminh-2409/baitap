numbers = [1, 2, 3, 4, 5] 
function myFunction(numbers){
    let SUM = 0;
    for(var i = 0; i<numbers.length; i++){
        SUM = SUM + numbers[i];
    }
    return SUM;
};
console.log(myFunction(numbers));



