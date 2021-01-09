<!DOCTYPE html>
<?php include('./includes/isAuth.php'); ?>
<?php session_start(); ?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>
    <form action="./includes/registr.php" id="form" class="form-signin mt-5 fw-normal text-center" method="POST" style="max-width: 400px; margin: auto" ;>
        <img class="mb-4" src="https://svgsilh.com/svg_v2/1801287.svg" alt="cat" width="72" height="57">
        <h1 class="h3 fw-normal mb-3">Авторизация</h1>
        <div class="mb-3">
            <label for="email" class="visually-hidden">email</label>
            <input value="<?php
                            if ($_SESSION['fail_password'] || $_SESSION['exist_email'] || $_SESSION['exist_nickname']) {
                                echo $_SESSION['email'];
                            }
                            ?>" name="email" type="text" id="email" class="form-control" placeholder="Введите email" required autofocus>
            <?php
            if (isset($_SESSION['exist_email'])) {
                echo '<div>' . $_SESSION['exist_email'] . '</div>';
                unset($_SESSION['exist_email']);
            }
            ?>
        </div>
        <div class="mb-3">
            <label for="nickname" class="visually-hidden">никнейм</label>
            <input value="<?php
                            if ($_SESSION['fail_password'] || $_SESSION['exist_nickname'] || $_SESSION['exist_email']) {
                                echo $_SESSION['nickname'];
                            }
                            ?>" name="nickname" type="text" id="password" class="form-control" placeholder="Введите никнейм" required autofocus>
            <?php
            if (isset($_SESSION['exist_nickname'])) {
                echo '<div>' . $_SESSION['exist_nickname'] . '</div>';
                unset($_SESSION['exist_nickname']);
            }
            ?>
        </div>
        <div class="mb-3">
            <label for="password" class="visually-hidden">пароль</label>
            <input name="password" type="password" id="password" class="form-control" placeholder="Введите пароль" required autofocus>
        </div>
        <div class="mb-3">
            <label for="password_confirm" class="visually-hidden">пароль</label>
            <input name="password_confirm" type="password" id="password_confirm" class="form-control" placeholder="Введите ваш пароль еще раз" required autofocus>
            <?php
                if (isset($_SESSION['fail_password'])) {
                    echo '<div>' . $_SESSION['fail_password'] . '</div>';
                    unset($_SESSION['fail_password']);
                }
            ?>
        </div>
        <button class="w-100 btn btn-lg btn-dark" type="submit" name="do_singup">Зарегистрироваться
        </button>
    </form>
    <a href="http://localhost/project/" style="display: block;text-align: center;margin-top: 25px;color:black;">Назад
    </a>
</body>

</html>