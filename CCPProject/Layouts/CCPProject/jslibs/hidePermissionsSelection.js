// JavaScript source code

$(document).ready(function () {

    var newSubSitePage = window.location.href.toString();


    if (newSubSitePage === 'http://nwkspsdev1:7455/sites/ecmcc/_layouts/15/newsbweb.aspx') {

        //template container
        var templatePicker = $('body').find('td')[55];

        //permissions td's
        var elem = $('body').find('td');
        var td1 = $('body').find('td')[71];//Permission Description
        var td2 = $('body').find('td')[72];//Permissions Label
        var td3 = $('body').find('td')[76];//Permissions Controls

       


        


        //console.log(elem);
        //console.log(templatePicker);

        $(templatePicker).click(function (e) {

            var html = ($(e.target)[0].innerHTML).toLowerCase();
            var tag = ($(e.target)[0].tagName).toLowerCase();
            var match1 = html.match(/new client/i);
            var match2 = html.match(/ccp client/i);

            if (match1 !== null || match2 !== null) {
                //console.log(html);
                //console.log(match1 + ' : ' + match2);
                  $(td1).hide();
                  $(td3).hide();

            } else {
                $(td1).show();
                $(td3).show();

            }

        
            //console.log(innerHTML);

           
          



            //var template = e.target;
            //console.log(template);
            //var result = ccpClientRegEx.test(template);


        });


        

        

    }

});



