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
  let cells = [];
  const cellBtns = document.querySelectorAll('.cell');
  cellBtns.forEach(element => {
    cells.push(element);
  });
  console.log(cells);

  let successful = false;
  let setupSHips = 0;
  cells.forEach(cell => {
    cell.addEventListener('click', (event) => {
      event.preventDefault();
      successful = false;
      if (direction) {
        if (selectedBattleshipLength === 1) {
          cell.style.backgroundColor = '#FF9900';
          cell.style.cursor = 'not-allowed';
          cell.style.pointerEvents = 'none';
          successful = true;
        }
        if (selectedBattleshipLength === 2 && cells.indexOf(cell) % 10 < 9) {
          cell.style.backgroundColor = '#FF9900';
          cell.style.cursor = 'not-allowed';
          cell.style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 1].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 1].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 1].style.pointerEvents = 'none';
          successful = true;
        }
        if (selectedBattleshipLength === 3 && cells.indexOf(cell) % 10 < 8) {
          cell.style.backgroundColor = '#FF9900';
          cell.style.cursor = 'not-allowed';
          cell.style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 1].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 1].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 1].style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 2].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 2].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 2].style.pointerEvents = 'none';
          successful = true;
        }
        if (selectedBattleshipLength === 4 && cells.indexOf(cell) % 10 < 7) {
          cell.style.backgroundColor = '#FF9900';
          cell.style.cursor = 'not-allowed';
          cell.style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 1].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 1].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 1].style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 2].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 2].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 2].style.pointerEvents = 'none';
          cells[cells.indexOf(cell) + 3].style.backgroundColor = '#FF9900';
          cells[cells.indexOf(cell) + 3].style.cursor = 'not-allowed';
          cells[cells.indexOf(cell) + 3].style.pointerEvents = 'none';
          successful = true;
        }
      }
      if(successful) {
        battleships[selectedBattleshipIndex].classList.add('disabled');
        battleships[selectedBattleshipIndex].style.outline = 'none';
        selectedBattleshipIndex = -1;
        selectedBattleshipLength = 0;
        setupSHips++;
      }
    })
  });
}

setup()