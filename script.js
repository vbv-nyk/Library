'use strict';
const authorName = document.querySelector("#author-name");
const titleName = document.querySelector("#book-title");
const pageNumber = document.querySelector("#pages-no");
const bookList = document.querySelector(".book-list")
const newBookContainer = document.querySelector(".new-book-container");
const newBookButton = document.querySelector(".new-book");

let myLibrary = [];
let cur = 0;

function newBook(){
    newBookContainer.style.display = "flex";
}

function Book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;   
}

function clearForm(){
    authorName.value = "";
    titleName.value = "";
    pageNumber.value = "";
}

function closeButtonAdder(clicked_button){
    const dataKey = clicked_button.dataset["key"];
    const closeBookCard = document.querySelector(`.book-item[data-key = "${dataKey}"]`);
    console.log(closeBookCard);
    bookList.removeChild(closeBookCard);
}

function displayBook(b){
    const bookCard = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookPages = document.createElement("div");
    const labelRead = document.createElement("label");
    const readBook = document.createElement(`input`);
    const closeButton = document.createElement('input');
    bookCard.setAttribute("data-key",`${cur}`);
    closeButton.setAttribute("data-key",`${cur}`);
    closeButton.type = "button";
    closeButton.value = "X";
    closeButton.classList.add("close-button");
    closeButton.setAttribute("onclick","closeButtonAdder(this)");
    labelRead.textContent = "Read?";
    readBook.type = "checkbox";
    labelRead.appendChild(readBook);
    bookAuthor.insertAdjacentText("afterbegin",`Author: ${b.author}`);
    bookTitle.insertAdjacentText("afterbegin",`Title: ${b.title}`);
    bookPages.insertAdjacentText("afterbegin",`Pages: ${b.pages}`);
    bookCard.appendChild(closeButton);  
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(labelRead);
    bookCard.classList.add("book-item");
    bookList.appendChild(bookCard);
}

function addBookToLibrary(){
    const b = new Book(authorName.value,titleName.value,pageNumber.value);
    clearForm();
    displayBook(b);
    newBookContainer.style.display = "none";
    cur++;
}

