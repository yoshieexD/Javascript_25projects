const circles = document.querySelectorAll('.circle');
const progressbar = document.querySelectorAll('.indicator');
const buttons = document.querySelectorAll('button');

let currentStep = 1;
const updateSteps =(e) =>{
currentStep = e.target.id === "next" ? ++currentStep: --currentStep;
console.log(currentStep);
}
buttons.forEach(button => {
    button.addEventListener("click", updateSteps);
})