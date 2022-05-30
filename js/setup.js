const setup = () => {
  const rotateBtn = document.querySelector('.rotate-btn');
  const battleshipDirection = document.querySelector('.battleship-direction');

  // кнопка Горизонтально/Вертикально
  let direction = true;
  rotateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (direction) {
      direction = false;
      battleshipDirection.textContent = "Вертикально";
    } else {
      direction = true;
      battleshipDirection.textContent = "Горизонтально"
    }
  })

  //battleships - массив из 10 кораблей
  let battleships = [];
  const battleship4x = document.querySelector('.battleship4x');
  const battleship3x = document.querySelectorAll('.battleship3x');
  const battleship2x = document.querySelectorAll('.battleship2x');
  const battleship1x = document.querySelectorAll('.battleship1x');
  battleships.push(document.querySelector('.battleship4x'));
  battleship3x.forEach(element => {
    battleships.push(element);
  });
  battleship2x.forEach(element => {
    battleships.push(element);
  });
  battleship1x.forEach(element => {
    battleships.push(element);
  });
  console.log(battleships);

  // выбор корабля для выставления на поле
  let selectedBattleshipIndex = -1;
  let selectedBattleshipLength = 0;
  battleships.forEach(element => {
    if (!element.classList.contains('disabled')) {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        battleships.forEach(element => {
          element.classList.remove('selected');
        });
        element.classList.add('selected');
        selectedBattleshipIndex = battleships.indexOf(element);
        if (selectedBattleshipIndex === 0) {
          selectedBattleshipLength = 4;
        } else if (selectedBattleshipIndex <= 2) {
          selectedBattleshipLength = 3;
        } else if (selectedBattleshipIndex <= 5) {
          selectedBattleshipLength = 2;
        } else {
          selectedBattleshipLength = 1;
        }
      })
    }
  });

  // выбор поля для выставления выбранного корабля
  const field = [];
  const row1 = document.querySelector('.row1').querySelectorAll('.cell');
  const row2 = document.querySelector('.row2').querySelectorAll('.cell');
  const row3 = document.querySelector('.row3').querySelectorAll('.cell');
  const row4 = document.querySelector('.row4').querySelectorAll('.cell');
  const row5 = document.querySelector('.row5').querySelectorAll('.cell');
  const row6 = document.querySelector('.row6').querySelectorAll('.cell');
  const row7 = document.querySelector('.row7').querySelectorAll('.cell');
  const row8 = document.querySelector('.row8').querySelectorAll('.cell');
  const row9 = document.querySelector('.row9').querySelectorAll('.cell');
  const row10 = document.querySelector('.row10').querySelectorAll('.cell');
  field.push(row1);
  field.push(row2);
  field.push(row3);
  field.push(row4);
  field.push(row5);
  field.push(row6);
  field.push(row7);
  field.push(row8);
  field.push(row9);
  field.push(row10);
  console.log(field);

  let setupShips = 0;
  field.forEach(row => {
    row.forEach(cell => {
      cell.addEventListener('click', (event) => {
        event.preventDefault();        
        // если горизонтально
        if (direction) {
          let leftcellcolored = false;
          // проверка, что корабль влезает в поле
          if(Array.from(row).indexOf(cell) + selectedBattleshipLength <= 10) {
            // проверка, что не контактирует с другими кораблями
            while (selectedBattleshipLength > 0) {
              cell.style.backgroundColor = '#FF9900';
              cell.style.cursor = 'not-allowed';
              cell.style.pointerEvents = 'none';
              if(Array.from(field).indexOf(row) < 9) { // выделяем поля снизу от корабля
                field[Array.from(field).indexOf(row) + 1][Array.from(row).indexOf(cell)].style.backgroundColor = 'lightgray';
                field[Array.from(field).indexOf(row) + 1][Array.from(row).indexOf(cell)].style.cursor = 'not-allowed';
                field[Array.from(field).indexOf(row) + 1][Array.from(row).indexOf(cell)].style.pointerEvents = 'none';
              }
              if(Array.from(field).indexOf(row) > 0) { // выделяем поля сверху от корабля
                field[Array.from(field).indexOf(row) - 1][Array.from(row).indexOf(cell)].style.backgroundColor = 'lightgray';
                field[Array.from(field).indexOf(row) - 1][Array.from(row).indexOf(cell)].style.cursor = 'not-allowed';
                field[Array.from(field).indexOf(row) - 1][Array.from(row).indexOf(cell)].style.pointerEvents = 'none';
              }
              if(Array.from(row).indexOf(cell) < 9) { //выделяем поля справа от корабля
                row[Array.from(row).indexOf(cell) + 1].style.backgroundColor = 'lightgray';
                row[Array.from(row).indexOf(cell) + 1].style.cursor = 'not-allowed';
                row[Array.from(row).indexOf(cell) + 1].style.pointerEvents = 'none';
              }
              if(Array.from(row).indexOf(cell) === 0) {
                leftcellcolored = true;
              }
              if(Array.from(row).indexOf(cell) > 0 && !leftcellcolored) { //выделяем поля слева от корабля
                row[Array.from(row).indexOf(cell) - 1].style.backgroundColor = 'lightgray';
                row[Array.from(row).indexOf(cell) - 1].style.cursor = 'not-allowed';
                row[Array.from(row).indexOf(cell) - 1].style.pointerEvents = 'none';
                leftcellcolored = true;
              }
              cell = row[Array.from(row).indexOf(cell) + 1];
              selectedBattleshipLength--;
            }
            battleships[selectedBattleshipIndex].classList.add('disabled');
            battleships[selectedBattleshipIndex].style.outline = 'none';
            selectedBattleshipIndex = -1;
            selectedBattleshipLength = 0;
            setupShips++;
            leftcellcolored = false;
          }
        }
      })
    })
  })

  
}

setup()