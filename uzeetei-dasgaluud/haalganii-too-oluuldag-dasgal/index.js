const entranceInt = document.getElementById("entrance-int");
const floorInt = document.getElementById("floor-int");
const doorInt = document.getElementById("door-int");
const ntooInt = document.getElementById("ntoo-int");
const button = document.getElementById("button");
const resultDiv = document.getElementById("result");
button.addEventListener("click", () => {
    const orts = Number(entranceInt.value);
    const dawhar = Number(floorInt.value);
    const dawhariin_haalga = Number(doorInt.value);
    const oruulga = Number(ntooInt.value);
    const totaldoors = orts * dawhar * dawhariin_haalga;

    if (oruulga > totaldoors || !oruulga || !orts || !dawhar || !dawhariin_haalga) {
        resultDiv.innerText = "tootiin haalga baihgui baina";
        return;
    }

const negOrtsniiAil = dawhar * dawhariin_haalga;
 
const ortsniiToo = Math.ceil(oruulga
     / negOrtsniiAil);
 
const ortsDahHaalgiinToo = oruulga
 - (ortsniiToo - 1) * negOrtsniiAil;
const floorToo = Math.ceil(ortsDahHaalgiinToo / dawhariin_haalga);
const doorToo = ortsDahHaalgiinToo - (floorToo - 1) * dawhariin_haalga;

resultDiv.innerText = `Ta orj irsen haalgaa: ${ortsniiToo} orts, ${floorToo} davhar, ${doorToo} haalga`;

});

