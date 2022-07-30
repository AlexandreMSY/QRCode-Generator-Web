var qrcode = undefined;

function generateQR(value){
    let qrHolder = document.getElementById('qrcode');

    let options = {
        text: value,
    };

    if (qrcode === undefined){
        qrcode = new QRCode(qrHolder,options);
    }else{
        qrcode.makeCode(value)
    }
}