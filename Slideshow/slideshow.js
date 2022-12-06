"use strict";

const images = [
    { id: "1", url: "./img/cat1.jpg" },
    { id: "2", url: "./img/cat2.jpg" },
    { id: "3", url: "./img/cat3.jpg" },
    { id: "4", url: "./img/cat4.jpg" },
    { id: "5", url: "./img/cat5.jpg" },
    { id: "6", url: "./img/cat6.jpg" },
    { id: "7", url: "./img/cat7.jpg" },
    { id: "8", url: "./img/cat8.jpg" },
];

const containerItems = document.querySelector(".containerItems");

const loadImages = (images, containerItems) => {
    images.forEach((image) => {
        containerItems.innerHTML += `
    <div class='item'>
      <img src="${image.url}"
    </div>
    `;
    });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#next").addEventListener("click", next);

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
