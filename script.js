//  creating an Array of student 
const students = [
  { sno: 1, name: 'Janu', english: 50, maths: 86, science: 77, social: 89 },
  { sno: 2, name: 'Tanu', english: 75, maths: 96, science: 67, social: 91 },
  { sno: 3, name: 'Tara', english: 90, maths: 35, science: 86, social: 100 },
  { sno: 4, name: 'Glen', english: 79, maths: 68, science: 77, social: 68 },
  { sno: 5, name: 'Zara', english: 80, maths: 85, science: 96, social: 68 },
];

// Copy of the original students array to apply filters and sorting
let filteredStudents = [...students];

// Function to render the table with student data
function renderTable(data) {
  const tableBody = document.getElementById('studentTable');  // Table body element to display data
  tableBody.innerHTML = '';  // Clear any existing content
  data.forEach(student => {
    const row = `
      <tr>
        <td>${student.sno}</td>
        <td>${student.name}</td>
        <td>${student.english}</td>
        <td>${student.maths}</td>
        <td>${student.science}</td>
        <td>${student.social}</td>
      </tr>`;
    tableBody.innerHTML += row;  // Append a new row for each student
  });
}

// Sorting order for columns (ascending or descending)
let sortOrder = { sno: 'asc', name: 'asc', english: 'asc', maths: 'asc', science: 'asc', social: 'asc' };

// Function to sort the table based on the selected column
function sortTable(column) {
  const arrow = document.querySelector(`#${column}Header .arrow`);  // Get the arrow icon for the column
  const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';  // Toggle the sorting order

  sortOrder[column] = order;  // Update the sorting order

  // Sort the students based on the selected column and order
  filteredStudents.sort((a, b) => {
    if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
    if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  renderTable(filteredStudents);  // Render the sorted table

  // Remove the sorting arrows from other columns and apply the active class to the current column
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.classList.remove('arrow-up', 'arrow-down', 'active');
  });
  arrow.classList.add('active', order === 'asc' ? 'arrow-up' : 'arrow-down');
}

// Event listener for the filter button
document.getElementById('filterBtn').addEventListener('click', () => {
  const subject = document.getElementById('subject').value;  // Selected subject for filtering
  const filterType = document.querySelector('input[name="filterType"]:checked')?.value;  // Selected filter type (above, below, between)
  const value1 = parseFloat(document.getElementById('value1').value);  // First value for filtering
  const value2 = parseFloat(document.getElementById('value2').value);  // Second value for "between" filter

  // Show an error modal if inputs are invalid
  if (!subject || !filterType || isNaN(value1)) {
    document.getElementById('errorModal').style.display = 'flex';
    return;
  }

  // Filter students based on the selected subject and filter type
  filteredStudents = students.filter(student => {
    const score = student[subject];
    if (filterType === 'above') return score > value1;
    if (filterType === 'below') return score < value1;
    if (filterType === 'between') return score >= value1 && score <= value2;
  });

  renderTable(filteredStudents);  // Render the filtered table
});

// Event listener for the clear button
document.getElementById('clearBtn').addEventListener('click', () => {
  filteredStudents = [...students];  // Reset the filtered students to the original array
  document.getElementById('value1').value = '';  // Clear the input fields
  document.getElementById('value2').value = '';
  document.querySelector('input[name="filterType"]:checked').checked = false;  // Uncheck the filter type
  renderTable(filteredStudents);  // Render the table with all students
});

// Event listener to toggle the display of the second input field for the "between" filter
document.querySelectorAll('input[name="filterType"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.getElementById('value2').style.display = e.target.value === 'between' ? 'block' : 'none';
  });
});

// Event listener to close the error modal
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('errorModal').style.display = 'none';
});

// Initial rendering of the table with all students
renderTable(students);

// Hide the error modal initially
document.getElementById('errorModal').style.display = 'none';
