try{

    jQuery(document).ready(function () {


        var path = location.pathname;
        var locsearch1 = path.search('/PROGRAMCAPABILITYIMAGES1/Forms/EditForm.aspx');
        var locsearch2 = path.search('/PROGRAMBATTLESPACEIMAGES1/Forms/EditForm.aspx');
        var locsearch3 = path.search('/PORTFOLIOCONTEXTIMAGES1/Forms/EditForm.aspx');


        //console.log('editform.js')

    
        if(locsearch1 !== -1 || locsearch2 !== -1 || locsearch3 !== -1){

            var title = jQuery("input[title='Title Required Field']");
            var programLookup = jQuery("select[title='Program']");
            title.parent().parent().parent().hide()


    
            programLookup.change(function (e) {


                try{

                    var optionSelected = $("option:selected", this);
                    var valueSelected = optionSelected[0].innerText;
                    title.val(valueSelected);

                }
                catch(e){
                    console.log(e);
                }

            });
    
    
        }
    


    });



}
catch(e){
    console.log(e);
}