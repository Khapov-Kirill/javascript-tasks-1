function small(num){
	switch (num){
		case 0: break;
		case 1: str += "X"; break;
		case 2: str += "XX"; break;
		case 3: str += "XXX"; break;
		case 4: str += "XL"; break;
		case 5: str += "L"; break;
	}
}
function big(num){
	switch (num){
		case 0: break;
		case 1: str += "I"; break;
		case 2: str += "II"; break;
		case 3: str += "III"; break;
		case 4: str += "IV"; break;
		case 5: str += "V"; break;
		case 6: str += "VI"; break;
		case 7: str += "VII"; break;
		case 8: str += "VIII"; break;
		case 9: str += "IX"; break;
	}
	return;
}
// Begin
var hours = process.argv[2];
var minutes = process.argv[3];

var h_dec = Math.floor(hours/10);
var h_uni = hours%10;
var m_dec = Math.floor(minutes/10);
var m_uni = minutes%10;
var str = "";
if((hours > 23 || hours < 0) || (minutes > 59 || minutes < 0))
	console.log("Data is incorrect");
else {
	small(h_dec);
	big(h_uni);
	str += ":";
	small(m_dec);
	big(m_uni);
	console.log(str);
}
