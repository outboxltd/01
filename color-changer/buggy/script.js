// פונקציה ליצירת צבע אקראי
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// אלמנטים מהדף
const colorButton = document.getElementById('colorButton');

// אירוע לחיצה על הכפתור
colorButton.addEventListener('click', function() {
  // כאן יש באג - הפונקציה לא נקראת נכון
  const newColor = getRandomColor; // צריך להיות getRandomColor()
  document.body.style.backgroundColor = newColor;
});
