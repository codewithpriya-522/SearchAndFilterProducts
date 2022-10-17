let products = {
    data: [
      {
        productName: "Galaxy F23",
        category: "Mobile",
        price: "14,000",
        image: "./image/samsung-galaxy-f23-1.jpg",
      },
      {
        productName: "vivo T1",
        category: "Mobile",
        price: "15,000",
        image: "./image/vivo-t1-5g-1.jpg",
      },
      {
        productName: "Fastrack Reflex curv smart watch",
        category: "Watch",
        price: "3,500",
        image: "./image/61Sj9JtDdaL._SL1500_.jpg"
      },
      {
        productName: " Dell Latitude Laptop E7470",
        category: "Laptop",
        price: "35,000",
        image: "./image/dell-laptop.jpg"
      },
      {
        productName: "SONY WH-CH510",
        category: "Headphone",
        price: "2,199",
        image: "./image/images.jpg"
      },
      {
        productName: "APPLE iPhone 11 (Red, 64 GB)",
        category: "Mobile",
        price: "41,990",
        image: "./image/iphone11.jpg"
      },
      {
        productName: "ASUS VivoBook 15 (2022)",
        category: "Laptop",
        price: "36,999",
        image: "./image/asusLaptop.png"
      },
      {
        productName: "boAt Rockerz 400 Super Extra Bass Bluetooth Headset  (Blue, Black, On the Ear)",
        category: "Headphone",
        price: "36,999",
        image: "./image/boat-headphone.png"
      },
      {
        productName: "Fastrack 38024PP25 Minimalists Analog Watch ",
        category: "Watch",
        price: "765",
        image: "./image/analog-FastTrack-watch.jpg",
      },

    ]}
    for (let i of products.data) {
      let card = document.createElement("div");
      card.classList.add("card", i.category, "hide");
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");

      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
      
      let container = document.createElement("div");
      container.classList.add("container");

      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);
      
      let price = document.createElement("h6");
      price.innerText =  i.price;
      container.appendChild(price);
      card.appendChild(container);
      document.getElementById("products").appendChild(card);

    }
    function filterProduct(value) {
      let buttons = document.querySelectorAll(".button-value");
      buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
      let elements = document.querySelectorAll(".card");
      elements.forEach((element) => {
        if (value == "all") {
          element.classList.remove("hide");
        } else {
          if (element.classList.contains(value)) {
            element.classList.remove("hide");
          } else {
            element.classList.add("hide");
          }
        }
      });
    }
    document.getElementById("btnSearch").addEventListener("click", () => {
      let searchInput = document.getElementById("txtSearch").value;
      let elements = document.querySelectorAll(".product-name");
      let cards = document.querySelectorAll(".card");
      elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
          cards[index].classList.remove("hide");
        } else {
          cards[index].classList.add("hide");
        }
      });
    });
    window.onload = () => {
      filterProduct("all");
    };
