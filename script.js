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
    console.log("Hi");
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

function displayBook(b){
    const bookCard = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookNumber = document.createElement("div");
    bookNumber.insertAdjacentText("afterbegin",`Book ${cur + 1}`);
    bookAuthor.insertAdjacentText("afterbegin",`Author: ${b.author}`);
    bookTitle.insertAdjacentText("afterbegin",`Title: ${b.title}`);
    bookPages.insertAdjacentText("afterbegin",`Pages: ${b.pages}`);
    bookCard.appendChild(bookNumber);
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
    newBookContainer.style.display = "none";
    cur++;
}

