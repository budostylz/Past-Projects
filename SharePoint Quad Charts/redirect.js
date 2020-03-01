try{

    jQuery(document).ready(function () {


        var path = location.pathname;

        console.log('redirect.js')
        console.log(path)
        var locsearch1 = path.search('/Pages/collab1.aspx');
        var locsearch2 = path.search('/Pages/collab2.aspx');
        var locsearch3 = path.search('/Pages/collab3.aspx');
        var locsearch4 = path.search('/Pages/collab4.aspx');
        var locsearch4 = path.search('/Pages/collab4.aspx');
        var locsearch5 = path.search('/Pages/ProgramFunding.aspx');
        var locsearch6 = path.search('/Pages/ProgramLINAllocation.aspx');





    
        if(locsearch1 !== -1 || locsearch2 !== -1 || locsearch3 !== -1 || locsearch4 !== -1 || locsearch5 !== -1 || locsearch6 !== -1){

            var ctx = _spPageContextInfo; 
            //console.log(ctx)
            console.log(jQuery( '#ctl00_PlaceHolderPageTitleInTitleArea_ctl00_SkipLink' ).parent() )

            jQuery( '#ctl00_PlaceHolderPageTitleInTitleArea_ctl00_SkipLink' ).parent().hide()

            


    
    
        }
    


    });



}
catch(e){
    console.log(e);
}