class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list =  document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000);
    }

    deleteBook(target){
        if(target.className=='delete'){
            target.parentElement.parentElement.remove();    
        }
    }

    clearFields(){
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    }
}

class Store {
    //1
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static displayBooks(){

    }

    //2
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(){

    }
}

document.getElementById("book-form").addEventListener("submit", 
function(e){
    const title = document.getElementById("title").value,
            author = document.getElementById("author").value,
            isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);
    // console.log(book);
    const ui = new UI();
    // console.log(ui);
    if(title==='' || author==='' || isbn===''){
        ui.showAlert('Isian tidak boleh kosong!', 'error');
    }else{
        // Add to UI
        ui.addBookToList(book);
        //Add to Local Storage
        console.log(Store.addBook(book));
        //Clear Fields
        ui.clearFields();
        ui.showAlert('Isian sudah ditambahkan!', 'success');
    }
    e.preventDefault();
})

document.getElementById("book-list").addEventListener("click", function(e){
    // console.log(e.target);
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Berhasil hapus', 'success');
})