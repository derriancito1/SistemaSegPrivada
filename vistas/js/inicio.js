// var pieData = [
// 		{
// 			value: 300,
// 			color:"#F7464A",
// 			highlight: "#FF5A5E",
// 			label: "Red"
// 		},
// 		{
// 			value: 50,
// 			color: "#46BFBD",
// 			highlight: "#5AD3D1",
// 			label: "Green"
// 		},
// 		{
// 			value: 100,
// 			color: "#FDB45C",
// 			highlight: "#FFC870",
// 			label: "Yellow"
// 		},
// 		{
// 			value: 40,
// 			color: "#949FB1",
// 			highlight: "#A8B3C5",
// 			label: "Grey"
// 		},
// 		{
// 			value: 120,
// 			color: "#4D5360",
// 			highlight: "#616774",
// 			label: "Dark Grey"
// 		}
//
// 	];
//
// 	window.onload = function(){
// 		var ctx = document.getElementById("chart-area").getContext("2d");
// 		window.myPie = new Chart(ctx).Pie(pieData);
// 	};



	var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
	  var pieChart       = new Chart(pieChartCanvas);
	  var PieData        = [

	  	{
	      value    : 50,
	      color    : '#F7464A',
	      highlight: '#FF5A5E',
	      label    : 'Altas Estatal'
	    },{
	      value    : 26,
	      color    : '#46BFBD',
	      highlight: '#5AD3D1',
	      label    : 'Bajas Estatal'
	    },{
	      value    : 13,
	      color    : '#FDB45C',
	      highlight: '#FFC870',
	      label    : 'Altas federal'
	    },{
	      value    : 9,
	      color    : '#949FB1',
	      highlight: '#A8B3C5',
	      label    : 'Bajas federal'
	    } ];
	  var pieOptions     = {
	    // Boolean - Whether we should show a stroke on each segment
			display : true,
			position : "top",
	    segmentShowStroke    : true,
	    // String - The colour of each segment stroke
	    segmentStrokeColor   : '#fff',
	    // Number - The width of each segment stroke
	    segmentStrokeWidth   : 1,
	    // Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout: 0, // This is 0 for Pie charts
	    // Number - Amount of animation steps
	    animationSteps       : 100,
	    // String - Animation easing effect
	    animationEasing      : 'easeOutBounce',
	    // Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate        : true,
	    // Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale         : false,
	    // Boolean - whether to make the chart responsive to window resizing
	    responsive           : true,
	    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	    maintainAspectRatio  : true,
	    // String - A legend template
	    legendTemplate       : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
	    // String - A tooltip template
	    tooltipTemplate      : '<%=value %> <%=label%>'
	  };
	  // Create pie or douhnut chart
	  // You can switch between pie and douhnut using the method below.
	  pieChart.Doughnut(PieData, pieOptions);
