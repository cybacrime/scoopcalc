function subOutput() {
    var form = document.priceCalc;
    if (!form) return;

    var paperType = form.paperType;
    var paperSize = form.paperSize;
    var colorType = form.colorType;
    var paperQuantity = form.quantity;
    var paperCopies = form.copies;

    var a = parseFloat(paperType.value) || 0;
    var b = parseFloat(paperSize.value) || 0;
    var c = parseFloat(colorType.value) || 0;
    var d = parseFloat(paperQuantity.value) || 0;
    var e = parseFloat(paperCopies.value) || 0;

    var result = a * b * c * d * e;

    if (isNaN(result) || !isFinite(result)) {
        document.getElementById("subOutputs").innerHTML = "0.00";
    } else {
        document.getElementById("subOutputs").innerHTML = result.toFixed(2);
    }

}

window.onload = function() {
    var form = document.priceCalc;
    if (!form) return;

    form.paperType.onchange = subOutput;
    form.paperSize.onchange = subOutput;
    form.colorType.onchange = subOutput;
    form.quantity.onchange = subOutput;
    form.copies.onchange = subOutput;

    // initial calculation
    subOutput();
};