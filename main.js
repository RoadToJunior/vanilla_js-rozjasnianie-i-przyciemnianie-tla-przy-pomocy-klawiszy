/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let color = 100;

document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

// const changeColor = (e) => {
//   console.log(e.keyCode, e.which);
//   console.log(color);
//   // 38 - strzałka do góry
//   // 40 - strzalka w dół

//   // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
//   //tutaj twój kod
//   // wersja 1 - instrukcja if
//   // wersja 2 - instrukcja switch

//     if (e.keyCode === 38 && color < 255) {
//       color += 5;
//     } else if (e.keyCode === 40 && color >= 0) {
//       color -= 5;
//     }
//     document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
//   };

const changeColor = (e) => {
  switch (e.keyCode) {
    case 38:
      color <= 255 ? (color += 5) : color;
      break;
    case 40:
      color >= 0 ? (color -= 5) : color;
      break;
  }
  document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
};

window.addEventListener("keydown", changeColor);
