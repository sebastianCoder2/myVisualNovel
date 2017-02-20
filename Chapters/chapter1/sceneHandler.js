        counter = -1;
        var mydata = $.parseJSON(chapter1);
		var decisionJson = $.parseJSON(choose1);
        
		var allowclick = true;
		var placeHolderText = 0;
		var placeHolderName = 0;

$(document).ready(function() {

    
//beim ersten laden faded szene rein	
    $("body").fadeIn(2000,function(){
    	
    });

$('body').contextmenu(function(e) {
    //e.preventDefault();
  //counter = (counter - 2) % mydata.length;
});
//doit wird aufgerufen mit click und keypress
 $('body').on('keypress click',clickEvent);

 
 function doit(){
	 
        $('#clicktostart').hide();
        $('#textBox').show();
 		$('#text').html('');
 		$('#personWhoTalk').html('');
 		$('#character').html('');
        $("#background").css("background-image", "none");
        
        if (counter==mydata.length-1){
            counter = mydata.length-1
        }else{
        counter = (counter + 1) % mydata.length;
    }

         
            getBackground();
            getCharacter();
            
        
        
        
//fügt gesprochenen Text ein
        var textAdder = setInterval(function(){
            document.getElementById("text").innerHTML += mydata[counter].text.charAt(placeHolderText);
            if (++placeHolderText == mydata[counter].text.length){
                clearInterval(textAdder);
                placeHolderText=0;
            }else{
            	$('body').on('keypress click',function(){

            		clearInterval(textAdder);
            		placeHolderText=0;
            	});
            }
    }, 1);

//fügt namen des characters ein
        var nameAdder = setInterval(function(){
            document.getElementById("personWhoTalk").innerHTML += mydata[counter].name.charAt(placeHolderName);
            if (++placeHolderName == mydata[counter].name.length){
                clearInterval(nameAdder);
                placeHolderName=0;
            }else{
            	$('body').on('keypress click',function(){
            		clearInterval(nameAdder);
            		placeHolderName=0;
            	});
            }
        }, 1);
//wenn am ende eines json array
    	if (counter==mydata.length-1){
            console.log(counter);
    console.log(mydata);
    console.log(decisionJson);

	//click deaktivert	
			$("body").off('keypress click', clickEvent);
    		var op1;
    		var op2;
    		var op3;
    //optionen werden angezeigt
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
           $( "#option1" ).on('keypress click',function(){
    			$('body').on('keypress click',clickEvent);
    			mydata = $.parseJSON(chapter1op1);
    			decisionJson = $.parseJSON(choose2);
    			counter=-1;
                hideOptions();	
            });
		
            $( "#option2" ).on('keypress click',function(){
				$('body').on('keypress click',clickEvent);
				mydata = $.parseJSON(chapter1op2);
				decisionJson = $.parseJSON(choose2);
				counter=-1;
                hideOptions();			
            });
//game Over option
            $( "#option3" ).on('keypress click',function(){
			     $("body").fadeOut(2000,function(){
					$('body').on('keypress click',clickEvent);
					mydata = $.parseJSON(chapter1op3);
					counter=-1;
					$('#option1').remove();
					$('#option2').remove();
					$('#option3').remove();
					$("body").click();
					$("body").fadeIn(1000,function(){}); 
                });
						
            });
    	}

    }
    $('#savebutton').on('keypress click',function(){

    var zwischenspeicher = mydata;
     var decisionzwischenspeicher = decisionJson;               
localStorage.setItem('gameStorage', JSON.stringify(zwischenspeicher));
localStorage.setItem('gamedecisionStorage', JSON.stringify(decisionzwischenspeicher));
alert("Save complete");
});
$('#loadbutton').on('keypress click',function(){
                    
                    var saveCh = $.parseJSON(localStorage.getItem('gameStorage'));
                    var saveDj = $.parseJSON(localStorage.getItem('gamedecisionStorage'));
                    mydata = saveCh;
                    decisionJson = saveDj;
                    counter=mydata.length-1
                    doit();
                });
//wird grbraucht um clicken bei entscheidung zu deaktivieren und danach wieder zu aktivieren
    function clickEvent(){
		doit();
		$("body").on('click');
	}
//versteckt und leert entscheidung nach dem click
    function hideOptions(){
            $('#option1').empty();
            $('#option2').empty();
            $('#option3').empty();
            $('#option1').hide();
            $('#option2').hide();
            $('#option3').hide();
    }
//holt sich character aus dem Json und setzt ein
    function getCharacter(){        
        if(mydata[counter].image.length > 1){
            if(mydata[counter].image == mydata[counter-1].image ){
                var charImg = ""; 
                charImg += '<li><img src= "' + mydata[counter].image + '"></li>';
                $('#character').append(charImg);
            }else{
                $('#character').fadeOut(150,function(){
                    var charImg = ""; 
                    charImg += '<li><img src= "' + mydata[counter].image + '"></li>';
                    $('#character').append(charImg);
                    $('#character').fadeIn(150,function(){});
                });
            }
        }
     }
//holt background aus Json und setzt ein
    function getBackground(){
        if(mydata[counter].bgimg.length > 1){
            if(mydata[counter].bgimg == mydata[counter-1].bgimg){
            var bg ="url(" + mydata[counter].bgimg + ")";
            $("#background").css("background-image", bg);
        }else{
            $('#background').fadeOut(150,function(){
                var bg ="url(" + mydata[counter].bgimg + ")";
                $("#background").css("background-image", bg);
                $('#background').fadeIn(150,function(){});
            });
            }
        }  
    }
});