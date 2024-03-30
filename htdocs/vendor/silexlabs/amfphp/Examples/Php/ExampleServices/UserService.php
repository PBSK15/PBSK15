<?php

/**
 *  This file is part of amfPHP
 *
 * LICENSE
 *
 * This source file is subject to the license that is bundled
 * with this package in the file license.txt.
 * @package Amfphp_Examples_Authentication
 */
/**
 * includes
 */
require_once dirname(__FILE__) . '/../Includes/constants.php';
require_once dirname(__FILE__) . '/../Includes/MySQLUtil.php';

/**
 * Authentication and user administration service
 *
 * @package Amfphp_Examples_Authentication
 * @author Sven Dens
 */
class UserService {

    /**
     * admin only methods
     * @var array 
     */
    public static $adminOnlyMethods = array("createUser", "deleteUser");

    /**
     * protected methods
     * @var array 
     */
    public static $protectedMethods = array("updateUser", "getUsers");

    /**
     * constructor
     * @throws Exception
     */
    function __construct() {
        if (!defined('PDO::ATTR_DRIVER_NAME')) {
            throw new Exception('PDO unavailable');
        }
    }

    /**
     * function the authentication plugin uses to get accepted roles for each function
     * Here login and logout are not protected, however
     * @param <String> $methodName
     * @return <array>
     */
    public function _getMethodRoles($methodName) {
        if (in_array($methodName, self::$adminOnlyMethods)) {
            return array('admin');
        } elseif (in_array($methodName, self::$protectedMethods)) {
            return array('admin', 'editor');
        } else {
            return null;
        }
    }

    /**
     * 
     * function to create a new user to authenticate with AMFPHP
     * @param string $firstName
     * @param string $lastName
     * @param string $userName
     * @param string $password
     * @param int $userRoleId
     * @return stdClass
     * @throws Exception
     */
    public function createUser($firstName, $lastName, $userName, $password, $userRoleId) {
        try {
            $pdo = MySQLUtil::getConnection();

            // hash the password
            $password = DBUtils::hashPassword($password);

            $tsql = "INSERT INTO users(first_name, last_name, username, password, user_role_id)";
            $tsql .= " VALUES(:firstName, :lastName, :username, :password, :userRoleId)";

            $stmt = $pdo->prepare($tsql);
            $stmt->bindParam(':firstName', $firstName, PDO::PARAM_STR);
            $stmt->bindParam(':lastName', $lastName, PDO::PARAM_STR);
            $stmt->bindParam(':username', $userName, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':userRoleId', $userRoleId, PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            $error = date("Y-m-d g:i:s a T") . "\tUserService::createUser\tError: (" . $e->getCode . ") " . $e->getMessage;
            throw new Exception($error);
        }
    }

    /**
     * function to update an existing AMFPHP authentication user
     * @param string $firstName
     * @param string $lastName
     * @param string $userName
     * @param string $password
     * @param int $userRoleId
     * @param int $id
     * @return type
     * @throws Exception
     */
    public function updateUser($firstName, $lastName, $userName, $password, $userRoleId, $id) {
        try {
            $pdo = MySQLUtil::getConnection();

            // hash the password
            $password = DBUtils::hashPassword($password);

            $tsql = "UPDATE users SET first_name = :firstName, last_name = :lastName, username = :username, password = :password, user_role_id = :userRoleId WHERE id = :userId";

            $stmt = $pdo->prepare($tsql);
            $stmt->bindParam(':firstName', $firstName, PDO::PARAM_STR);
            $stmt->bindParam(':lastName', $lastName, PDO::PARAM_STR);
            $stmt->bindParam(':username', $userName, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':userRoleId', $userRoleId, PDO::PARAM_INT);
            $stmt->bindParam(':userId', $id, PDO::PARAM_INT);
            return $stmt->execute();
        } catch (PDOException $e) {
            $error = date("Y-m-d g:i:s a T") . "\tUserService::updateUser\tError: (" . $e->getCode . ") " . $e->getMessage;
            throw new Exception($error);
        }
    }

    /**
     * function to delete an AMFPHP authentication user
     *
     * @param int $id
     */
    public function deleteUser($id) {
        try {
            $pdo = MySQLUtil::getConnection();

            $tsql = "DELETE FROM users WHERE id = :userId";

            $stmt = $pdo->prepare($tsql);
            $stmt->bindParam(':userId', $id, PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            $error = date("Y-m-d g:i:s a T") . "\tUserService::deleteUser\tError: (" . $e->getCode . ") " . $e->getMessage;
            throw new Exception($error);
        }
    }

    /**
     * get users
     * @return array
     */
    public function getUsers() {
        $pdo = MySQLUtil::getConnection();

        $tsql = "SELECT id, user_role_id, username, first_name, last_name FROM users";

        $stmt = $pdo->prepare($tsql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }

}

?>