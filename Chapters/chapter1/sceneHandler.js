counter = -1;

		
		var mydata = $.parseJSON(sprecherText);
		var decisionJson = $.parseJSON(choose1);
		var sceneBackground = $.parseJSON(backgrounds);
        console.log(sceneBackground);

		var placeHolderText = 0;
		var placeHolderName = 0;


$(document).ready(function() {
		
	var bg="url(" + sceneBackground[0].image + ")";
    $("#main-screen-chapter1").css("background-image", bg);
 
    $("body").fadeIn(2000,function(){
    	
    });

	
 $('body').click(function () {
 		jQuery('#text').html('');
 		jQuery('#personWhoTalk').html('');
 		jQuery('#character').html('');
        counter = (counter + 1) % mydata.length;
        console.log(counter);


        var imgList= setInterval(function(){
        	var charImg = ""; 
        	charImg += '<li><img src= "' + mydata[counter].image + '"></li>';
        	$('#character').append(charImg);
        	clearInterval(imgList);
        	console.log(mydata[counter].image);
        });
        



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

    		$( "body").unbind( "click" );

    		var op1;
    		var op2;
    		var op3;

            for (var i = 0; i < decisionJson.length; i++) {
            	
                op1 = $('<tr/>');
                op2 = $('<tr/>');
                op3 = $('<tr/>');

                op1.append("<td>" + decisionJson[i].option1 + "</td>");
                op2.append("<td>" + decisionJson[i].option2 + "</td>");
                op3.append("<td>" + decisionJson[i].option3 + "</td>");

                $('#option1').append(op1);
                $('#option2').append(op2);
                $('#option3').append(op3);

                $('#option1').show();
                $('#option2').show();
                $('#option3').show();

                //$("#main-screen-chapter1").css("filter", "grayscale(100%)");

            }
    	}
    });
});