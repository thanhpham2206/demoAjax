function loadCurrency(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			myFunction(xhttp);
		}
	};
	xhttp.open("GET", "dataXML.xml", true);
	xhttp.send();
}
function myFunction(xml){
	var i;
	var xmlDoc = xml.responseXML;
	var p = "";
	var x = xmlDoc.getElementsByTagName("CD");
	for(i = 0; i < x.length; i++){
		p += x[i].getElementsByTagName("Currency")[0].childNodes[0].nodeValue + 
		" &ndash; " + 
		x[i].getElementsByTagName("Symbol")[0].childNodes[0].nodeValue + "<br />";
	}
	document.getElementById("currency").innerHTML = p;
}