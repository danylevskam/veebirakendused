function sissestaNimi (){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere päevast, õpilane "+nimi.value;
    vastus.style.color="blue";
}
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
    vastus.style.color="blue";
}
vastus.innerHTML="Tere päevast, õpilane " + nimi.value;
vastus.style.color="dimgrey"
}
function kuursid(){
    let vastus2=document.getElementById("vastus2");
    let kurs1=document.getElementById("kurs1");
    let kurs2=document.getElementById("kurs2");
    let kurs3=document.getElementById("kurs3");
    let kursid="";
    if (kurs1.checked){
        kursid+="kurs 1, ";
    }
    if (kurs2.checked){
        kursid+="kurs 2, ";
    }
    if (kurs3.checked){
        kursid+="kurs 3, ";
    }
    vastus2.innerHTML="Sa läbisid "+kursid;
}