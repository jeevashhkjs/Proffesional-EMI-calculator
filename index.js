let range = document.querySelectorAll('input[type="range"]')
let inputs = document.querySelectorAll('input[type="number"]')

let inp = document.querySelector("#amt")
inp.addEventListener("keyup", () => {
  document.querySelector("#amtrng").value = inp.value
})



for (let i = 0; i < inputs.length; i++) {
  range[i].addEventListener("input", () => {
    inputs[i].value = range[i].value

    let principleAmount;
    let interests;
    let monthss;

    for (let k = 0; k < inputs.length; k++) {

      if (range[i].classList.contains("amtrng")) {
        principleAmount = (inputs[k].value)
      } else if (range[i].classList.contains("intrstrng")) {
        interests = (inputs[k].value)
      } else {
        monthss = (inputs[k].value)
      }

    }

  })
}

function total(){
  
}

  // let finalR = interests / 1200

  // let result = principleAmount * finalR

  // let result1 = (Math.pow(1 + finalR, monthss))
  // let result2 = result1 - 1

  // let FinelResult = result * result1

  // let Answer = FinelResult / result2

  // let TotalAmount = monthss * Answer
  // let interestsss = TotalAmount - principleAmount