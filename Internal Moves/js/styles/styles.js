$( function() {
	$( document ).ready(function() {
        //console.log( $("select[title='Type of Internal Change']") )

        $("select[title='Type of Internal Change']").change(function (e) {

            try {

                var value = $(this).val();
                if(value === 'Seat Change'){
                    $('.actualMoveDateTag').hide();
                    $('.projectedReturnTag').attr('width','50');
                }else{
                    $('.actualMoveDateTag').show();
                    $('.projectedReturnTag').attr('width','0');
                }



            }
            catch(e){
                console.log('type of internal change ',e)
            }

        });


        //set tabs
    	$( "#tabs" ).tabs();


	});
  } );
