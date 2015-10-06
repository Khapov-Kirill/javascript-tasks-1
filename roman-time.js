function arabic_to_roman(n){
	var str = "";
	for (var i = roman_numbers.length - 1; i >= 0; i--) {
        while (n >= arabic_numbers[i]) {
            str += roman_numbers[i];
            n -= arabic_numbers[i];
        }
    }
	if(str == "")
		str += "N";
	return str;
}

var hours = process.argv[2];
var minutes = process.argv[3];

var roman_numbers = new Array("I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M");
var arabic_numbers = new Array(1,4,5,9,10,40,50,90,100,400,500,900,1000);
var time = "";

if(hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
	console.log("Incorrect data");
else {
	time += arabic_to_roman(hours);
	time += ":";
	time += arabic_to_roman(minutes);
	console.log(time);
}

