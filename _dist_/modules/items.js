class Items {
  constructor(baseUrl, container) {
    this.api = baseUrl;
    this.allItems = [];
    this.container = container;
    this.response = null;
  }

  formatPrice(price) {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
    return newPrice;
  }

  createItems(item, index) {
    const image = document.createElement("img");
    image.src = `${this.api}${item.image}`;
    const title = document.createElement("h2");
    title.textContent = item.name;
    const price = document.createElement("div");
    price.textContent = this.formatPrice(item.price);
    const container = document.createElement("div");
    container.append(image, title, price);
    this.allItems[index] = container;
  }

  iterarResApi() {
    this.response.forEach((item, index) => {
      this.createItems(item, index);
    });
    this.container.append(...this.allItems);
  }

  async consumirApi() {
    const avo = await fetch(`${this.api}/api/avo`);
    const res = await avo.json();
    if (avo.ok) {
      this.response = res.data;
      return this.iterarResApi();
    }
  }
}

export { Items };
