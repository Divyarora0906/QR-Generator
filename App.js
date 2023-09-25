let input_value = document.getElementById("input-url");
let button_click = document.getElementById("btn-sumbit");
const Img_QR = document.getElementById("IMG-QR")
button_click.addEventListener("click",function name(){
   console.log(input_value.value);
   Img_QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input_value.value;
   input_value.value = "";
})