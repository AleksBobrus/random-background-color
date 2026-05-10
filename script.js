const colorDisplay = document.getElementById('colorDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorBtn.addEventListener('click', () => {
  const hexCode = getRandomHexColor();
  document.body.style.backgroundColor = hexCode;
  colorDisplay.textContent = hexCode;
});
