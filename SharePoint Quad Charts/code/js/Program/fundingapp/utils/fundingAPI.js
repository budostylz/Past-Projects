angular.module('app').factory('fundingAPI', function ($q) {

	
    return {

        rootUrl:function(){//root url
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('FundingProcurement')/items?&$orderby=Root asc";  
                //program = program.replace("'", "%27%27");//handle ' //ref: REST Call with values containing apostrophe - https://stackoverflow.com/questions/32213772/rest-call-with-values-containing-apostrophe

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        userSelectRootUrl:function(root){//user select root url
            try{
                root = root.replace("'", "%27%27");//handle ' //ref: REST Call with values containing apostrophe - https://stackoverflow.com/questions/32213772/rest-call-with-values-containing-apostrophe
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('FundingProcurement')/items?$filter=Root eq '"+encodeURIComponent(root)+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        fyUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('FYs')/items?$top=1000&select=Title";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        programUrl:function(programID){//program properties
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMPROPERTIES')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programDeepDiveUrl:function(programID){//program key 4
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('DEEPDIVE')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programKey5DeepDiveUrl:function(programID){//program key 5
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAM_KEY5_DEEPDIVE')/items?$filter=programID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programRDTEUrl:function(programID){//program rdte
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('RDTE')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programRDTEUFRUrl:function(programID){//program rdte ufr
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('RDTEUFR')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programPROCUrl:function(programID){//program proc
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROC')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programPROCUFRUrl:function(programID){//program proc ufr
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROCUFR')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programOTHERUrl:function(programID){//program other
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('OTHER')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programOTHERUFRUrl:function(programID){//program other ufr
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('OTHERUFR')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programTOTALUrl:function(programID){//program total
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('TOTAL')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programTOTALUFRUrl:function(programID){//program total ufr
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('TOTALUFR')/items?$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";  

                return url;

            }
            catch(e){
                console.log(e);
            }


        },



//////////////////////////////////////////////////////////








        areaUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('Area')/items?$top=1000";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        
        bosUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS')/items?select=ID,Title,BOS,PORTFOLIO&$top=5000&$orderby=Title asc";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        BOSRootUrlDownload:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"' or Assigned eq 0";//MILTECH
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        BOSRootUrl:function(bos, root, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"' and ProgramID eq '"+encodeURIComponent(programID)+"' and Assigned eq 0";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        BOSRootUrl2:function(bos, root, key4){
            try{

                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"' and OData__x006b_ey4 eq '"+encodeURIComponent(key4)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        LQARootUrl:function(bos, root, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        BOSRootUFRUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('UFRs')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.webAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS Root')/items?$select=BOS,Root,APPN&$orderby=APPN asc&$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH
                console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        
        key4Url:function(root){
            try{

                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('CSA Deep Dive')/items?$top=1000&$filter=Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('CSA Deep Dive')/items?$top=1000&$filter=Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH                
                
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        LINUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('LQA')/items?$top=1000&$orderby=LINOUT asc&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('LQA')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH
                
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        POMUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?$top=5000    ";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOUrl2:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        

        APOUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?$top=5000";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOUrl2:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        imageUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Images_"+bos+"')/items?$select=ID,ProgramID,Modified,FileRef/FileRef&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        ONHANDUrl:function(portfolio, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('AAO_APO_ONHAND')/items?$top=1000&$filter=PORTFOLIO eq '"+encodeURIComponent(''+portfolio+'')+"'and Title eq '"+LIN+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        AAOUrlSelect:function(bos, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?$top=5000&$filter=LIN eq '"+encodeURIComponent(''+LIN+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOURLSelect:function(bos, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?$top=5000&$filter=LIN eq '"+encodeURIComponent(''+LIN+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        BOSROOTKey4Url:function(bos, programID, sourceData){
            try{

                var key4s = sourceData.BOS['Key4s'];
                    
                for(var i = 0; i < key4s.length; i++){

                    var key4 = key4s[i];
                    console.log(key4)

                }



                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

		programIDUrl:function(bos, id){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?$filter=ProgramID eq '"+encodeURIComponent(''+id+'')+"'";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programBOSUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?&$top=5000&$orderby=ProgramID desc";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
		
		programBOSUrl2:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?&$orderby=Title asc";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        commandUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/manpower/_api/web/lists/getbytitle('Commands1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        STProgramUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/st/_api/web/lists/getbytitle('Projects1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
               //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        AMMOProgramUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/ammo/_api/web/lists/getbytitle('Programs1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        /* Area Data Sources*/        

        programListsUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        commandListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/manpower/_api/web/lists/getbytitle('MANPOWERLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ammoListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/ammo/_api/web/lists/getbytitle('AMMOLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        stListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/st/_api/web/lists/getbytitle('STLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        /* Program Endpoints */
        
          imageListsUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ImageLists')/items?$select=GUID0,Title&$filter=Title eq '"+encodeURIComponent(''+bos+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        WhyWeNeedThisUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('WHYWENEEDTHIS_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        ProgramOverviewUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMMATICOVERVIEW_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        ProgramCapabilityImagesUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('CAPABILITIES_"+bos+"')/items?$select=ID,Title&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramCapabilityUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('CAPABILITIES_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ProgramBattleSpaceUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMBATTLESPACEIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMBATTLESPACEIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioContextImagesUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOCONTEXTIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOCONTEXTIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioOverviewUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOOVERVIEW1')/items?$select=ID,Title,BOS,OVERVIEW,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOOVERVIEW1')/items?$select=ID,Title,BOS,OVERVIEW,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioKeyCapabilitiesUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOKEYCAPABILITIES1')/items?$select=ID,Title,BOS,CAPABILITY,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOKEYCAPABILITIES1')/items?$select=ID,Title,BOS,CAPABILITY,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioPlanUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOPLAN1')/items?$select=ID,Title,BOS,FARTERM,MIDTERM,NEARTERM,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOPLAN1')/items?$select=ID,Title,BOS,FARTERM,MIDTERM,NEARTERM,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        WhereItFitsUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('WHEREITFITS_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },
		
		BLUFUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BLUF_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },



        ProgramAssessmentUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMASSESSMENT_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },



        POMAllocationUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('POMALLOCATION1')/items?$select=ID,Title,BOS,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('POMALLOCATION1')/items?$select=ID,Title,BOS,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        RDTEUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE_"+bos+"')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";

                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        PROCUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROC_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROC1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        OtherUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        TotalUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ProgramLQAUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        QuantityUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"' or Assigned eq 0";//MILTECH
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('QUANTITY1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        MYCFloorUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('MYCFLOOR1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('MYCFLOOR1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        DeepDiveUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('DEEP_DIVE_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";

                //var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('DEEPDIVE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMAAO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMAAO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMAPO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMAPO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ROProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMRO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMRO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        
        getItems:function(url){
            try{
               //console.log(url);


                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItems();

   
                function GetItems(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d.results);
                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItems();
                           }else{
                               
                               //console.log('stop')
                               defer.resolve(response);
                           }
  
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }//GetItems()


            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        },
        getItem:function(url){/* Recursive Design Pattern for SharePoint Restful Services: https://codewithrohit.wordpress.com/2017/06/01/sharepoint-rest-api/ */

            try{
               // console.log(url);


                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItem();

   
                function GetItem(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d);
                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItem();
                           }else{
                               
                               //console.log('stop')
                               defer.resolve(response);
                           }
  
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }//GetItem()


            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        }

  }//return
});//GetItemsService



