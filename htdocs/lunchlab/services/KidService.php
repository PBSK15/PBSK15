<?php

class KidService {
    
    public function isLoggedIn() : ?array {
		
		if (!isset($_COOKIE["pbskids.username"])) {
			return null;
		}
        // find person in database, for now return dummy data:
		return [
		"id" => "",
		"name" => "",
		"points" => 0,
		"lastLogin" => 1699120143,
		"created" => 1,
		"isNameApproved" => true
		];
    }
}
    
?>