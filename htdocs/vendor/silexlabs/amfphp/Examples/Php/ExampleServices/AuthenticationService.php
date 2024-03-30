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
class AuthenticationService {

    /**
     * protected methods
     * @var array 
     */
    public static $protectedMethods = array();
    
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
     * sign in
     * @param string $username
     * @param string $password
     * @return boolean
     */
    public function signIn($username, $password) {
            $pdo = MySQLUtil::getConnection();

            // hash the password
            $password = DBUtils::hashPassword($password);

            $tsql = "SELECT ur.name AS user_role, u.* FROM users AS u";
            $tsql .= " INNER JOIN user_roles AS ur ON (ur.id = u.user_role_id)";
            $tsql .= " WHERE u.username = :username AND u.password = :pass";

            $stmt = $pdo->prepare($tsql);
            $stmt->bindParam(':username', $username, PDO::PARAM_STR);
            $stmt->bindParam(':pass', $password, PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_OBJ);
            if ($result) {
                AmfphpAuthentication::addRole($result->user_role);
                unset($result->password);

                return $result;
            } else {
                return false;
            }

    }

    /**
     * sign out function
     */
    public function signOut() {
        AmfphpAuthentication::clearSessionInfo();
    }

    /**
     * function the authentication plugin uses to get accepted roles for each function
     * Here login and logout are not protected, however
     * @param String $methodName
     * @return array
     */
    public function _getMethodRoles($methodName) {
        if (in_array($methodName, self::$protectedMethods)) {
            return array('admin');
        } else {
            return null;
        }
    }

}

?>