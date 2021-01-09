<?php
include('../db.php');

//Указываем в заголовках, что страница возвращает данные в формате JSON
header("Content-type: application/json; charset=utf-8");

//Создаём класс, который будем возвращать. В нём всего два свойства - заголовок и тело страницы
class Page
{
    public $title;
    public $body;

    public function __construct($title, $body)
    {
   	    $this->title = $title;
        $this->body = $body;
    }
}
//Получаем запрос от клиента
if(isset($_GET["page"]) && $_COOKIE['login'] != ''){
    $page = $_GET["page"];
}
else {
    $page = "404";
}

if (isset($_GET["id"])) {
    $id = $_GET["id"];
}
if(isset($_GET['userName'])) {
    $userName = $_GET['userName'];
}

switch($page) //Выбираем страницы
{
    case "me":
        // Нужен будет для смены логина и пароля
    case "categories": //Категроии
        $query = $pdo->query('SELECT * FROM `categories`');
        $cat = array();
        while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            $cat[] = $row;
        }
   	    $response = new Page("categories", $cat);
   	    break;
    case "ideas": //Карточки
        if ($id > 0) {
            $query = $pdo->query("SELECT * FROM `ideas` WHERE categories='$id'");
            $cat = array();
            while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                $cat[] = $row;
            }
            $response = new Page("categories", $cat);
            break;
        }
        if(isset($userName)) {
            $query = $pdo->query("SELECT * FROM `ideas` WHERE userName='$userName'");
            $posts = array();
            while ($row = $query->fetch(PDO::FETCH_OBJ)) {
                $posts[] = $row;
            }
            $response = new Page("categories", $posts);
            break;
        }
        $query = $pdo->query('SELECT * FROM `ideas`');
        $cat = array();
        while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            $cat[] = $row;
        }
   	    $response = new Page("ideas", $cat);
           break;
    case "idea": //Карточки
        $query = $pdo->query("SELECT * FROM `ideas` WHERE id='$id'");
        $response = new Page("categories", $query->fetch(PDO::FETCH_OBJ));
        break;
}

die(json_encode($response)); //Возвращаем страницу
?>