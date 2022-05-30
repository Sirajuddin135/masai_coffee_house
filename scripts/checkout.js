function status() {
    event.preventDefault();
    // let wait = Math.floor(Math.random() * 12) + 1;
    let wait = 0;
    let id = setInterval(function () {
        if (wait == 0) {
            alert("Your order is accepted");
        }
        else if (wait == 3) {
            alert("Your order is being Prepared");
        }
        else if (wait == 8) {
            alert("Your order is being packed");
        }
        else if (wait == 10) {
            alert("Your order is out for delivery");
        }
        else if (wait == 12) {
            alert("Order delivered");
        }
        wait++;
    }, 1000);
}