<?php

header('Access-Control-Allow-Origin:http://localhost:5173');
sleep(3);
$users=[
        ['name'=>'doe'],
        ['name'=>'john'],
        ['name'=>'gaut'],
        ['name'=>'kokokssokok']
    ];

echo json_encode($users);

?>