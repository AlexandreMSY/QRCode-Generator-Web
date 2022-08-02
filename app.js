var qrcode = undefined;

function generateQR(value){
    let qrHolder = document.getElementById('qrcode'); /*place where the qrcode image is going to appear*/
    
    let options = {
        text: value,
        width: parseInt(document.getElementById('width').value),
        height: parseInt(document.getElementById('height').value),
        colorDark: document.getElementById('patterncolor').value,
        colorLight: document.getElementById('backgroundcolor').value,
    };

    if (qrcode === undefined){
        qrcode = new QRCode(qrHolder, options);
    }else{
        qrcode.clear() /*in case a qr code already exists, it just creates another one*/
        qrcode = new QRCode(qrHolder, options);
    }
}
