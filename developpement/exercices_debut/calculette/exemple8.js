var a=parseFloat(window.prompt('valeur de a'));
var b=parseFloat(window.prompt('valeur de b'));
var signe=window.prompt('quelle multiplication souhaitez vous effecuter');


switch(signe) {
	case '+': 
	case 'addition':
    	var result=a+b;
    break;
    
	case '-': 
	case 'soustraction':
    	var result=a-b;
    break;

	case '*': 
	case 'multiplication':
    	var result=a*b;
    break;

    case '/':
    case 'division':
    if(b === 0) {
    	var result='Pas de division par 0'
    }
   	else {
   		var result=a/b;
   	} 
   	break;

	case '^': 
	case 'puisance':
		var result=a**b;
    break;

    default:
    	result='resultat pas possible';
    break;
 }

if (isNaN(a) && isNaN(b)) {

	document.write('resultat pas possible')
}

else{
	document.write(result)
}