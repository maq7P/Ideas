<?php
    //session_start();
    // $connecion = new mysqli('localhost', 'root', 'root', 'test_db');
    // if(!isset($connecion)){
    //     echo 'Ошибка подключения к бд';
    //     exit();
    // }

    session_start();
    $host = '127.0.0.1';
    $db   = 'test_db';
    $user = 'root';
    $pass = 'root';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    try {
        $pdo = new PDO($dsn, $user, $pass, $opt);
        if(isset($_COOKIE['page_visit'])){
            setcookie('page_visit', ++$_COOKIE['page_visit'] , time() + 5);
            
        } else {
            setcookie('page_visit', 1, time() + 5);
            $_COOKIE['page_visit'] = 1;
        }
    } catch (PDOException $e) {
       die('Нет подключения к бд');
    }
