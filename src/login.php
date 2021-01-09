<!DOCTYPE html>
<?php include('./db.php'); ?>
<?php include('./includes/isAuth.php'); ?>
<?php session_start(); ?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>
    <form id="form" class="form-signin mt-5 fw-normal text-center" method="POST" style="max-width: 400px; margin: auto" ; action="./includes/registr.php">
        <img class="mb-4" src="https://svgsilh.com/svg_v2/1801287.svg" alt="cat" width="72" height="57">
        <h1 class="h3 fw-normal mb-3">Авторизация</h1>
        <div class="mb-3">
            <label for="email" class="visually-hidden">email</label>
            <input name="email" type="text" id="email" class="form-control" placeholder="Введите логин" required autofocus>
        </div>
        <div class="mb-3">
            <label for="password" class="visually-hidden">пароль</label>
            <input name="password" type="password" id="password" class="form-control" placeholder="Введите пароль" required autofocus>
            <?php
            if (isset($_SESSION['fail_auth'])) {
                echo '<div>' . $_SESSION['fail_auth'] . '</div>';
                unset($_SESSION['fail_auth']);
            }
            ?>
        </div>
        <button name="do_login" class="w-100 btn btn-lg btn-dark" type="submit">Войти
        </button>
    </form>
    <a href="http://localhost/project/" style="display: block;text-align: center;margin-top: 25px;color:black;">Назад
    </a>
</body>

</html>