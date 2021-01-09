<?php
if(isset($_COOKIE['login'])){
    include('../db.php');
    $data = $_POST;
    $category = $data['option'];
    $title = $data['title'];
    $text = $data['text'];
    $userId = $_COOKIE['id'];
    $userName = $_COOKIE['login'];

    $sql_get_id = 'SELECT id FROM categories WHERE title = :title';
    $params_get_id = [':title' => $category];
    $stmt_get_id = $pdo->prepare($sql_get_id);
    $stmt_get_id->execute($params_get_id);
    $categoriesId = $stmt_get_id->fetchColumn();

    $sql = 'INSERT INTO ideas(title, text, categories, userId, userName, category)
    VALUES(:title, :text, :categories, :userId, :userName, :category)';

    $params = [
        ':title' => $title,
        ':text' => $text,
        ':categories' => $categoriesId,
        ':userId' => $userId,
        ':userName' => $userName,
        ':category' => $category
    ];
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo '<div style="color: green;">
        Запись опубликована
    </div>';

    // Успешно вошли
    // $_SESSION['username'] = $nickname;
}