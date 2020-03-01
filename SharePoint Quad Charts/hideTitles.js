try{

    jQuery(document).ready(function () {


        var path = location.pathname;

        //console.log('hideTitles.js')
        //console.log(path)
        var locsearch1 = path.search('/Pages/collab1.aspx');
        var locsearch2 = path.search('/Pages/collab2.aspx');
        var locsearch3 = path.search('/Pages/collab3.aspx');
        var locsearch4 = path.search('/Pages/collab4.aspx');
        var locsearch4 = path.search('/Pages/collab4.aspx');
        var locsearch5 = path.search('/Pages/ProgramFunding.aspx');
        var locsearch6 = path.search('/Pages/ProgramLINAllocation.aspx');
        var locsearch7 = path.search('/Pages/AAO_APO_OnHand.aspx');
        var locsearch8 = path.search('/Pages/NewQuad.aspx');
        var locsearch9 = path.search('/Pages/collab3.aspx');
        var locsearch10 = path.search('/Pages/collab4.aspx');
        var locsearch11 = path.search('/Pages/quadGroups.aspx');







        if( locsearch7 !== -1){//AAO-APO-ONHAND
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('UPDATE LINS FOR AAO, APO & ON HAND')

        }else if(locsearch5 !== -1){//PROGRAM FUNDING
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('PROGRAM FUNDING');


        }else if(locsearch8 !== -1){//New Quad
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('NEW QUAD');


        }else if(locsearch9 !== -1){//PROGRAM OVERVIEW
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('PROGRAM OVERVIEW');


        }else if(locsearch10 !== -1){//PROGRAM ASSESSMENT & RECOMMENDATION
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('PROGRAM ASSESSMENT & RECOMMENDATION');

        }else if(locsearch11 !== -1){//QUAD GROUPS
            jQuery('#DeltaPlaceHolderPageTitleInTitleArea').text('');

        }

    
        if(locsearch1 !== -1 || locsearch2 !== -1 || locsearch3 !== -1 || locsearch4 !== -1 || locsearch5 !== -1){

            var ctx = _spPageContextInfo; 
            console.log('HIDE')
            console.log(jQuery('#DeltaPlaceHolderPageTitleInTitleArea'))

            //console.log(ctx)
            //console.log(jQuery( '#ctl00_PlaceHolderPageTitleInTitleArea_ctl00_SkipLink' ).parent() )

            //jQuery( '#ctl00_PlaceHolderPageTitleInTitleArea_ctl00_SkipLink' ).parent().hide()

            


    
    
        }
    


    });



}
catch(e){
    console.log(e);
}