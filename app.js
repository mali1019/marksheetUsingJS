// var a = document.getElementById("heading");

// a.innerHTML = 'Muhammad Ali';
// console.log(a.innerHTML);




// var userInput = prompt('enter your name');
// var userName = document.getElementById('heading');
// userName.innerHTML = userInput.toUpperCase();



var std = prompt("enter your name");
var stdname = document.getElementById('stName');
stdname.innerHTML = std ; 

var fname = prompt("Enter Father Name");
var faName = document.getElementById('fName');
faName.innerHTML = fname;

var age = prompt("Enter your age");
var a = document.getElementById('age');
a.innerHTML = age;


var roll = prompt("Enter your roll number");
var rollNo = document.getElementById('rollno');
rollNo.innerHTML = roll;

var inst = prompt("Enter your institude name");
var ins = document.getElementById('ins');
ins.innerHTML = inst;


var maths = +prompt("Enter your maths marks");
var m = document.getElementById('maths');
m.innerHTML = maths;



var phy = +prompt("Enter your physics marks");
var p = document.getElementById('physics');
p.innerHTML = phy;



var eng = +prompt("Enter your english marks");
var e = document.getElementById('english');
e.innerHTML = eng;


var isl = +prompt("Enter your islamiat marks");
var i = document.getElementById('islamiat');
i.innerHTML = isl;


var urdu = +prompt("Enter your urdu marks");
var u = document.getElementById('urdu');
u.innerHTML = urdu;


var obtmark = maths + phy + eng + isl + urdu ;
var t = document.getElementById('total');
t.innerHTML = obtmark ; 

var per = (obtmark/500) *100;
var p = document.getElementById('per');
p.innerHTML = per;


if(per <=90 || per >=100 )
{
    var grade = document.getElementById('grade');
    grade.innerHTML = 'A+' ;
}
else if (per <=80 || per > 90)
{
        var grade = document.getElementById('grade');
    grade.innerHTML = 'A' ;
}
else if ( per <=70 || per > 80)
{
        var grade = document.getElementById('grade');
    grade.innerHTML = 'B' ;
}
else
{
        var grade = document.getElementById('grade');
    grade.innerHTML = 'Fail...' ;
}

