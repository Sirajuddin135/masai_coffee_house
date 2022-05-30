// Add the coffee to local storage with key "coffee"
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
let coffeeData = [];
let arr = JSON.parse(localStorage.getItem("coffee")) || [];
let bucketValue = JSON.parse(localStorage.getItem("bucketValue")) || 0;
let coffeeCount = document.getElementById("coffee_count");
coffeeCount.innerHTML = arr.length;

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        coffeeData = data.menu.data;
        append(coffeeData);
    })
    .catch(function (error) {
        console.log("error:", error);
    });

function append(data) {
    let menu = document.getElementById("menu");

    data.forEach((item) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = item.image;

        let type = document.createElement("h1");
        type.innerText = item.title;

        let price = document.createElement("h2");
        price.innerText = item.price;

        let btn = document.createElement("button");
        btn.id = "add_to_bucket";
        btn.innerText = "Add to bucket";
        btn.addEventListener("click", function () {
            addToBucket(item);
        });

        div.append(image, type, price, btn);

        menu.append(div);
    });
}

function addToBucket(item) {
    arr.push(item);
    bucketValue += item.price;
    localStorage.setItem("coffee", JSON.stringify(arr));
    localStorage.setItem("bucketValue", JSON.stringify(bucketValue));
    coffeeCount.innerHTML = arr.length;
}