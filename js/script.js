// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// Funzione per generare numeri casuali
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
  }
  
  // Funzione per visualizzare i numeri e avviare il timer
  function showNumbersAndStartTimer() {
    const numbers = generateRandomNumbers();
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = numbers.join(' ');
  
    setTimeout(function() {
      numbersContainer.innerHTML = '';
      checkNumbers(numbers);
    }, 30000);
  }
  
  // Funzione per controllare i numeri inseriti dall'utente
  function checkNumbers(correctNumbers) {
    const userNumbers = [];
    for (let i = 0; i < 5; i++) {
      const number = parseInt(prompt('Inserisci un numero che hai visto:'));
      userNumbers.push(number);
    }
  
    let correctCount = 0;
    const correctIndices = [];
    for (let i = 0; i < 5; i++) {
      if (correctNumbers.includes(userNumbers[i])) {
        correctCount++;
        correctIndices.push(userNumbers[i]);
      }
    }
  
    alert('Hai indovinato ' + correctCount + ' numero/i: ' + (correctIndices.length > 0 ? correctIndices.join(', ') : 'nessuno'));
  }
  
  // Avvio del gioco
  showNumbersAndStartTimer();
  
  
  
  
  
  