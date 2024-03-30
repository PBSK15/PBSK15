<?php

require_once __DIR__ . '/../DbManager.php';
/*
class AccDbManager extends DbManager {

    protected function sendQuery(string $query) : object {
        return $this->sendQueryDb("GoAccDb", $query);
    }

    public function getAccById(int $id) : ?array {
        return $this->processTable($this->sendQuery("SELECT * FROM GoAccs WHERE kid_id = " . strval($id)));
    }

    public function getAccByUsername(string $username) : ?array {
        return $this->processTable($this->sendQuery("SELECT * FROM GoAccs WHERE username = '$username'"));
    }
     
}*/


class AccDbManager extends DbManager {


    public function getAccById(int $id) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM GoAccs WHERE kid_id = ?", $id));
    }

    public function getAccByUsername(string $username) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM GoAccs WHERE username = ?", $username));
    }

    
    public function getAccByAuthToken(string $token) : ?array {
        $accAuth = $this->processTable($this->sendQueryDb("SELECT * FROM GoAuth WHERE token = ?", $token));
        if ($accAuth == null) {
            return null;
        }
        if (!isset($accAuth["kid_id"])) {
            return null;
        }
        return $this->getAccById($accAuth["kid_id"]);
    }



    public function createAcc(string $username, string $password, string $avatar, string $secret_code, string $secret_question, string $secret_answer) {
        return $this->sendQueryDb("INSERT INTO GoAccs (username, password, avatar, secret_code, secret_question, secret_answer, last_login, created_at, friends) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", $username, $password, $avatar, $secret_code, $secret_question, $secret_answer, date("Y-m-d H:i:s"), date("Y-m-d H:i:s"), "");
    }


    public function createAccSess(int $kidId) : string {
        $authToken = $this->randomStr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 32);
        $this->sendQueryDb("DELETE FROM GoAuth WHERE kid_id = ?", $kidId);
        $this->sendQueryDb("INSERT INTO GoAuth (token, kid_id, created_at) VALUES (?, ?, ?)", $authToken, $kidId, date("Y-m-d H:i:s"));
        $this->updateAccData("GoAccs", $kidId, array("last_login" => date('Y-m-d H:i:s')));
        return $authToken;
    }


    public function updateAccData(string $table, int $id, array $updates) : void {
        $this->updateTable($table, "kid_id", $id, $updates);
    }


    

    protected function sendQueryDb(string $query, mixed ...$params) : mixed {
        return $this->sendQuery($this->buildQuery("GoAccDb", $query, ...$params));
    }

    public function sendQueryDbRaw(string $query) : mixed {
        $this->sendQueryRaw("USE GoAccDb");
        return $this->sendQueryRaw($query);
    }

}

?>