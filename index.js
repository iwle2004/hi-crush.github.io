// const noBtn = document.getElementById('noBtn');
// const wrapper = document.getElementById('wrapper');

// let audio = document.getElementById('audio');

// const wrapperRect = wrapper.getBoundingClient();
// const noBtnRect = noBtn.getBoundingClientRect();

// function agreed() {
//     audio.play();
//     alert("Awww, I love you so much. (ɔ◔‿◔)ɔ Let's go out!!!");
// }

// noBtn.addEventListener('mouseover', () => {
//     const i = Math.floor(Math.random() *(wrapperRect.width - noBtnRect.width)) + 1;
//     const j = Math.floor(Math.random() *(wrapperrRect.height - noBtnRect.height)) + 1;

//     noBtn.style.left = i + "px";
//     noBtn.style.top = j + "px";
// })

// function disagreed() {
//     const i = Math.floor(Math.random() *(wrapperRect.width - noBtnRect.width)) + 1;
//     const j = Math.floor(Math.random() *(wrapperRect.height - noBtnRect.height)) + 1;

//     noBtn.style.left = i + "px";
//     noBtn.style.top = j + "px";
// }

let wrapper = document.querySelector('.wrapper');
let question = document.querySelector('.question');
let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    audio.play();
    question.innerHTML = "Awww, I love you so much. (ɔ◔‿◔)ɔ Let's go out!!!";
})

question.addEventListener('click', () => {
    question.innerHTML = "Do you wanna go out with me?";
})

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
})
