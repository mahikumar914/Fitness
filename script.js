const setCountEl = document.getElementById('setCount');
const repCountEl = document.getElementById('repCount');

const addRepBtn = document.getElementById('addRepBtn');
const completeSetBtn = document.getElementById('completeSetBtn');
const resetBtn = document.getElementById('resetBtn');

let sets = 0;
let reps = 0;

const render = () => {
  setCountEl.textContent = String(sets);
  repCountEl.textContent = String(reps);
};

addRepBtn.addEventListener('click', () => {
  reps += 1;
  render();
});

completeSetBtn.addEventListener('click', () => {
  if (reps === 0) return;
  sets += 1;
  reps = 0;
  render();
});

resetBtn.addEventListener('click', () => {
  sets = 0;
  reps = 0;
  render();
});

render();
