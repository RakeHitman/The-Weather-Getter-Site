
const mainOne = document.querySelector(".mainOne");
const subMidTwo = document.querySelector(".subMidTwo");



window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 850) {
      mainOne.textContent = "";
    } else {
      alert('We are so sorry for the inconvenience ! Site is not responding .')
    }
});
