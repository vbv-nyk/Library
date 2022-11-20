'use strict';
const authorName = document.querySelector("#author-name");
const titleName = document.querySelector("#book-title");
const pageNumber = document.querySelector("#pages-no");
const bookList = document.querySelector(".book-list")

let myLibrary = [];
let cur = 0;

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

function displayBook(b){
    const bookCard = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookPages = document.createElement("div");
    bookAuthor.insertAdjacentText("afterbegin",`Author: ${b.author}`);
    bookTitle.insertAdjacentText("afterbegin",`Title: ${b.title}`);
    bookPages.insertAdjacentText("afterbegin",`Pages: ${b.pages}`);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);
    bookCard.classList.add("book-item");
    bookList.appendChild(bookCard);
}

function addBookToLibrary(){
    const b = new Book(authorName.value,titleName.value,pageNumber.value);
    myLibrary.push(b);
    clearForm();
    displayBook(b);
    cur++;
}

