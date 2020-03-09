$( function() {

    var dataSet = [
        [ "<a href='#'>View</a>","<a href='https://mcscviper.usmc.mil/sites/vt/CICO/Lists/CICOintenalmoves/CICOEdit.aspx?ID=1' target='_blank'>Edit</a>","Albert Quinn", "CTR", "Long Term Absence", "11/7/2019", "11/30/2019", "Quantico VA", "Stafford VA"]
       
    ];
     
    $(document).ready(function() {
        $('#example').DataTable( {
            data: dataSet,
            columns: [
                { title: "View" },
                { title: "Edit" },
                { title: "Name" },
                { title: "Position" },
                { title: "Type of Internal Change" },
                { title: "Effective Move Date" },
                { title: "Actual Move Date" },
                { title: "Current Location" },
                { title: "Destination" }
                
            ]
        } );
    } );


});
