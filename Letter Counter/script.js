const input = document.getElementById('add-length');

input.addEventListener('keyup', ()=>{
    
    let inputTxt = document.getElementById('add-length').value;

    let lettersLength = letterCounter(inputTxt);

    document.getElementById('display-txt').textContent = `Letter Count: ${lettersLength}`;

});

function letterCounter(txt){
    txt = txt.replace(/\s/g, "");
    return txt.length;
}
