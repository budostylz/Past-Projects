try{

  jQuery( document ).ready(function() {    
 

    jQuery('#presentation').click(function(){
  
      
  
      console.log("test presentation");
  
      
  
      //Grid Properties: QUAD
      var POMAllo = [
        [
            { text:'$($000)', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
            { text:'FY19', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
            { text:'FY20', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'FY21', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'FY22', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'FY23', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'FY24', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'FY25', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'RDTE', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
    
        ],
        [
          { text:'PROC', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'Other', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'Total', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'Quantity', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'MYC Floor', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ],
        [
          { text:'Deep Dive', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
          { text:'$5000', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
          { text:'$6000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$7000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$8000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$9000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$10000', options:{ valign:'t', align:'c', fontFace:'Courier' } },
          { text:'$11000', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ]
  
  
  
  
    ];
  
      var requirementsCap = [
  
        [{ text:'Requirements/Capability to the Force:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'Approved Requirements Document:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'AROC/JROC:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'IOC/FOC:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'New, Modernization or Replacement Capability:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Army Modernization Priority:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'COE CG Assessment:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Operational Impact & Risk:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
  
  
      ]
  
      var AAO_APO = [
        [{ text:'AAO:  APO: Inventory: ', options:{ valign:'t', align:'c', fontFace:'Courier', underline:true, bold:true   } }] 
      ]
  
      var programmaticOverview = [
        [{ text:'Programmatic Overview:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'Define why is modernization required:', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true, italic:true   } }],
        [{ text:'Vendor:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Proponent:         ACAT Level:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Type of Contract:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'US States/Interest:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Current Milestone:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Cost of Alternatives:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
  
      ]
  
      var programmaticOverview2 = [
  
        [{ text:'COTS Options:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Industrial base impacts:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'APUC:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'Limitations:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
        [{ text:'MSR(yr):              MPR(yr):', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
  
  
      ]
  
      var capabilityDescription = [
  
        [{ text:'Capability Description:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'Describe the program and equipment:', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true, italic:true   } }],
        [{ text:'Program Description:', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
      ]
  
      var POMDesc = [
  
        [{ text:'Deep Dive Impacts:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'Congressional Marks:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'PDM:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true  } }],
        [{ text:'Other Funding Issues:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'Root:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
        [{ text:'MoD Level:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
  
      ]
  
      var LINs = [
        [{ text:'LINs:', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true   } }]
      ]
  
      //Grid Properties: FACER
      var facerStruct = [
        [
            { text:'LIN', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
            { text:'Nomenclature', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
            { text:'Proc', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'AAO/RO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'APO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'Inventory', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'COMPO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
            { text:'Risk Assessment', options:{ valign:'t', align:'c', fontFace:'Courier' } }
        ]
  
    ];
  
        //Grid Properties: BACKUP
        var backupStruct = [
          [
              { text:'BOS', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
              { text:'Root', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
              { text:'MDEP', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'APE', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'APO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'APPN', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'ROC', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'LINOUT', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'LININ', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY19', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY20', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY21', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY22', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY23', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY24', options:{ valign:'t', align:'c', fontFace:'Courier' } },
              { text:'FY25', options:{ valign:'t', align:'c', fontFace:'Courier' } }
          ]
    
      ];
    
  
  
  
  
  
  
  
  
  
  
      //Set Presentation and Layout Dimensions
      var pptx = new PptxGenJS();
      pptx.setLayout({ name:'Test Layout', width:16.5, height:11.7 });
  
      //Define Master Slide
      /*pptx.defineSlideMaster({
        title: 'PROGRAM_QUAD',
        bkgd:  'FFFFFF',
        objects: [
          { 'line':  { x:1.00, y:6.50, w:15, h:0, line:'000000', lineSize:4 } },
          { 'line':  { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:4, rotate:90 } },
          { 'line':  { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:4, rotate:90 } },
          { 'RECTANGLE': { x:0.50, y:0.75, w:5, h:3, fill:'FF0000' } }
        ]
      });*/
  
  
  
  
          //Build Slides
          var quad = pptx.addNewSlide();
          var facer = pptx.addNewSlide();
          var backup = pptx.addNewSlide();
  
  
         /* QUAD */
          quad.addText('PROGRAM NAME', { x:10, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
          quad.addText('POM 21-25', { x:14, y:0.25, fontSize:20, fontFace:'Arial', color:'000000' });
  
  
          // RECTANGLE
          //quad.addShape(pptx.shapes.RECTANGLE, { x:0.30, y:0.75, w:16, h:1, lineDash:'solid' });
  
  
          //Lines
          quad.addShape(pptx.shapes.LINE,      { x:1.00, y:5.50, w:15, h:0, line:'000000', lineSize:1 });
          quad.addShape(pptx.shapes.LINE,      { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:1, rotate:90 });
          quad.addShape(pptx.shapes.LINE,      { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:1, rotate:90 });
  
  
  
          //Set Grid
          var ReqGrid = { x:0.0, y:1.5, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( requirementsCap, ReqGrid );
  
          var AAO_APOGrid = { x:0.5, y:4.5, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( AAO_APO, AAO_APOGrid );
  
  
          var ProgrammaticOverviewGrid = { x:0.0, y:5.6, w:5.0, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( programmaticOverview,  ProgrammaticOverviewGrid );
  
          var ProgrammaticOverviewGrid2 = { x:0.0, y:8.0, w:5.0, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( programmaticOverview2,  ProgrammaticOverviewGrid2 );
  
          var capabilityDescriptionGrid = { x:8.2, y:1.5, w:5.5, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( capabilityDescription,  capabilityDescriptionGrid );
  
          var POMGrid = { x:8.2, y:5.6, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m'};
          quad.addTable( POMAllo, POMGrid );
  
          var POMDescGrid = { x:8.2, y:8.9, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m',border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( POMDesc, POMDescGrid );
  
          var LINGrid = { x:8.2, y:11.0, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m',border:{pt:'0', color:'FFFFFF'}};
          quad.addTable( LINs, LINGrid );
  
  
  
  
  
          //Set Image
          quad.addImage({ path:'https://spcs3qa.kc.army.mil/asaalt/hqdag8/quad/programs/PublishingImages/airdefense.jpg', x:13.0, y:2.0, w:2, h:2 })//On Prem
          //quad.addImage({ path:'https://shaunlewisdevdomaincom.sharepoint.com/quad/program/PublishingImages/latvcrop.jpg', x:12.5, y:1.5, w:3.5, h:3 })//O-365
  
  
         /* FACER */
         facer.addText('PROGRAM NAME ', { x:5, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
         facer.addText('FACER SLIDE', { x:11, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
  
         var facerGrid = { x:0.0, y:1.5, w:15.0, h:2.0, rowH:0.1, fill:'29526D', fontSize:13, color:"FFFFFF", valign:'m'};
         facer.addTable( facerStruct, facerGrid );
  
         /* BACKUP */
         backup.addText('PROGRAM NAME ', { x:5, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
         backup.addText('BACKUP SLIDE', { x:11, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
  
         var backupGrid = { x:0.0, y:1.5, w:15.0, h:2.0, rowH:0.1, fill:'29526D', fontSize:13, color:"FFFFFF", valign:'m'};
         backup.addTable( backupStruct, backupGrid );
  
  
      //Save presentation
      pptx.save();
  
  
      
      
    
    
    });
  
  
  });

}
catch(e){
  console.log(e);
}
