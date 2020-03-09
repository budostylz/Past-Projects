var dataSet = [
    [ "<a href='https://mcscviper.usmc.mil/sites/vt/Lists/CICOInternalMoves11222019/testdisplay.aspx' target='_blank'>View</a>",//view
      "<a href='https://mcscviper.usmc.mil/sites/vt/Lists/CICOInternalMoves11222019/testedit.aspx' target='_blank'>Edit</a>",//edit
        "Short Term Absence", //movement type
        "CTR",//source
        "Albert Quinn", //name
        "Mechanical Engineer",//position
        "01/7/2020", //effective move date
        "01/30/2020",//projected return
        "Quantico VA" //current location


    ],

    [ 
    "<a href='https://mcscviper.usmc.mil/sites/vt/Lists/CICOInternalMoves11222019/testdisplay.aspx' target='_blank'>View</a>",//view
    "<a href='https://mcscviper.usmc.mil/sites/vt/Lists/CICOInternalMoves11222019/testedit.aspx' target='_blank'>Edit</a>",//edit
      "Short Term Absence", 
      "CTR",
      "Don Quinn", 
      "Structural Engineer",
      "02/7/2020", 
      "02/30/2020",
      "Quantico VA" 


  ]

   
];

const columns = [
    { title: "View" },
    { title: "Edit" },
    { title: "Movement Type" },
    { title: "Source" },
    { title: "Name" },
    { title: "Position" },
    { title: "Effective Move Date" },
    { title: "Projected Return" },
    { title: "Current Location" }

];



const rootElement = document.getElementById('root');

class Table extends React.Component { 


    componentDidMount() {
        console.log('componentMount', this)
        $(this.refs.mainView).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: dataSet,
            columns,
            ordering: false
         });
    }

    componentWillUnmount(){
        $('.data-table-wrapper')
        .find('table')
        .DataTable()
        .destroy(true);
     }

     shouldComponentUpdate() {
        return false;
     }


    render() { 
        return (
            
            
            <div>
                <div id="wrapper">

                    <LeftNavigation />
                    <div id="right-wrap">
                        <table ref="mainView" width="100%"></table>                      
                    </div>

                </div>

                    
                
            </div>
        );
      } 
    }

function App(){
  return(
  <div>
    <Table name="React"/>
  </div>
  )
}


ReactDOM.render(
    <App />,
    rootElement
)



