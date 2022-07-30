var qrcode = undefined;

function generateQR(value){
    let qrHolder = document.getElementById('qrcode');
    
    let options = {
        text: value,
        width: parseInt(document.getElementById('width').value),
        height: parseInt(document.getElementById('height').value)
    };

    console.log(typeof options.width)


    if (qrcode === undefined){
        qrcode = new QRCode(qrHolder, options);
    }else{
        qrcode.clear() /*in case a qr code already exists, it just creates another one*/
        qrcode = new QRCode(qrHolder, options);
    }
}
