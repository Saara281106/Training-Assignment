console.log("Helllooooo I'm working");
let selectedUnit = 0;
let product = [];

function addProduct() {
  let value = document.getElementById("product").value;
  product.push({
    name: value,
    price: 0,
  });

 

  let msg = document.getElementById("success");

  msg.style.display = "block";
  msg.innerHTML = "✅ Product " + value + " added successfully!";

  setTimeout(() => {
    msg.innerText = "";
  }, 1200);

  let addP = document.getElementById("addP");
  let option = document.createElement("option");

  option.text = value;
  option.value = value;

  addP.appendChild(option);
}


function productSelected() {
  let selectedValue = document.getElementById("addP").value;
  console.log(selectedValue);
}

function addPrice() {

  let selectedValue = document.getElementById("addP").value;
  let price = Number(document.getElementById("price").value);

  for (let i = 0; i < product.length; i++) {
    if (product[i].name === selectedValue) {
      product[i].price = price;
      let msg = document.getElementById("success");

      msg.style.display = "block";
      msg.innerHTML =
        "✅ Price " +
        price +
        " for " +
        product[i].name +
        " added successfully!";

      setTimeout(() => {
        msg.innerText = "";
      }, 1200);
    }
  }
  
}

function addData(){
    console.log("New Transaction clicked");
    let dropdown = document.getElementById("checkoutProducts");
    console.log(dropdown);
    console.log(document.getElementById("checkoutProducts").innerHTML);

    // Optional: clear old options except first one
    dropdown.innerHTML =
        '<option disabled selected>Select Product</option>';

    for (let i = 0; i < product.length; i++) {

        let option = document.createElement("option");

        option.text =
            product[i].name + " - ₹" + product[i].price;

        option.value = product[i].name;

        dropdown.appendChild(option);
    }

    console.log(product);
}

let selectedCheckoutProduct = null;
let cart = [];

function productChosen() {

    let selectedName =
        document.getElementById("checkoutProducts").value;

    for(let i = 0; i < product.length; i++) {

        if(product[i].name === selectedName) {

            selectedCheckoutProduct = product[i];

            console.log(selectedCheckoutProduct);

        }

    }

}

function addToCart() {
let unit = selectedUnit;

    if(selectedCheckoutProduct == null) {

        alert("Please select a product");

        return;

    }

    let cartItem = {

        name: selectedCheckoutProduct.name,

        price: selectedCheckoutProduct.price,

        unit: unit,

        totalPrice:
            selectedCheckoutProduct.price * unit

    };

    cart.push(cartItem);
    alert(
    cartItem.name +
    " added to cart successfully!"
);

    console.log(cart);

}

function setUnit(unit) {

    selectedUnit = unit;

    document.getElementById("unit").value = unit;

    console.log("Selected Unit:", selectedUnit);

}

function generateBill() {

    let receiptBody =
        document.getElementById("receiptBody");

    receiptBody.innerHTML = "";

    let total = 0;

    for(let i = 0; i < cart.length; i++) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${cart[i].name}</td>
            <td>${cart[i].price}</td>
            <td>${cart[i].unit}</td>
            <td>${cart[i].totalPrice}</td>
        `;

        receiptBody.appendChild(row);

        total += cart[i].totalPrice;

    }

    let tax = total * 0.05;

    let amountDue = total + tax;

    document.getElementById("totalPrice").innerHTML =
        "Total Price : ₹" + total;

    document.getElementById("tax").innerHTML =
        "Taxes : ₹" + tax;

    document.getElementById("amountDue").innerHTML =
        "Amount Due : ₹" + amountDue;

}