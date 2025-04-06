# Custom Google Search – Front-End Project

This project is a custom front-end replica of Google Search, built entirely with **HTML**, **CSS**, and a bit of **JavaScript**. It was designed as a creative and practical way to deepen my understanding of the `<form>` element in HTML and how it integrates with external services via HTTP requests.

## 🎯 Purpose

The main objective was to simulate the user interface and behavior of Google’s search experience while focusing on:

- **Form mechanics:** Understanding how the `GET` method sends queries via the URL.
- **Accessibility practices:** Applying ARIA labels and semantic HTML.
- **Component-based design:** Separating the UI into reusable parts like the header, footer, and form area using modular CSS.
- **Responsive layout:** Ensuring the interface adapts properly across different devices using the `viewport` meta tag and CSS flexbox techniques.

## 🗂️ Structure

The application consists of three core pages:

- `index.html` – Main search page (mimics Google's homepage).
- `image.html` – Interface for performing image searches.
- `advanced.html` – Simplified version of Google's advanced search.

All pages share the same layout:

- A **header** with navigation links.
- A central **form** section for search input.
- A **footer** with project credits.

## ⚙️ Technical Details

- The form submits search queries directly to Google via:  
  `https://www.google.com/search?q=your_query`
- CSS is modular and split into:
  - `config.css`
  - `header.css`
  - `form.css`
  - `advanced_search_form`
  - `footer.css`
- JavaScript file `custom-validation.js` included for possible future improvements (like client-side validation or UI enhancements).

## 💡 Why This Matters

Although simple at first glance, this project illustrates core web development concepts:

- Understanding the raw behavior of HTML forms
- Writing semantic and accessible markup
- Organizing CSS for readability and reuse
- Building responsive and clean user interfaces without any frameworks

## 🧑‍💻 Author

**Developed by Laurence**  
Powered by Google Search (GET Method)

---

> This project is just a personal experiment to understand how HTML forms work with external search engines. It's not affiliated with or endorsed by Google.
