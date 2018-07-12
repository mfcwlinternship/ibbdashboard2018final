<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<title>Add Record Form</title>
</head>
<body>
    
      <!-- javascript-->
	  <script src="node_modules/moment/moment.js"></script>
<!-- <script type="text/javascript" src="js/jquery.min.js"></script> -->
<script type="text/javascript" src="js/Chart.min.js"></script>
<script href="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"> </script> 
<!-- labels on doughnut -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular.min.js"></script> -->
<style>
	/*this style block is to put the 3 pie charts side by side*/
.column {
    float: left;
	width: 33.33%;
	padding: 10px;
}

/* Clear floats after the columns */
.rowNew:after {
    content: "";
    display: table;
    clear: both;
}

	</style>


<div class="rowNew">
  <div class="column" >
	  <!-- renders client pie chart -->
  <canvas id="myClientPie" height="300"></canvas>
  </div>
  <div class="column">
	  <!-- renders location pie chart -->
  <canvas id="myLocationPie" height="300"></canvas>
  </div>
  <div class="column">
	  <!-- renders make pie chart -->
    <canvas id="myMakePie" height="300"></canvas>
  </div>
</div>
<div id="chart-container"> 
<!-- renders line chart -->
            <canvas id="mycanvas"></canvas>
            
</div>
	
<center> 
	<!-- renders the total price checks text from ajax call -->
			 <h2><div id="myText"></div></h2> </center>


			<script type="text/javascript" src="onClickFunctions.js"></script>



</body>
</html>