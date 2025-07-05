<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KeyBoard</title>
</head>
<style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    .project {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
    }
    #insert {
        padding: 20px;
        border: 2px solid #574f4f;
        border-radius: 15px;
        background-color: #fff;
        font-size: 19px;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
<body>
    <h1>Welcome to the KeyBoard Page</h1>
    <p>This page is dedicated to all things keyboard-related.</p>
    <div class="project">
        <div id="insert">
            press any key and watch the magic happen!
        </div>
    </div>
</body>
<script src="script.js"></script>
</html>
