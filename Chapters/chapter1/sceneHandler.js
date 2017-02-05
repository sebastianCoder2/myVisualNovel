counter = -1;

		
		var mydata = $.parseJSON(chapter1);
		var decisionJson = $.parseJSON(choose1);
        
		var allowclick = true;
		var placeHolderText = 0;
		var placeHolderName = 0;


$(document).ready(function() {

	
    $("body").fadeIn(2000,function(){
    	
    });

$('body').contextmenu(function(e) {
    //e.preventDefault();
  //counter = (counter - 2) % mydata.length;
});

 $('body').on('click',clickEvent);

 function doit(){
	 
        $('#clicktostart').hide();
        $('#textBox').show();
 		$('#text').html('');
 		$('#personWhoTalk').html('');
 		$('#character').html('');
        
        if (counter==mydata.length-1){
            counter = mydata.length-1
        }else{
        counter = (counter + 1) % mydata.length;
    }
        console.log(counter);

         
                    
        var bg ="url(" + mydata[counter].bgimg + ")";
        $("#main-screen-chapter1").css("background-image", bg);
        console.log(mydata[counter].bgimg);
                

        var charImg = ""; 
        charImg += '<li><img src= "' + mydata[counter].image + '"></li>';
        $('#character').append(charImg);
        console.log(mydata[counter].image);
        

        var textAdder = setInterval(function(){
            document.getElementById("text").innerHTML += mydata[counter].text.charAt(placeHolderText);
            if (++placeHolderText == mydata[counter].text.length){
                clearInterval(textAdder);
                placeHolderText=0;
            }else{
            	$('body').click(function(){

            		clearInterval(textAdder);
            		placeHolderText=0;
            	});
            }
    }, 1);


        var nameAdder = setInterval(function(){
            document.getElementById("personWhoTalk").innerHTML += mydata[counter].name.charAt(placeHolderName);
            if (++placeHolderName == mydata[counter].name.length){
                clearInterval(nameAdder);
                placeHolderName=0;
            }else{
            	$('body').click(function(){
            		clearInterval(nameAdder);
            		placeHolderName=0;
            	});
            }
        }, 1);
	 
    	if (counter==mydata.length-1){
		
			$("body").off('click', clickEvent);
    		var op1;
    		var op2;
    		var op3;

            for (var i = 0; i < decisionJson.length; i++) {
            	
                op1 = decisionJson[i].option1;
                op2 = decisionJson[i].option2;
                op3 = decisionJson[i].option3;

                $('#option1').append(op1);
                $('#option2').append(op2);
                $('#option3').append(op3);

                $('#option1').show();
                $('#option2').show();
                $('#option3').show();

				
            }
			
           $( "#option1" ).click(function() {
            
			$('body').on('click',clickEvent);
			mydata = $.parseJSON(chapter1op1);
			decisionJson = $.parseJSON(choose2);
			counter=-1;
			
                $('#option1').empty();
                $('#option2').empty();
                $('#option3').empty();
					
				$('#option1').hide();
                $('#option2').hide();
                $('#option3').hide();
			  
		});
		$( "#option2" ).click(function() {
					$('body').on('click',clickEvent);
					mydata = $.parseJSON(chapter1op2);
					decisionJson = $.parseJSON(choose2);
					counter=-1;
						$('#option1').empty();
						$('#option2').empty();
						$('#option3').empty();
						
						$('#option1').hide();
						$('#option2').hide();
						$('#option3').hide();
		});
		$( "#option3" ).click(function() {
					$('body').on('click',clickEvent);
					mydata = $.parseJSON(chapter1op3);
					counter=-1;
						$('#option1').remove();
						$('#option2').remove();
						$('#option3').remove();
						
		});
    	}

    }
	function clickEvent(){
		doit();
		$("body").on('click');
	}
	
});