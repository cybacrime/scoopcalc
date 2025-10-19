function price() {

    var paperType = document.priceCalc.paperType;
    var paperSize = document.priceCalc.paperSize;
    var colorType = document.priceCalc.colorType;
    var paperQuantity = document.priceCalc.quantity;
    var paperCopies = document.priceCalc.copies;
    
    window.onload = function() {
        document.priceCalc.paperType.onchange = price;
        document.priceCalc.paperSize.onchange = price;
        document.priceCalc.colorType.onchange = price;
        document.priceCalc.paperQuantity = price;
    }
    
    var price = parseInt(paperType.value) * parseInt(paperSize.value) * parseInt(colorType.value) * parseInt(paperQuantity.value) * parseInt(paperCopies.value);
    
    document.getElementById("prices").innerHTML = price + '.00';
}