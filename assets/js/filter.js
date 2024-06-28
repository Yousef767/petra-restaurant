let input = document.getElementById('filterinput');
let dateInner = document.getElementById('dateInner');

function formatDate(date) {
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

// Create a date object for 17 April 2024
const date = new Date(2024, 3, 17); // Note: Months are 0-indexed in JavaScript (0 = January, 3 = April)

// Format the date
const formattedDate = formatDate(date);

// Set the value of the date input field
input.value = date.toISOString().split('T')[0];

// Add event listener to the input field
input.addEventListener('change', function() {
  const userDate = new Date(input.value);
  dateInner.textContent = formatDate(userDate);
});