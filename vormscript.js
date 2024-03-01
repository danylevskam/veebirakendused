//ввод в текстовый ящик
//tekstkasti sisestamine
function textKast(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere hommikust, "+nimi.value;
    vastus.style.color="purple"
}
//radionupude valik
//выбор значений при нажатии на радиокнопку
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let pilt=document.getElementById("pilt");

    if (mees.checked){
        vastus2.innerHTML="Sa valisid mees";
        vastus2.style.color="purple";
        pilt.src="mees.png";
    }else if (naine.checked){
        vastus2.innerHTML="Sa valisid naine";
        vastus2.style.color="purple";
        pilt.src="naine.png"
    }else {
        vastus2.innerHTML="Palun vali sugu";
        vastus2.style.color="purple";
    }

}
//считывает значения из выпадающкго списка
//võtab väärtused ripploendist
function selectValik(){
    let vastus3=document.getElementById("vastus3");
    let linn=document.getElementById("linn");
    if(linn.selectedIndex!==0){
        vastus3.innerHTML="sa oled sündinud "+linn.value +" linnas",
        vastus3.style.color="purple";
    } else {
        vastus3.innerHTML="palun vali linn"
    }

}
//checkbox
function checkboxValik(){
    let vastus4=document.getElementById("vastus4");
    let jazz=document.getElementById("jazz");
    let rock=document.getElementById("rock");
    let metall=document.getElementById("metall");
    let popp=document.getElementById("popp");
    let tehnotrans=document.getElementById("tehnotrans");
    let rapp=document.getElementById("rapp");

    let muusika="";
    if (jazz.checked){
        muusika+=jazz.value+", ";
    }
    if (rock.checked){
        muusika+=rock.value+", ";
    }
    if (metall.checked){
        muusika+=metall.value+", ";
    }
    if (popp.checked){
        muusika+=popp.value+", ";
    }
    if (tehnotrans.checked){
        muusika+=tehnotrans.value+", ";
    }
    if (rapp.checked){
        muusika+=rapp.value+", ";
    }
    vastus4.innerHTML="Tee valisite muusika: "+muusika;
}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    pilt.src="";
}