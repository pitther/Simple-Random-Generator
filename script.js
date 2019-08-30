new Clipboard('.button_Generate');
tipElem=document.getElementById("copiedTipContainer");
function generate()
{
	tipElem=document.getElementById("copiedTipContainer");
var frm=document.getElementById("form1");
var res=document.getElementById("result");

var min =+ frm.elements[0].value;
var max =+ frm.elements[1].value;

var chkd1=frm.elements[2].checked;
var chkd2=frm.elements[3].checked;

var resElem=document.getElementById("resBlock").style;



if (chkd1==true)
{
	var rand =  Math.round(Math.random() * (max - min) + min);
	resElem.width="250px";
	if (max > 99999999999)
		resElem.width="500px";
	else
		resElem.width="250px";
}
else if (chkd2==true)
{
	var rand = Math.random() * (max - min) + min;
	resElem.width="500px";

}


if (max==null||min==null)
{
	res.innerHTML="Enter diapason";
	document.getElementById("result").style.paddingTop="3px";
	document.getElementById("result").style.webkitUserSelect="none";
}
else if(min>max)
{
	res.innerHTML="Invalid diapason";
	if (chkd1==true)
	{
		document.getElementById("result").style.paddingTop="3px";	
	}
	else
	{
		document.getElementById("result").style.paddingTop="24px";	
	}
		document.getElementById("result").style.webkitUserSelect="none";
	}
	else if(min==max)
	{
		res.innerHTML="Invalid diapason";
		if (chkd1==true)
			document.getElementById("result").style.paddingTop="3px";
		else if (chkd2==true)
			document.getElementById("result").style.paddingTop="25px";
		document.getElementById("result").style.webkitUserSelect="none";
	}
	else
	{
		document.getElementById("result").style.cursor="text";
		document.getElementById("result").style.webkitUserSelect="text";
		document.getElementById("result").style.paddingTop="25px";
		res.innerHTML=rand;
		tipElem.style.animationName="tip";
		setTimeout(tipAnimation, 1000);
	}

	
}	

var m = 0;
var nn = 0;

function tipAnimation(){
	tipElem.style.animationName="";
}

function bar1Active(){
	var bar1 = document.getElementById("bar").style;
	if (m%2==0)
		bar1.left="0";
	else 
		bar1.left="-250px";
	m++;
	}



function bar2Active(){
	var bar2 = document.getElementById("bar2").style;
	if (nn%2==0)
	{
		bar2.left="0";
	}
	else 
	{
		bar2.left="-250px";
	}
	nn++;
	}


