
function clickColor(button){
    button.style.backgroundColor = "#569e7b";
}

function eventListener(button, code, pass){
    button.addEventListener("mousedown", e=>{
        navigator.clipboard.writeText(code);
    })
    button.addEventListener("contextmenu", e=>{
        e.preventDefault();
        navigator.clipboard.writeText(pass);
    })

}



function codeUnavailable(button, code, pass, buttonName){
    button.addEventListener("mousedown", e=>{
        navigator.clipboard.writeText(code);
        window.alert(`the code for ${buttonName} is not known.`);
    })
    button.addEventListener("contextmenu", e=>{
        navigator.clipboard.writeText(pass);
        window.alert(`the code for ${buttonName} is not known.`);
    })
}



const buttons = document.querySelectorAll(".buttonClass");

const mat = document.querySelector("#matButton");
let matCode = "868 9258 3937";
let matPass = "MAT";

const sjl = document.querySelector("#sjlButton");
let sjlCode = matCode;
let sjlPass = matPass;

const che = document.querySelector("#cheButton");
let cheCode = "94141539070";
let chePass = "QjhSZnhlQXZFREd5R1NBVmo2RVA1QT09";

const anj = document.querySelector("#anjButton");
let anjCode = "88311551902";
let anjPass = ""

const tsv = document.querySelector("#tsvButton");
let tsvCode = "neznamy";
let tsvPass = "neznamy";

const nej = document.querySelector("#nejButton");
const nej2 = document.querySelector("#nej2Button");
let nejCode = "93665821402";
let nejPass = "U01MRGZpeXdrNHJOUWlVaEN0dlBodz09";
let nejGroup = false;
let nejCode2 = "123";
let nejPass2 = "123";

const geg = document.querySelector("#gegButton");
let gegCode = "950 0589 8206";
let gegPass = "QWNCNnNkWmp2ODRHQ3dHK09zMnhWZz09";

const dej = document.querySelector("#dejButton");
let dejCode = "711 2081 1711";
let dejPass = "SS9hakQ4RWdURTRFZ2RkVEdLdnA1UT09";






buttons.forEach(value => value.addEventListener("mousedown", e=>{
    value.style.backgroundColor = "#569e7b";
}))

buttons.forEach(value => value.addEventListener("mouseup", e=>{
    value.style.backgroundColor = "#8EFFC9";
}))
eventListener(mat, matCode, matPass);

eventListener(sjl, sjlCode, sjlPass);

eventListener(che, cheCode, chePass);

eventListener(anj, anjCode, anjPass);

codeUnavailable(tsv, tsvCode, tsvPass, "TSV");

eventListener(nej, nejCode, nejPass);
eventListener(nej2, nejCode2, nejPass2);

eventListener(geg, gegCode, gegPass);

eventListener(dej, dejCode, dejPass);









