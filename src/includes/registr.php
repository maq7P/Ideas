<?php
include('../db.php');
session_start();
$data = $_POST;
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$_SESSION['email'] = $data['email'];

if (isset($data['do_singup']) && isset($_SESSION)) {
    $nickname = $data['nickname'];
    $_SESSION['nickname'] = $data['nickname'];

    $sql_check_email = 'SELECT EXISTS(SELECT email FROM users WHERE email = :email)';
    $params_check_email = [':email' => $email];
    $stmt_check_email = $pdo->prepare($sql_check_email);
    $stmt_check_email->execute($params_check_email);
    if($stmt_check_email->fetchColumn()){
        $_SESSION['exist_email'] = 'Пользователь с таким email уже существует';
        header('Location: ../singup.php');
    }

    $sql_check_nickname = 'SELECT EXISTS(SELECT login FROM users WHERE login = :login)';
    $params_check_nickname = [':login' => $nickname];
    $stmt_check_nickname = $pdo->prepare($sql_check_nickname);
    $stmt_check_nickname->execute($params_check_nickname);

    if ($stmt_check_nickname->fetchColumn()) {
        $_SESSION['exist_nickname'] = 'Пользователь с таким nickname уже существует';
        header('Location: ../singup.php');
    }



    if (($data['password'] != $data['password_confirm']) 
        && (empty($_SESSION['exist_nickname']) || empty($_SESSION['exist_email']))) {
        $_SESSION['fail_password'] = 'Пароли не совпадают';
    }

    if (empty($_SESSION['fail_password'])
        && (empty($_SESSION['exist_nickname']) && empty($_SESSION['exist_email']))) {

        $sql = 'INSERT INTO users(email, login, password)
        VALUES(:email, :nickname, :password)';

        $params = ['email' => $email, 'nickname' => $nickname, 'password' => $password];
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);

        // Успешно вошли
        $_SESSION['username'] = $nickname;
        setcookie("login", $nickname, time() + 3600, "/");
        header('Location: ../home.php');
    } else {
        header('Location: ../singup.php');
    }
} else {
    $password = $data['password'];
    $login = $data['email'];

    $sql = 'SELECT login, password, email, id FROM users WHERE login = :login OR email = :email';
    $params = [':login' => $login, ':email' =>  $login];

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    $user = $stmt->fetch(PDO::FETCH_OBJ);

    if($user){
        if( password_verify($password, $user->password) ){
            $_SESSION['username'] = $user->login;
            // Успешно вошли
            //$_SESSION['userId'] = $user->id;
            setcookie("login", $user->login, time() + 3600, "/");
            setcookie("id", $user->id, time() + 3600, "/");
            header('Location: ../home.php');
        } else {
            $_SESSION['fail_auth'] = 'Неверный логин или пароль';
            header('Location: ../login.php');
        }
    } else {
        $_SESSION['fail_auth'] = 'Неверный логин или пароль';
        header('Location: ../login.php');
    }
}
