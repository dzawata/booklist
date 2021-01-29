<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
        <style>
            .success, .error {
                color:white;
                padding:5px;
                margin:5px 0 15px 0;
            }

            .success {
                background-color:green;
            }

            .error {
                background-color:red;
            }
        </style>
        <title>Book List</title>
    </head>
    <body>
        <div class="container">
            <form id="book-form">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" class="u-full-width">
            </div>
            <div>
                <label for="author">Author</label>
                <input type="text" id="author" class="u-full-width">
            </div>
            <div>
                <label for="isbn">ISBN#</label>
                <input type="text" id="isbn" class="u-full-width">
            </div>
            <div>
                <input type="submit" value="Submit" class="u-full-width">
            </div>
            </form>

            <table class="u-full-width">
            <thead>
                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
                </tr>
            </thead>
            <tbody id="book-list"></tbody>
            </table>
        </div>

        <script src="appes6.js"></script>
    </body>
</html>