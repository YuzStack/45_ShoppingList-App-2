# Shopping List App 🛒

![Shopping List App](/shopping-list-app.png)

Shopping List is a functional utility application designed to help users manage their daily tasks and groceries with ease. This project marks a significant transition in my development journey, moving from a basic vanilla JavaScript implementation to a robust, state-managed React application styled with Tailwind CSS.

**[Live Preview](https://yuzstack-shoppinglist-app.netlify.app/)**

## 🛠️ Technical Stack

- **Frontend Library:** React.js
- **Styling:** Tailwind CSS (Utility-first CSS framework)
- **Persistence:** LocalStorage API

## 🧠 The Refactor Workflow

This project was born out of a desire to improve upon a "Vanilla JS" version I had built previously. While the original version only allowed for adding and deleting items, I utilized this React refactor to implement full CRUD (Create, Read, Update, Delete) functionality. By switching to Tailwind CSS, I was able to build a modern, responsive interface much faster and more consistently than my previous manual CSS workflows.

## ✨ Key Features

- **Full CRUD Operations:** Beyond simple addition, users can now edit existing items directly in the list, demonstrating my ability to handle "Edit Mode" state logic.
- **Persistent Data Storage:** Integrated the LocalStorage API to ensure that all list data remains saved and accessible even after a page reload or browser restart.
- **Bulk Data Management:** Added a "Clear All" feature that allows users to reset their entire list with a single action, managing global state resets effectively.
- **Interactive Feedback:** Implemented dynamic UI updates that provide immediate visual confirmation whenever an item is added, edited, or removed.
- **Modular Component Design:** Structured the app into specialized components for the form, the list, and individual items to ensure a clean and maintainable codebase.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository: `git clone https://github.com/YuzStack/45_ShoppingList-App-2.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
