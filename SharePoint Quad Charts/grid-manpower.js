var grid1 = ""; var grid2 = ""; var grid3 = ""; var grid4 = "";

$(document).ready(function() {

    grid1 = $('#grid1').DataTable( {
        scrollY:        false,
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        searching: false,
        bInfo : false,

        columnDefs: [
            {
                "targets": [ 0 ],
                "visible": false
            }
        ]
        
    });
	
	grid2 = $('#grid2').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        searching: false,

        columnDefs: [
            {
                "targets": [ 0 ],
                "visible": false
            }
        ]
        
    });
	
	grid3 = $('#grid3').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        searching: false,

        columnDefs: [
            {
                "targets": [ 0 ],
                "visible": false
            }
        ]
        
    });
	
	grid4 = $('#grid4').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        searching: false,

        columnDefs: [
            {
                "targets": [ 0 ],
                "visible": false
            }
        ]
        
    });
	
	

} );