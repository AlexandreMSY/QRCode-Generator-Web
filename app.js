function test(){
    let qrHolder = document.getElementById('qrcode');

    let options = {
        text: document.getElementById('text').value,
    };

    new QRCode(qrHolder, options);

    console.log(options)
}