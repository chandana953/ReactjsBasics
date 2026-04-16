function claculateGST(price) {
    return price * 0.18;
}

document.getElementById("btn").addEventListener("click",
    function () {
        let price = document.getElementById("price").value;
        let gst = claculateGST(price);
        document.getElementById("result").innerText = "Total Price:" + (Number(price) + Number(gst));
    });
