var scores = [24, 32, 17]; 
var arraylength = scores.length;
var roundNumber = 0; 
var msg = ''; 
var i; 

for (i = 0; i < arraylength; i++) {

roundNumber = (i + 1);

msg += "Round ' + roundNumber + ': ';

msg += scores[i] + ‘<br />';

}

document.getElementById('answer").innerHTML = msg;