const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const button = document.querySelector('#button');
const resultBMI = document.querySelector('#result-bmi');
const resultTotal = document.querySelector('#result-total');
const resultTotalContainer = document.querySelector('.result__total')

button.addEventListener('click', () => {
  let bmiResult = weight.value / ((height.value / 100) * (height.value / 100));
  resultBMI.textContent = bmiResult.toFixed(1);

  switch (true) {
    case bmiResult < 18.5:
      bmiTotal("Недостаточный вес", 'underweight');
      break;

    case bmiResult > 18.5 && bmiResult <= 24.9:
      bmiTotal("Нормальный вес", 'normal');
      break;

    case bmiResult > 24.9 && bmiResult <= 30:
      bmiTotal("Избыточный вес", 'overweight');
      break;

    case bmiResult > 30:
      bmiTotal("Ожирение", 'fat');
      break;

    default:
      break;
  }
});

const bmiTotal = (bmi, css) => {
  resultTotal.textContent = bmi;
  resultTotalContainer.classList.remove('underweight', 'normal', 'overweight', 'fat');
  resultTotalContainer.classList.add(css);
};