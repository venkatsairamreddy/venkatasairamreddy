var name="my name is ram";
var number=8297;
var flag='true';
var arrayValues=['venkat','sai','ram','reddy'];
var objValues={
    name: "venkat Sai",
    phone: 98989898,
    industry:"It"
};


function getName(){
     document.getElementById("name").textContent = name; 
}
function getnumber(){
    document.getElementById("number").textContent = number;
    
}
function getFlag(){
     document.getElementById("flag").textContent = flag;
}
function getArray(){
    document.getElementById("arrayValues").textContent = arrayValues;
}
function getObj(){
     //document.getElementById("objValues").textContent = objValues;
    document.getElementById("objValues").innerHTML = objValues;
    
}

function  call(){
    getName();
    getnumber();
    getFlag();
    getArray();
    getObj();
    
}