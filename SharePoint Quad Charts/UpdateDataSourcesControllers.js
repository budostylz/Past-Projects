
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    

    try{

            console.log('page load')
            console.log(XLSX);
            const rows = new Array(10).fill();
            const MySheet = rows.reduce((acc, item, index) => {
            const idx = index + 2;
            acc['A' + idx] = {
                t: 'n',
                v: index + 1
            };
            acc['B' + idx] = {
                t: 'n',
                v: index + 2
            };
            acc['C' + idx] = {
                t: 'n',
                v: index + 3
            };
            return acc;
            }, {
            '!ref': 'A1:C' + (rows.length + 1),
            A1: {
                t: 's',
                v: 'A-Heading'
            },
            B1: {
                t: 's',
                v: 'B-Heading'
            },
            C1: {
                t: 's',
                v: 'C-Heading'
            }
            });

            const workbook = {
            SheetNames: ['MySheet'],
            Sheets: {
                MySheet: MySheet
            },
            Props: {},
            Custprops: {},
            WBProps: {}
            };

            const opts = {
            type: 'binary',
            bookType: 'csv',
            sheet: 'MySheet'
            };
            const csv = XLSX.write(workbook, opts);

            console.log(csv);

    }
    catch(e){
        console.log(e);
    }
    



}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService) {

    try{

    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
