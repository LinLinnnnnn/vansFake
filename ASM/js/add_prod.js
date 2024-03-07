var formFileSmInput = document.getElementById('formFileSm');
var formFileSmError = document.getElementById('formFileSmError');

var categoryInput = document.getElementById('category');
var categoryError = document.getElementById('categoryError');

var name_prod = document.getElementById('name_prod');
var name_prodError = document.getElementById('name_prodError');

var name_prod1 = document.getElementById('name_prod1');
var name_prodError1 = document.getElementById('name_prodError1');

var price = document.getElementById('price');
var priceError = document.getElementById('priceError');

var price1 = document.getElementById('price1');
var priceError1 = document.getElementById('priceError1');

var price_km = document.getElementById('price_km');
var price_kmError = document.getElementById('price_kmError');

var moTaNgan = document.getElementById('moTaNgan');
var moTaNganError = document.getElementById('moTaNganError');

var moTaCT = document.getElementById('moTaCT');
var moTaCTError = document.getElementById('moTaCTError');

formFileSmInput.addEventListener('input', function(){
    if(!formFileSmInput.validity.valid){
        formFileSmError.textContent = formFileSmInput.validationMessage;
        formFileSm.style.border = '#b5313a solid 1px';
    }else{
        formFileSmError.textContent = "";
        formFileSmInput.style.border = '1px solid #e1e1e1';
    }
});
categoryInput.addEventListener('input', function(){
    if(!categoryInput.validity.valid){
        categoryError.textContent = categoryInput.validationMessage;
        categoryInput.style.border = '#b5313a solid 1px';
    }else{
        categoryError.textContent = "";
        categoryInput.style.border = '1px solid #e1e1e1';
    }
});
name_prod.addEventListener('input', function(){
    if(!name_prod.validity.valid){
        name_prodError.textContent = name_prod.validationMessage;
        name_prod.style.border = '#b5313a solid 1px';
    }else{
        name_prodError.textContent = "";
        name_prod.style.border = '1px solid #e1e1e1';
    }
});
name_prod1.addEventListener('input', function(){
    if(!name_prod1.validity.valid){
        name_prodError1.textContent = name_prod1.validationMessage;
        name_prod1.style.border = '#b5313a solid 1px';
    }else{
        name_prodError1.textContent = "";
        name_prod1.style.border = '1px solid #e1e1e1';
    }
});
price.addEventListener('input', function(){
    if(isNaN(price.value)||!price.validity.valid){
        priceError.textContent = "Please enter a number" ;
        price.style.border = '#b5313a solid 1px';
    }else{
        priceError.textContent = "";
        price.style.border = '1px solid #e1e1e1';
    }
});
price1.addEventListener('input', function(){
    if(isNaN(price1.value)||!price1.validity.valid){
        priceError1.textContent = "Please enter a number";
        price1.style.border = '#b5313a solid 1px';
    }else{
        priceError1.textContent = "";
        price1.style.border = '1px solid #e1e1e1';
    }
});
price_km.addEventListener('input', function(){
    if(isNaN(price_km.value)||!price_km.validity.valid){
        price_kmError.textContent = "Please enter a number";
        price_km.style.border = '#b5313a solid 1px';
    }else{
        price_kmError.textContent = "";
        price_km.style.border = '1px solid #e1e1e1';
    }
});
moTaNgan.addEventListener('input', function(){
    if(!moTaNgan.validity.valid){
        moTaNganError.textContent = moTaNgan.validationMessage;
        moTaNgan.style.border = '#b5313a solid 1px';
    }else{
        moTaNganError.textContent = "";
        moTaNgan.style.border = '1px solid #e1e1e1';
    }
});
moTaCT.addEventListener('input', function(){
    if(!moTaCT.validity.valid){
        moTaCTError.textContent = moTaCT.validationMessage;
        moTaCT.style.border = '#b5313a solid 1px';
    }else{
        moTaCTError.textContent = "";
        moTaCT.style.border = '1px solid #e1e1e1';
    }
});