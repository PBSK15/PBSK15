<?php

require_once __DIR__ . '/../DbManager.php';

abstract class MicrositeDbManager extends DbManager {

    protected string $tableName = "";

    public function sendQueryDb(string $query, mixed ...$params) : mixed {
        return $this->sendQuery($this->buildQuery("MicrositeDb", $query, ...$params));
    }

    public function sendQueryDbRaw(string $query) : mixed {
        $this->sendQueryRaw("USE MicrositeDb");
        return $this->sendQueryRaw($query);
    }

    public function getAccByPBSId(int $kid_id) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM $this->tableName WHERE kid_id = ?", $kid_id));
    }

    public function deleteAccByPBSId(int $kid_id) {
        return $this->sendQueryDb("DELETE FROM $this->tableName WHERE kid_id = ?", $kid_id);
    }

    public function updateAccByPBSId(int $id, array $updates) : void {
        $this->updateTable("$this->tableName", "kid_id", $id, $updates);
    }


    public final function getOwnTable() : ?array {
        return $this->getTable($this->tableName);
    }

    public final function setTableName(string $tableName) : void {
        $this->tableName = $tableName;
    }

    public final function getTableName() : string {
        return $this->tableName;
    }

    // abstract public function createAcc(mixed ...$params);

    
}