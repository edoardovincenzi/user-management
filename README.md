# Exercise user management

Link project : http://user-management-blue.vercel.app/

Create a grid to render users from the JSON placeholder API (https://jsonplaceholder.typicode.com/users).

## Specifications:

:white_check_mark: Show columns: Name, Email, Phone, City, Street

:white_check_mark: Enable a column chooser to select the columns you want to see on the screen

:white_check_mark: Create a button outside the table which, if clicked, shows / hides it

### Below are 1 level activities:

:white_check_mark: Create a small form above the grid to be able to add new elements. (The form must contain as fields all those displayed as columns: Name, Email, Phone, City, Street)

:white_check_mark: Introduce a filter by name and one by city

### Optional 2nd level activities:

:white_check_mark: Create a custom toolbar and introduce a refresh button to GET the data with a debounce (optional redux-saga)

:white_check_mark: On the custom toolbar add a button that removes only the odd lines

:white_check_mark: Implement pagination to have a maximum of 5 records per view

:white_check_mark: In the data retrieve phase, the custom toolbar should be visible but the part of the columns and the rows should disappear and make a loader appear

### The following optional 3 level activities:

:white_check_mark: Enable inline editing on the line

:white_check_mark: Add a button on each record that, if clicked or dbclicked, opens a new page that presents user information displayed only on fields of a form, not inside div or span tags

## Library used:

- Redux
- Axios
- React icons
- React router DOM
- Typescript
- Tailwind
- Formik
- use-debounce

## Library test implemented ( Work in progress )

- Cypress for E2E 
