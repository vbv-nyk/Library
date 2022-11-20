'use strict';
const authorName = document.querySelector("#author-name");
const titleName = document.querySelector("#book-title");
const pageNumber = document.querySelector("#pages-no");

let myLibrary = [];

function Book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;   
}

function addBookToLibrary(){
    const b = new Book(authorName.value,titleName.value,pageNumber.value);
    authorName.value = "";
    titleName.value = "";
    pageNumber.value = "";
    myLibrary.push(b);
}