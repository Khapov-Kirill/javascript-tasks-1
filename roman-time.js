function translate(n){
	for (var i = a.length - 1; i >= 0; i--) {
        while (n >= b[i]) {
            str += a[i];
            n -= b[i];
        }
    }
}

var hours = process.argv[2];
var minutes = process.argv[3];

var a = new Array("I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M");
var b = new Array(1,4,5,9,10,40,50,90,100,400,500,900,1000);
var str = "";

if(hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
	console.log("Incorrect data");
else {
	translate(hours);
	str += ":";
	translate(minutes);
	console.log(str);
}

