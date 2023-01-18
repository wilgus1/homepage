console.log("Cześć.To będzie moja pierwsza profesjonalnie tworzona strona. Taką mam nadzieję");

let buttonDark = document.querySelector(".js-buttonDark");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

buttonDark.addEventListener("click", () => {
    body.classList.toggle("body--Dark");

    themeName.innerText = body.classList.contains("body--Dark") ? "jasne" : "ciemne";
}
);

let buttonImg = document.querySelector(".js-buttonImg");
let img = document.querySelector(".change__img");
let activityName = document.querySelector(".js-activityName");

buttonImg.addEventListener("click", () => {
    img.classList.toggle("displaySecondImage");
    const shouldDisplaySecondImage = img.classList.contains("displaySecondImage");

    img.src = shouldDisplaySecondImage ? 'https://i.ibb.co/MVnYSWW/ja2.jpg' : 'https://i.ibb.co/X80pVsc/ja1.jpg';
    activityName.innerText = shouldDisplaySecondImage ? "pierwsze" : "drugie";
});