function getAnewPin(){
    const pin = Math.round(Math.random() * 10000);
    const newPin = pin + '';
    if(newPin.length == 4){
        return pin;
    }
    else{
        return getAnewPin();
    }
}



function generatePin(){
    const pinUpdate = getAnewPin();
    document.getElementById('display_pin').value = pinUpdate;
};





document.getElementById('key-pad').addEventListener('click',function(evant){
     const number = evant.target.innerText;
     const inputFild = document.getElementById('typed_numbers');
    
  if(isNaN(number)){
    inputFild.value = '';
}else{
    const inputText = inputFild.value;
    const totalNumbe = inputText + number;
    inputFild.value = totalNumbe;
}

});


function verifyPin(){

    const machePin = document.getElementById('display_pin').value;
    const macheFild = document.getElementById('typed_numbers').value;
    const macheIt = document.getElementById('notify-success');
    const unMache = document.getElementById('notify-fail');

    if(machePin == macheFild){
        macheIt.style.display = 'block';
        unMache.style.display = 'none';
    }else{
        unMache.style.display = 'block';
        macheIt.style.display = 'none';  
    }


}