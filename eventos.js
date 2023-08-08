function saludar(){
    alert("Hola!");
}
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementsByTagName('div');
    container[0].addEventListener("click", function(){
        alert("Hola! Soy el div");
    });
});
