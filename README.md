# Student-Details-Filtering-and-Sorting.github.io
Interactive web app for filtering and sorting student details by subject scores. Features dynamic filtering, sortable tables, and real-time updates using JavaScript, HTML, and CSS.


## Features

1. **Dropdown for Subject Selection**
   - Select a subject (English, Maths, Science, or Social Science) from a dropdown menu.

2. **Filtering Options**
   - **Above**: Show students whose marks are greater than a specified value.
   - **Below**: Show students whose marks are less than a specified value.
   - **Between**: Show students whose marks lie between two specified values.

3. **Interactive Buttons**
   - **Filter**: Apply the selected filter.
   - **Clear**: Reset the filter and display all students.

4. **Sortable Table**
   - Sort the table by S.No, Name, or marks in any subject in ascending or descending order by clicking on column headers.

5. **Dynamic Table Updates**
    - The table updates dynamically based on the filtering and sorting criteria.

6. **Error Handling**
   - If the user does not select a subject or filter type (Above, Below, or Between), or if values for filtering are missing, an error popup will appear. The message will prompt the user to ensure all fields are filled out properly.
  
## Data

The application uses the following sample data:

| S.No | Name | English | Maths | Science | Social Science |
|------|------|---------|-------|---------|----------------|
| 1    | Bob  | 50      | 86    | 77      | 89             |
| 2    | Tanu | 75      | 96    | 67      | 91             |
| 3    | Tara | 90      | 35    | 86      | 100            |
| 4    | Glen | 79      | 68    | 77      | 68             |
| 5    | Zara | 80      | 85    | 96      | 68             |

## UI Overview

- **Subject Dropdown**: Select a subject to filter.
- **Filter Options**: Choose between "Above", "Below", and "Between" with corresponding input fields.
- **Buttons**:
  - **Filter**: Apply the filter based on selected criteria.
  - **Clear**: Reset the table.
- **Sortable Table**: Columns (S.No, Name, English, Maths, Science, Social Science) are clickable for sorting.

![image](https://github.com/user-attachments/assets/e5208326-dc05-4cc4-8949-8ee78ee4dcde)

## Implementation

The project is implemented using the following technologies:

- **HTML**: For structuring the user interface.
- **CSS**: For styling the application, including table highlights and responsive design.
- **JavaScript**: For dynamic functionalities like filtering, sorting.

  ## Usage Instructions

1. **Select Subject**: Choose a subject from the dropdown.
2. **Apply Filter**:
   - Select a filter condition (Above, Below, Between).
   - Enter the required values in the input box(es).
   - Click the "Filter" button to see results.
3. **Clear Filter**: Click the "Clear" button to reset the table.
4. **Sort Table**: Click on any column header to sort data in ascending/descending order.

## Example Scenarios

1. **Maths - Above 80**: Displays students with Maths scores greater than 80.
  ![image](https://github.com/user-attachments/assets/61cc7fb1-6285-4d43-9f58-36e00f5a2f36)

2. **Science - Between 70 and 90**: Displays students with Science scores in the range 70–90.
  ![image](https://github.com/user-attachments/assets/a30e6d19-78ad-4719-86c2-bf2a3d35197f)

3. **English - Below 80**: Displays students with English scores lesser than 80.
  ![image](https://github.com/user-attachments/assets/c758f91f-d553-41fe-bfa1-9f468789f737)

## Error Handling Example

If the user does not enter any subject or filter type (Above, Below, or Between), or if values for filtering are missed, the app will display an error popup. This will alert the user to ensure that all the necessary fields are completed before proceeding with filtering.

### Example Error Scenario:

- **Missing Subject**: If the user doesn't select any subject from the dropdown and attempts to apply the filter, an error popup will prompt them to choose a subject.
- **Missing Filter Type**: If the user does not select a filter type (Above, Below, or Between) and clicks the filter button, an error message will appear asking the user to select a filter type.
- **Missing Values**: If the user selects "Between" but does not provide both values for the range, an error will prompt the user to enter valid range values.

### Error Message Displayed:
If any required input is missing (subject, filter type, or filter values), the popup will display the following message:
![image](https://github.com/user-attachments/assets/4879917f-84cc-45e1-bb37-71d09e7c531f)





   




