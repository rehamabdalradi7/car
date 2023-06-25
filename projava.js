

function Check_Fullname(Name) {



    var Name=document.getElementById("Fullname").value;
       var Array_Fullname=["!","@","#","$","%","^","&","*","1","2","3","4","5","6","7","8","9","0"];
    for (var i = 0; i < Array_Fullname.length; i++) {
        var Split_Fullname=Name.split(Array_Fullname[i]);

     if (Name!=Split_Fullname) {
           alert("Can't have this character [!@#$%^&*] and[1,2,3,4,5,6,7,8,9,0]");
                }
        }

}


function Check_ID(ID) {



var ID=document.getElementById("ID").value;

if(ID.search(/(0\d{1,4})?(1\d{1,4})-\d{4}-\d{3}/)!=0)
{
alert("The ID must be 11 digits");

}


}

function Check_Email(Email) {



    var Email=document.getElementById("Email").value;
       var Array_Email=["@",".com"];
    for (var i = 0; i < Array_Email.length; i++) {
        var Split_Email=Email.split(Array_Email[i]);

     if (Email==Split_Email) {
           alert("Email have @ and .com");
                }
        }




}


function Check_Number(Numberr) {



var Numberr=document.getElementById("Number").value;

if(Numberr.search(/(09\d{2,10})/)!=0)
{
alert("The Number  must be 09XXXXXXXX ");

}


}



function Check_Date(Datee) 



var Datee=document.getElementById("Date").value;

if(Datee.search(/\d{2}-\d{2}-\d{4}/)!=0)
{
alert("The Number  must be DD-MM-YYYY ");

}
function Check_Day(day) {



var day=document.getElementById("Day").value;

if(day.search('\d'+[1-365]) )
 {
   alert("The Day  must be Interer ");

 }
}

let captcha;
function generate() {

// Clear old input
document.getElementById("submit").value = "";

// Access the element to store
// the generated captcha
captcha = document.getElementById("image");
let uniquechar = "";

const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Generate captcha for length of
// 5 with random character
for (let i = 1; i < 5; i++) {
uniquechar += randomchar.charAt(
Math.random() * randomchar.length)
}

// Store generated input
captcha.innerHTML = uniquechar;
}

function printmsg() 
const usr_input = document
.getElementById("submit").value;

// Check whether the input is equal
// to generated captcha or not
if (usr_input == captcha.innerHTML) {
let s = document.getElementById("key")
.innerHTML = "Matched";
generate();
}
else {
let s = document.getElementById("key")
.innerHTML = "not Matched";
generate();

}









function For_all1()
{

var Fullname = document.getElementById('Fullname').value;
localStorage.setItem("Fullname", Fullname);

var ID = document.getElementById('ID').value;
localStorage.setItem("ID", ID);

var Datee = document.getElementById('Datee').value;
localStorage.setItem("Datee", Datee);

var Numberr = document.getElementById('Numberr').value;
localStorage.setItem("Numberr", Numberr);

var Email = document.getElementById('Email').value;
localStorage.setItem("Email", Email);


var count = document.getElementById('count').value;
localStorage.setItem("count", count);


} 


function For_all2()
{

//document.getElementById('makepayments').value =localStorage.getItem("makepayments");

var intt=localStorage.getItem("ID");
alert(intt);


document.getElementById('Fullname').value =localStorage.getItem("Fullname");

document.getElementById('ID').value =localStorage.getItem("ID");

document.getElementById('Datee').value =localStorage.getItem("Datee");

document.getElementById('Numberr').value =localStorage.getItem("Numberr");

document.getElementById('Email').value =localStorage.getItem("Email");

document.getElementById('count').value =localStorage.getItem("count");



}
function Sum(x){
var y=x*0.01;
var z=x*0.05
var final_value=x+y+z;
}
var question =
confirm("The price is"+Sum(x));
