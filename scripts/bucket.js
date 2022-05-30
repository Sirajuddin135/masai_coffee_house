// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee")) || [];
let bucket = document.getElementById("bucket");
let totalAmount = document.getElementById("total_amount");
let bucketValue = JSON.parse(localStorage.getItem("bucketValue")) || 0;
totalAmount.innerHTML = bucketValue;

data.forEach((item, index) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = item.image;

    let type = document.createElement("h1");
    type.innerText = item.title;

    let price = document.createElement("h2");
    price.innerText = item.price;

    let btn = document.createElement("button");
    btn.id = "remove_coffee";
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeCoffee(item, index);
    });

    div.append(image, type, price, btn);

    bucket.append(div);
});

function removeCoffee(item, index) {
    data.splice(index, 1);
    bucketValue -= item.price;
    localStorage.setItem("coffee", JSON.stringify(data));
    localStorage.setItem("bucketValue", JSON.stringify(bucketValue));
    window.location.reload();
}