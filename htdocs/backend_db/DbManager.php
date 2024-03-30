<?php

abstract class DbManager {

    protected object $sql;

    public function __construct(object $db) {
        $this->sql = $db;
    }


    protected final function sendQuery(mysqli_stmt $stmt) : mixed {
        $stmt->execute();
        return $stmt->get_result();
    }

    protected final function sendQueryRaw(string $query) : mixed {
        return $this->sql->query($query);
    }


    protected final function buildQuery(string $db, string $query, mixed ...$params) : mysqli_stmt {
        $this->sql->query("USE $db");
        $stmt = $this->sql->prepare($query);

        $paramTypes = "";
        foreach ($params as $param) {
            $paramTypes .= gettype($param)[0];
        }

        $stmt->bind_param($paramTypes, ...$params);
        return $stmt;
    }


    protected function getTable(string $table) {
        return $this->sendQueryDbRaw("DESCRIBE $table")->fetch_all();
    }


    protected function processTable(mysqli_result $sqlResult) : ?array {
        if ($sqlResult->num_rows <= 0) {
            return null;
        }
        return $sqlResult->fetch_assoc();
    }


    protected function updateTable(string $table, string $primary_key, mixed $id, array $updates) : void {
        foreach($updates as $column => $row) {
            $this->sendQueryDb("UPDATE $table SET $column = ? WHERE $primary_key = ?", $row, $id);
        }
    }



    protected final function randomStr(string $charset, int $len) : string {
        $characterSetLength = strlen($charset);
        $randomString = '';

        for ($i = 0; $i < $len; $i++) {
            $randomIndex = random_int(0, $characterSetLength - 1);
            $randomString .= $charset[$randomIndex];
        }

        return $randomString;
    }



    abstract protected function sendQueryDb(string $query, mixed ...$params) : mixed;
    abstract protected function sendQueryDbRaw(string $query) : mixed;
    
}