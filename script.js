function getMenu() {
  fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then((response) => response.json())
    .then((data) => {
      const menuList = document.querySelector("#menu ul");
      data.forEach((item) => {
        const menuItem = document.createElement("li");
        menuItem.textContent = item.name + ": $" + item.price;
        menuList.appendChild(menuItem);
      });
    })
    .catch((error) => console.error(error));
}

function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const burgers = [
        { name: "Burger 1", price: 8 },
        { name: "Burger 2", price: 10 },
        { name: "Burger 3", price: 12 },
      ];
      const order = {
        burgers: burgers,
        totalPrice: burgers.reduce((acc, cur) => acc + cur.price, 0),
      };
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = false;
      resolve({ orderStatus, paid });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = true;
      resolve({ orderStatus, paid });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for your payment!");
}

function placeOrder() {
  takeOrder()
    .then(orderPrep)
    .then(payOrder)
    .then((data) => {
      if (data.paid) {
        thankyouFnc();
      }
    })
    .catch((error) => console.error(error));
}