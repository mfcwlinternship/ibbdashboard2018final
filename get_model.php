<?php
//indexes models of a certain make from the database and populates the model dropdown
require_once("DBController.php");
$db_handle = new DBController();
if(!empty($_GET['make_id'])) {
	$maker_id = $_GET["make_id"];    
	     
	$query ="SELECT DISTINCT model FROM ibb_cardetails_tracker WHERE make = '$maker_id'" ;
	$results = $db_handle->runQuery($query);
?>
	<option value="">Select Model</option>
<?php
	foreach($results as $model) {
?>
	<option value="<?php echo $model["model"]; ?>"><?php echo $model["model"]; ?></option>
<?php
	}
}
?>