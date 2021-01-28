
//efficient way to solve same problem
function handleProductChange(product, isIncrease) {
    const productCount = getInput(product);
    let productNewCount = productCount;
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    if (isIncrease == true) {

        productNewCount = productCount + 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    // const caseTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == 'phone') {

        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {

        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
}

// calculation for sub total 
function calculateTotal() {

    const phoneCount = getInput('phone');
    const caseCount = getInput('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

// gei input for integer value 
function getInput(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;

}

// remove items 
function productRemove(product) {
    if (product == 'phone' || product == 'case') {
        const productDelete = document.getElementById(product + '-remove');
        const phoneItem = document.getElementById(product + '-item');
        phoneItem.style.display = "none";
    }
    return product;
}