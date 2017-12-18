var scanCode = document.getElementById('scanCode');
scanCode.onclick = function () {
    cordova.plugins.barcodeScanner.scan((result) => {
        alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        console.log(result);
    }, (error) => {
        alert(error);
    });
}