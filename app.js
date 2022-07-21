const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide,idx)=>{
    slide.style.left=`${idx * 100}%`
})

let counter = 0;

const karuzela = () =>{
// if(counter ===slides.length)
//     counter = 0;
// if(counter < 0)
//     counter = slides.length-1;

if(counter < slides.length-1)
    nextBtn.style.display = "block";
else nextBtn.style.display = "none";

if(counter > 0)
    prevBtn.style.display="block";
else prevBtn.style.display="none";

    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter * 100}%)`
    })
}



nextBtn.addEventListener("click", ()=>{
    counter++;
    karuzela();
});

prevBtn.addEventListener("click", ()=>{
    counter--;
    karuzela();
})
prevBtn.style.display="none";
