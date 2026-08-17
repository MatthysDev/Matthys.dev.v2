import { palette } from "./palette";

export function randomNeonColor(elementClass) {
  const shadowElements = document.getElementsByClassName(elementClass);

  // Iterate over each element with the specified class
  Array.from(shadowElements).forEach(shadowElement => {
    shadowElement.addEventListener('mouseover', () => {
      const randomColor = getRandomColor();
      shadowElement.style.setProperty('box-shadow', `0 0 20px 2px ${randomColor}`);
    });

    shadowElement.addEventListener('mouseout', () => {
      shadowElement.classList.add('shadow-[0px_0px_20px_2px]');
      shadowElement.style.removeProperty('box-shadow');
    });
  });

  function getRandomColor() {
    const colors = [palette.purple300, palette.sky200];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
