<?php
	$conn = mysqli_connect('localhost', 'root', '', 'shop');
	if (! $conn){
		die ('Database connection failed: ' .mysqli_error());
	}

	$sql = "SELECT * FROM customers";
	$result = mysqli_query($conn, $sql);
	if (! $result){
		die("Error: Data not found...");
	}
	while($row = mysqli_fetch_array($result)){
		$arr[] = array (
			'first_name' => $row[4],
			'last_name' => $row[5]
			);
	}

	echo json_encode($arr);
	mysqli_close($conn);
?>