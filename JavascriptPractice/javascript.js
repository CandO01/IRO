
const btnOne = document.getElementById('btnid1');
const btnTwo = document.getElementById('btnid2');

function clickMe(){
    alert('Thank You!!!');
}
function pressMe(){
    alert('Congratulations!!!');
};

const myArray =[10, 20, 30, 40];
//to know the total number of values in a an array
//const totalArray = myArray.length;
//console.log(totalArray);

//to add anothe value to an array 

//const addNew = myArray.push([200]);
const final = myArray.push(100);
console.log(final);

let cutOff = '';
function yourGrade(cutOff){
    if(cutOff >= 50){
        return('Congratulations!!!');
    }
    else{
        return('You failed')
    }
}
let finalScore = yourGrade(50);
console.log(finalScore);
