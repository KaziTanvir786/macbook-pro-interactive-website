//update the total price and final price at the bottom
function updateTotal() {
    const bestPrice = document.getElementById('best-price');
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const deliveryCharge = document.getElementById('delivery-charge');
    const totalPrice = document.getElementById('total-price');
    const finalPrice = document.getElementById('final-price');
    //calculating and updating total prices
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(extraMemoryCost.innerText) + parseFloat(extraStorageCost.innerText) + parseFloat(deliveryCharge.innerText);
    finalPrice.innerText = totalPrice.innerText;
}

//update the costs for a particular button
function updateCost(fieldId, cost) {
    //hiding alerts and enabling apply button on reclicking any customization option
    document.getElementById('promo-invalid-alert').style.display = 'none';
    document.getElementById('promo-success-alert').style.display = 'none';
    document.getElementById('promo-code-submit-btn').classList.remove("disabled");
    const field = document.getElementById(fieldId);
    field.innerText = cost;
    //calling updateTotal() to update the total prices
    updateTotal();
}

//event handler for 8GB memory button
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateCost('extra-memory-cost', 0);
})
//event handler for 16GB memory button
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateCost('extra-memory-cost', 180);
})
//event handler for 256GB storage button
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateCost('extra-storage-cost', 0);
})
//event handler for 512GB storage button
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateCost('extra-storage-cost', 100);
})
//event handler for 1TB storage button
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateCost('extra-storage-cost', 180);
})
//event handler for free delivery button
document.getElementById('delivery-free').addEventListener('click', function () {
    updateCost('delivery-charge', 0);
})
//event handler for immediate delivery for $20 button
document.getElementById('delivery-20').addEventListener('click', function () {
    updateCost('delivery-charge', 20);
})

//updating final price by checking promo code
document.getElementById('promo-code-submit-btn').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    const finalPrice = document.getElementById('final-price');
    const promoCodeInputFeild = document.getElementById('promo-code-input');
    const promoCodeInput = promoCodeInputFeild.value;
    //promo code validation check
    if (promoCodeInput.toLowerCase() == 'stevekaku') {
        //calculate and update total price
        const discount = (parseFloat(totalPrice.innerText) * 20) / 100;
        const updatedFinalPrice = parseFloat(totalPrice.innerText) - discount;
        finalPrice.innerText = updatedFinalPrice;
        //emptying input feild
        promoCodeInputFeild.value = '';
        //showing success alert and disabling button
        document.getElementById('promo-invalid-alert').style.display = 'none';
        document.getElementById('promo-success-alert').style.display = 'block';
        document.getElementById('promo-code-submit-btn').classList.add("disabled");
    }
    else {
        //showing error alert
        document.getElementById('promo-invalid-alert').style.display = 'block';
        document.getElementById('promo-success-alert').style.display = 'none';
    }
})