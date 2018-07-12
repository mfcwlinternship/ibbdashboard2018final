
var barGraph;
$("#result_button").click(function(e) { //result_button is the first submit button's id
e.preventDefault();
$.ajax({
type: "POST",
url: "http://localhost/ibbdashboard2018final/validateInput.php", //this is the php file with the sql query to create total count of price checks
data: $('#result_form').serialize(),
success: function(data) {
console.log(data);
var jsonData = data[data.length-1].totalCount; 
jsonData = "Total Price Checks: " + jsonData;
document.getElementById("myText").innerHTML = jsonData; 

},
error: function(data) {
console.log("error");
}
});

$.ajax({
type: "POST",
url: "http://localhost/ibbdashboard2018final/locationPie.php",
data: $('#result_form').serialize(),
success: function(data) {
console.log(data);
var location = [];
var c =  [];


for(var i in data) {
  location.push(data[i].location);
 c.push(data[i].c);
  
}

var chartdata = {
  labels: location,
  datasets : [
	  {
		  label: "Location ", //make this change dynamically 
		  backgroundColor:['#fcc628','#f69020','#1f5792','#c0c0c0','#5198d5'],
		  borderColor: 'darkblue',
		  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
		  hoverBorderColor: 'rgba(200, 200, 0, 0.75)',
		  data: c
	  }
  ]
}

// 			$('#myLocationPie').remove();
// $('#chart-container').append('<canvas id="myLocationPie"></canvas>');

var ctx = $("#myLocationPie");
var pieGraph = new Chart(ctx, {
  type: 'doughnut', //change to pie if you prefer over doughnut
  data: chartdata,
  
 options:{
  scales: {
	  yAxes: [{
		  scaleLabel: {
			  display: false,
			  labelString: 'Price Check Distribution By Location',
			  fontSize: 10
		  },
		  ticks: {
			  beginAtZero : true,
			  display: false
		  },
		  gridLines: {
	  display:false,
	  drawBorder: false
		 }
	  }]
	  
  },
title: {
display: true,
text: 'Top 5 Locations',
fontSize: 25
},
legend: {
display: true, //make true if you want a legend for pie chart
position: 'bottom'
}		
} 
});

},
error: function(data) {
console.log(data);
}
});

$.ajax({
type: "POST",
url: "http://localhost/ibbdashboard2018final/clientPie.php",
data: $('#result_form').serialize(),
success: function(data) {
console.log(data);
var cpmodule = [];
var c =  [];


for(var i in data) {
  cpmodule.push(data[i].cpmodule);
 c.push(data[i].c);
  
}

var chartdata = {
  labels: cpmodule,
  datasets : [
	  {
		  label: "Location ", //make this change dynamically 
		  backgroundColor:['#fcc628','#f69020','#1f5792','#c0c0c0','#5198d5'],
		  borderColor: 'darkblue',
		  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
		  hoverBorderColor: 'rgba(200, 200, 0, 0.75)',
		  data: c
	  }
  ]
}

// 			$('#myClientPie').remove();
// $('#chart-container').append('<canvas id="myClientPie"></canvas>');

var ctx = $("#myClientPie");
var pieGraph = new Chart(ctx, {
  type: 'doughnut',
  data: chartdata,
 options:{
  scales: {
	  yAxes: [{
		  scaleLabel: {
			  display: false,
			  labelString: 'Price Check Distribution By Client',
			  fontSize: 10
		  },
		  ticks: {
			  beginAtZero : true,
			  display: false
		  },
		  gridLines: {
	  display:false,
	  drawBorder: false
  }
	  }]
	  
  }
  ,
  title: {
display: true,
text: 'Top 5 Clients',
fontSize: 25
},
legend: {
display: true,
position: 'bottom'		
}
 } 
});

},
error: function(data) {
console.log(data);
}
});

$.ajax({
type: "POST",
url: "http://localhost/ibbdashboard2018final/makePie.php",
data: $('#result_form').serialize(),
success: function(data) {
console.log(data);
var make = [];
var c =  [];


for(var i in data) {
  make.push(data[i].make);
 c.push(data[i].c);
  
}

var chartdata = {
  labels: make,
  datasets : [
	  {
		  label: "Location ", //make this change dynamically 
		  backgroundColor:  ['#fcc628','#f69020','#1f5792','#c0c0c0','#5198d5'],
		  borderColor: 'darkblue',
		  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
		  hoverBorderColor: 'rgba(200, 200, 0, 0.75)',
		  data: c
	  }
  ]
}

// 			$('#myMakePie').remove();
// $('#chart-container').append('<canvas id="myMakePie"></canvas>');

var ctx = $("#myMakePie");
var pieGraph = new Chart(ctx, {
  type: 'doughnut',
  data: chartdata,
 options:{
  scales: {
	  yAxes: [{
		  scaleLabel: {
			  display: false,
			  labelString: 'Price Check Distribution By Make',
			  fontSize: 10
		  },
		  ticks: {
			  beginAtZero : true,
			  display:false
		  },
		  gridLines: {
	  display:false,
	  drawBorder:false
  }
	  }]
	  
  },
  title: {
display: true,
text: 'Top 5 Makes',
fontSize: 25
},
legend: {
position: 'bottom',
display: true
}
 } 
});

},
error: function(data) {
console.log(data);
}
});

$.ajax({
type: "POST",
url: "http://localhost/ibbdashboard2018final/validateInput.php",
data: $('#result_form').serialize(),
success: function(data) {
console.log(data);
var date_time = [];
var c =  [];


for(var i in data) {
  date_time.push(data[i].date_time);
 c.push(data[i].c); 
}

var chartdata = {
  labels: date_time,
  datasets : [
	  {
		  label: "Filter Criteria 1 ", //make this change dynamically 
		  backgroundColor: 'rgba(255,140,0,0)',
		  borderColor: 'darkblue',
		  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
		  hoverBorderColor: 'rgba(200, 200, 0, 0.75)',
		  data: c
	  }
  ]
}

$('#mycanvas').remove(); //these two lines exist to fix the hover over problem where the graph would flicker back and forth
$('#chart-container').append('<canvas id="mycanvas"></canvas>');

var ctx = $("#mycanvas");
barGraph = new Chart(ctx, {
  type: 'line',
  data: chartdata,
 options:{
  scales: {
	  yAxes: [{
		  scaleLabel: {
			  display: true,
			  labelString: 'Number of Price Checks',
			  fontSize: 20
		  },
		  ticks: {
			  beginAtZero : true
		  }
	  }],
	  xAxes: [{
		  type: 'time',
		  time :{
			  unit: 'week' //makes the labels go by week, can be changed to any other date unit
		  }
	  }]
	  
  }
 } 
});

},
error: function(data) {
console.log(data);
}
});


});//end of click function first button


$("#result_button_two").click(function(e) { 
e.preventDefault(); //on click of second submit button
$.ajax({ //ajax call to add a comparison line to the graph
type: "POST",
url: "http://localhost/ibbdashboard2018final/validateInputTwo.php",
data: $('#result_form_two').serialize(),
success: function(data) {

console.log(data);
var date_time = [];
var c =  [];


for(var i in data) {
  date_time.push(data[i].date_time);
 c.push(data[i].c);
  
}


  barGraph.data.datasets.push( //pushes a dataset into the prexisting graph
	  {
		  label: "Filter Criteria 2 ", //make this change dynamically 
		  backgroundColor: 'rgba(0,0,139,0)',
		  borderColor: 'orange',
		  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
		  hoverBorderColor: 'rgba(200, 200, 0, 0.75)',
		  data: c
	  });
	  barGraph.update();


},
error: function(data) {
console.log(data);
}
});
});
