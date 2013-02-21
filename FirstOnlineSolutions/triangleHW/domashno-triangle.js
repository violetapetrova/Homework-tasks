
 $(document).ready(function(){
  $('#check_numbers').click(function (){
   var a=parseInt($('#num1').val());
   var b=parseInt($('#num2').val());
   var c=parseInt($('#num3').val());
  
   if(a<0||b<0||c<0){
    
		alert("Chislata ne sa polojitelni!");
		}
		 else if((a>b+c)||(b>a+c)||(c>a+b)){ //proverka za stranite na triygylnik
		        alert("Chislata ne sa strani na triygylnik!");
		  }
		    else {
			   if((a==b)&&(b==c)){ //ravnostranen triygylnik
			 
			     $('div').css({"width":"0","height":"0","border-left":"100px solid #ccc","font-size":"0","border-right":"100px solid #ccc","border-bottom":"100px solid red"});
			   }
			     else if((a==b)||(b==c)||(a==c)){ //ravnostranen
				  console.log(b);
				   $('div').css({"width":"0","height":"0","border-left":"50px solid #ccc","font-size":"0","border-right":"50px solid #ccc","border-bottom":"100px solid black"});
				 }
				   else { //raznostranen
				     $('div').css({"width":"0","height":"0","border-left":"120px solid #ccc","font-size":"0","border-right":"50px solid #ccc","border-bottom":"200px solid blue"});
				   }
			}
	
  });
  });