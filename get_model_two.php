<?php
//duplicate for first get_state for the second form to avoid an error 
require_once("DBController.php");
$db_handle = new DBController();
if(!empty($_GET['make_id_two'])) {
	$coun_id = $_GET["make_id_two"];    
	     
	$query ="SELECT DISTINCT model FROM ibb_cardetails_tracker WHERE make = '$coun_id'" ;
	$results = $db_handle->runQuery($query);
?>
	<option value="">Select Model</option>
<?php
	foreach($results as $make) {
?>
	<option value="<?php echo $make["model"]; ?>"><?php echo $make["model"]; ?></option>
<?php
	}
}
?>