        var counter = -1;
        var mydata = $.parseJSON(chapter1op0);
		var decisionJson = $.parseJSON(choose1);
        var gameover = false;
		var allowclick = 0;
		var placeHolderText = 0;
		var placeHolderName = 0;
        var musicCounter = 0;
        var musicSrc = $.parseJSON(music);
		var ending1 = 0;
        var ending2 = 0;
        var ending3 = 0;
		var musicSave;
		var audio;
$(document).ready(function() {
audioplay();
function audioplay(){
        
        
        audio = document.getElementById('playme');
		audio.play();
        audio.setAttribute("src", musicSrc[musicCounter].song);
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
        musicCounter = (musicCounter+1) % musicSrc.length;;
        audioplay();
    }

      
			
			setName();
			setText();
            getBackground();
            getCharacter();
            
//wenn am ende eines json array
    	if (counter==mydata.length-1){
            var test = ($.inArray( "Jeff", mydata[0] ));
	//click deaktivert	
			allowclick = 1;
    		var op1;
    		var op2;
    		var op3;
    //optionen werden angezeigt
            fillDecision();
            

        if(mydata[0].arrayName === "chapter1op0"){
           $( "#option1" ).on('keypress click',function(){
    			allowclick = 0;
                
                    mydata = $.parseJSON(chapter1op1);
                    decisionJson = $.parseJSON(choose2);
                
    			counter=-1;
                hideOptions();	
                
                
            });
           $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter1op2);
                    decisionJson = $.parseJSON(choose2);
                    counter=-1;
                hideOptions();
           });
//game over
           $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter1op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
		}else if (mydata[0].arrayName === "chapter1op1" || mydata[0].arrayName === "chapter1op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter2op1);
                    decisionJson = $.parseJSON(choose3);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter2op2);
                    decisionJson = $.parseJSON(choose3);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter2op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter2op1" || mydata[0].arrayName === "chapter2op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter3op1);
                    decisionJson = $.parseJSON(choose4);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter3op2);
                    decisionJson = $.parseJSON(choose4);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter3op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter3op1" || mydata[0].arrayName === "chapter3op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter4op1);
                    decisionJson = $.parseJSON(choose5);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter4op2);
                    decisionJson = $.parseJSON(choose5);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter4op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter4op1" || mydata[0].arrayName === "chapter4op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter5op1);
                    decisionJson = $.parseJSON(choose6);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter5op2);
                    decisionJson = $.parseJSON(choose6);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter5op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter5op1" || mydata[0].arrayName === "chapter5op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter6op1);
                    decisionJson = $.parseJSON(choose7);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter6op2);
                    decisionJson = $.parseJSON(choose7);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter6op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter6op1" || mydata[0].arrayName === "chapter6op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter7op1);
                    decisionJson = $.parseJSON(choose8);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter7op2);
                    decisionJson = $.parseJSON(choose8);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter7op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter7op1" || mydata[0].arrayName === "chapter7op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    mydata = $.parseJSON(chapter8op1);
                    decisionJson = $.parseJSON(choose9);
                
                counter=-1;
                hideOptions(); 
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter8op2);
                    decisionJson = $.parseJSON(choose9);
                    counter=-1;
                hideOptions();
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                mydata = $.parseJSON(chapter8op3);
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }else if (mydata[0].arrayName === "chapter8op1" || mydata[0].arrayName === "chapter8op2"){
            $( "#option1" ).on('keypress click',function(){
                allowclick = 0;
                
                    ending();
                
                counter=-1;
                hideOptions(); 
				gameover = true;
            });
            $( "#option2" ).on('keypress click',function(){
            allowclick = 0;
                ending();
                    counter=-1;
                hideOptions();
				gameover = true;
           });
//game over
            $( "#option3" ).on('keypress click',function(){
            allowclick = 0;
                ending();
                counter=-1;
                    hideOptions();
                    gameover = true;
           });
		   score();
        }
         
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
			musicSrc = $.parseJSON(localStorage.getItem('gameStoragemusicSrc'));
			musicCounter = $.parseJSON(localStorage.getItem('gameStoragemusiccounter'));
			ending1 = $.parseJSON(localStorage.getItem('ending1'));
			ending2 = $.parseJSON(localStorage.getItem('ending2'));
			ending3 = $.parseJSON(localStorage.getItem('ending3'));
            counter = mydata.length-1;
			audioplay();
        }
    }

    function speichern(){  
    allowclick = 0;     
    window.localStorage.clear();      
localStorage.setItem('gameStorage', JSON.stringify(mydata));
localStorage.setItem('gamedecisionStorage', JSON.stringify(decisionJson));
localStorage.setItem('gameStoragemusicSrc', JSON.stringify(musicSrc));
localStorage.setItem('gameStoragemusiccounter', JSON.stringify(musicCounter));
localStorage.setItem('ending1', JSON.stringify(ending1));
localStorage.setItem('ending2', JSON.stringify(ending2));
localStorage.setItem('ending3', JSON.stringify(ending3));

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
function setName() {
                //fügt namen des characters ein
                var nameAdder = setInterval(function() {
                    document.getElementById("personWhoTalk").innerHTML += mydata[counter].name.charAt(placeHolderName);
                    if (++placeHolderName == mydata[counter].name.length) {
                        clearInterval(nameAdder);
                        placeHolderName = 0;
                    } else {
                        $('body').on('keypress click', function() {
                            clearInterval(nameAdder);
                            placeHolderName = 0;
                        });
                    }
                }, 1);
            }
function setText() {
                //fügt gesprochenen Text ein
                var textAdder = setInterval(function() {
                    document.getElementById("text").innerHTML += mydata[counter].text.charAt(placeHolderText);
                    if (++placeHolderText == mydata[counter].text.length) {
                        clearInterval(textAdder);
                        placeHolderText = 0;
                    } else {
                        $('body').on('keypress click', function() {

                            clearInterval(textAdder);
                            placeHolderText = 0;
                        });
                    }
                }, 1);
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
	function ending(){	
                    var end1 = $.parseJSON(endingOne);
                    var end2 = $.parseJSON(endingTwo);
                    var end3 = $.parseJSON(endingThree);
                    if (ending1 > ending2 && ending1 > ending3) {
                        mydata = end1;
                    } else if (ending2 > ending1 && ending2 > ending3) {
                        mydata = end2;
                    } else if (ending3 > ending1 && ending3 > ending3) {
                        mydata = end3;
                    } else {
                        var endArray = [end1, end2, end3];
                        var rand = endArray[Math.floor(Math.random() * endArray.length)];
                        mydata = rand;
                    }
                
}
	function score() {
                if (mydata[0].ending1 == true) {
                    ending1++;
                } else if (mydata[0].ending2 == true) {
                    ending2++;
                } else if (mydata[0].ending3 == true) {
                    ending3++;
                }
            }
});