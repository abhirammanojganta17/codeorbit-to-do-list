# To-Do List App

I built this simple, clean To-Do list web app using pure HTML, CSS, and Vanilla JavaScript. My main goal with this project was to practice DOM manipulation, state management, and local storage without relying on any external frameworks or libraries.

**Live Demo:** [Link to your live site]

## What It Does

- **Add tasks:** Type a task in the input box and click "Add task" or just press `Enter`.
- **Edit tasks inline:** If you make a mistake, click "Edit" on any task to change the text right inside the list. Press `Enter` to save or `Escape` to cancel.
- **Mark as done:** Click the checkbox next to a task to cross it off. The counter at the top updates automatically to show how many tasks are left.
- **Filter views:** Switch between **All**, **Active**, and **Completed** tabs to focus on what needs to be done.
- **Delete & Clear:** Delete single tasks or use the "Clear completed" button at the bottom to remove all finished tasks at once.
- **Saves your data:** Everything is saved in the browser's `localStorage`, so your tasks stay there even if you refresh the page or close the browser.
- **Dark mode support:** The CSS automatically switches between light and dark themes based on your system settings.

## Built With

- **HTML5** for the structure and accessibility attributes (`aria-label`, `aria-pressed`).
- **CSS3** using CSS variables for theming and Flexbox for the layout.
- **Vanilla JavaScript** for rendering the list, handling events, and syncing with `localStorage`.

## Files Included

- `index.html` - The main page structure
- `style.css` - All styles, including dark mode colors and mobile responsiveness
- `script.js` - The logic for adding, editing, filtering, and saving tasks

## How to Run It

You don't need to install anything to run this project:

1. Download or clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open the folder and double-click `index.html` to run it in your browser.