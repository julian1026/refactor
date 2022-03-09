/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");

const baseUrl = "https://platzi-avo.vercel.app";
const $container = document.querySelector("#container");

/*
import { Items } from "./modules/items.js";
const items = new Items(baseUrl, $container);
items.consumirApi();
*/

const allItems = [];

function formatPrice(price) {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
}

function createItems(item, index) {
  //   console.log(item);
  const image = document.createElement("img");
  image.src = `${baseUrl}${item.image}`;
  const title = document.createElement("h2");
  title.style.color = "green";
  title.textContent = item.name;
  const price = document.createElement("div");
  price.textContent = formatPrice(item.price);
  const container = document.createElement("div");
  container.append(image, title, price);
  allItems[index] = container;
}

function iterarResApi(data) {
  data.forEach((item, index) => {
    createItems(item, index);
  });

  $container.className = "container";
  $container.append(...allItems);
}

async function api() {
  const avo = await fetch(`${baseUrl}/api/avo`);
  const res = await avo.json();
  if (avo.ok) {
    iterarResApi(res.data);
  }
}

api();

// #16 enpezar
