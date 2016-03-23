$(document).ready(function() {

    $("#draggable_box").draggable({
            containment: '#master_container',
            scroll: false
     }).mousemove(function(){
            var coord = $(this).position();
            $("p:last").text( "left: " + coord.left + ", top: " + coord.top );
     }).mouseup(function(){
            var coords=[];
            var coord = $(this).position();
            var item={ coordTop:  coord.left, coordLeft: coord.top  };
            coords.push(item);
            var order = { coords: coords };
            $.post('php/updatecoords.php', 'data='+$.toJSON(order), function(response){
                    if(response=="success")
                        $("#response").html('<div class="success">X and Y Coordinates Saved!</div>').hide().fadeIn(500);
                        setTimeout(function(){ $('#response').fadeOut(500); }, 2000);
                    });
            });

    });