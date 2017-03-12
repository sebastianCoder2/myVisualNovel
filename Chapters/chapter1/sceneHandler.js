        var counter = -1;
        var mydata = $.parseJSON(chapter1op0);
		var decisionJson = $.parseJSON(choose1);
        var gameover = false
		var allowclick = 0;
		var placeHolderText = 0;
		var placeHolderName = 0;
        var musicCounter = 0;
        var src = $.parseJSON(music);
$(document).ready(function() {
audioplay();
function audioplay(){
        
        
        var audio = document.getElementById('playme');
        audio.setAttribute("src", src[musicCounter].song1);
        console.log(audio); 
        }
   
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
        $('#option1').empty();
        $('#option2').empty();
        $('#option3').empty();
        $('#background').css("background-image", "none");
        $('#loadbutton').click(laden);

        if (counter==mydata.length-1){
            counter = mydata.length-1
        }else{
        counter = (counter + 1) % mydata.length;

    }

    

    if (mydata[counter].skip == true){
        musicCounter = (musicCounter+1) % src.length;;
        audioplay();
    }

         console.log(counter);

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
	//click deaktivert	
			allowclick = 1;
    		var op1;
    		var op2;
    		var op3;
    //optionen werden angezeigt
            fillDecision();
           $( "#option1" ).on('keypress click',function(){
    			allowclick = 0;
                if($.inArray( "chapter1op0", mydata )){
                    mydata = $.parseJSON(chapter1op1);
                    decisionJson = $.parseJSON(choose2);
                }else if($.inArray( "chapter1op1", mydata )){
                    mydata = $.parseJSON(chapter2op1);
                    decisionJson = $.parseJSON(choose3);
                }
    			counter=-1;
                hideOptions();	
                
                
            });
		
            $( "#option2" ).on('keypress click',function(){
				allowclick = 0;
                if($.inArray( "chapter1op0", mydata )){
				    mydata = $.parseJSON(chapter1op2);
				    decisionJson = $.parseJSON(choose2);
                }else if($.inArray( "chapter1op2", mydata )){
                    mydata = $.parseJSON(chapter2op2);
                    decisionJson = $.parseJSON(choose3);
                }
				counter=-1;
                hideOptions();			
            });
//game Over option
            $( "#option3" ).on('keypress click',function(){
					allowclick = 0;
                if($.inArray( "chapter1op0", mydata )){
					mydata = $.parseJSON(chapter1op3);
                }else if($.inArray( "chapter1op3", mydata )){
                    mydata = $.parseJSON(chapter2op3);
                }
					counter=-1;
					hideOptions();
					gameover = true;
					
                	
            });
    	}

    }
    
//wird grbraucht um clicken bei entscheidung zu deaktivieren und danach wieder zu aktivieren
    function clickEvent(){
        if(allowclick == 0){
		doit();
		$("body").on('click');
    }else{
        
    }
	}
function fillDecision(){
    if(gameover == true){
        gameover = false;
    }else{
        
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
                $('#savebutton').show();
                $('#savebutton').click(speichern);
            }
        }
}
    function laden(){
        if(localStorage.getItem('gameStorage') == null){
                        alert("There is no save data");
        }else{
            allowclick = 0;
            mydata = $.parseJSON(localStorage.getItem('gameStorage'));
            decisionJson = $.parseJSON(localStorage.getItem('gamedecisionStorage'));
            counter = mydata.length-1
        }
    }

    function speichern(){  
        alert("Save complete");
    allowclick = 0;     
    window.localStorage.clear();      
localStorage.setItem('gameStorage', JSON.stringify(mydata));
localStorage.setItem('gamedecisionStorage', JSON.stringify(decisionJson));

$('#savebutton').hide();

    }
//versteckt und leert entscheidung nach dem click
    function hideOptions(){
            $('#option1').empty();
            $('#option2').empty();
            $('#option3').empty();
            $('#option1').hide();
            $('#option2').hide();
            $('#option3').hide();
            $('#savebutton').hide();
    }
//holt sich character aus dem Json und setzt ein
    function getCharacter(){       
    if (mydata[counter-1] != null){ 
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
        }else{
            var charImg = ""; 
                charImg += '<li><img src= "' + mydata[counter].image + '"></li>';
                $('#character').append(charImg);
        }
     }
//holt background aus Json und setzt ein
    function getBackground(){
        if (mydata[counter-1] != null){
        console.log("bg"+mydata[counter-1].bgimg);
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
        }else{
            var bg ="url(" + mydata[counter].bgimg + ")";
                $("#background").css("background-image", bg);
        }
    }
});