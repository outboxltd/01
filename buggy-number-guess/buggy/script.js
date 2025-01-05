// מספר אקראי בין 1 ל-10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// אלמנטים מהדף
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultText = document.getElementById('result');

// אירוע לחיצה על הכפתור
guessButton.addEventListener('click', function() {
  // קבלת הניחוש מהמשתמש
  const userGuess = guessInput.value;

  // בדיקה אם הניחוש נכון (עם באג מכוון)
  if (userGuess === secretNumber) { // כאן יש באג - צריך להמיר את userGuess למספר
    resultText.textContent = 'כל הכבוד! ניחשת נכון!';
    resultText.style.color = 'green';
  } else {
    resultText.textContent = 'לא נכון, נסה שוב!';
    resultText.style.color = 'red';
  }

  // ניקוי הקלט
  guessInput.value = '';
});
