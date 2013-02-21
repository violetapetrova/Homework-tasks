$(document).ready(function() {
 $("#regform").validate({
                rules: {
                    ime: "required",
                    familiq: "required",
                    tel:"required",
					EGN:"required"},
                messages: {
                    ime: "Vyvedete svoeto ime",
                    familiq: "Vyvedete svoqta familiq",
                    EGN: "Vyvedete svoeto EGN",
					tel:"Vyvedete svoq tel. nomer"
                }

});
      var registrationData=0;
	  var errors=0;
	  $('#reg').click(function(){
      $("#regform").html('');
			$("#regform input[type='text']").each(function(){
			registrationData +=$(this).prev().text() + ": " + $(this).val() + "</br>";
			console.log(registrationData);
				
			});
			if(errors == 0){
				$("#regcontent").html(registrationData);}
});
});