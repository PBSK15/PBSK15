<?php

require_once __DIR__ . '/MicrositeDbManager.php';


class WildKrattsDbManager extends MicrositeDbManager {


    protected string $tableName = "WildKratts";


    public function createAcc(int $kid_id, string $avatar, string $games, string $cps, string $vistas) {
        $this->deleteAccByPBSId($kid_id);
        return $this->sendQueryDb("INSERT INTO $this->tableName (kid_id, avatar, games, cps, vistas) VALUES (?, ?, ?, ?, ?)", $kid_id, $avatar, $games, $cps, $vistas);
    }


    
}