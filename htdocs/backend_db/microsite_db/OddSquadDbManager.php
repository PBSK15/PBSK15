<?php

require_once __DIR__ . '/MicrositeDbManager.php';


class OddSquadDbManager extends MicrositeDbManager {


    protected string $tableName = "OddSquad";


    public function getAccByPBSUsername(string $kid_username) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM $this->tableName WHERE kid_username = ?", $kid_username));
    }

    public function getAccById(int $id) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM $this->tableName WHERE userid = ?", $id));
    }

    public function getAccByUsername(string $username) : ?array {
        return $this->processTable($this->sendQueryDb("SELECT * FROM $this->tableName WHERE username = ?", $username));
    }

    public function createAcc(int $kid_id, string $kid_username, string $username, string $avatar) {
        $this->deleteAccByPBSId($kid_id);
        return $this->sendQueryDb("INSERT INTO $this->tableName (kid_id, kid_username, username, avatar, achievements, locker_items, background, game_settings) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", $kid_id, $kid_username, $username, $avatar, "|", "|", 1, "{}");
    }


    
}