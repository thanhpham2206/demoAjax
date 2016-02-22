$(document).ready(function (){
	$.ajax({
		url: "https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json"
	})
	.done(function( jsonData ) {
		var currencies = JSON.parse(jsonData);

		for(var currencyKey in currencies){
			var symbol = currencies[currencyKey].symbol;
			var currencyElement = "<li><a href='#'>" + currencyKey + ' - ' + symbol + '</a></li>';
			$(currencyElement).appendTo($('#ddl'));
		}
	});
 
	var isDisplay = true;
	$("#ddlButton").on("click", function(){
  	if(isDisplay){
    	$("#ddl").addClass("displayed");
    } else{
    	$("#ddl").removeClass("displayed");
    }
    isDisplay =! isDisplay;
  });
});
