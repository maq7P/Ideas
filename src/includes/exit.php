<?php
    setcookie('login', '', time() - 3600, "/");
    header('Location: ../login.php');
    session_destroy();
    //$_SESSION = [];
    // if(isset($_COOKIE[session_name()])){
    //     setcookie(session_name(), '', time() - 3600, "/");
    // }
    // setcookie('login', '', time() - 3600, "/");
    // session_destroy();
    // header('Loacation: ../login.php');
?>