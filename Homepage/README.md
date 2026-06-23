# Zepto Home Screen Clone

## Project Overview

This project recreates the Zepto home screen using React, Vite, and Tailwind CSS. The objective was to build a responsive, reusable, and maintainable user interface while keeping the design close to the original application.

---

## Live Demo & Repo

- **Live Deployment:** [add your Vercel/Netlify link here]
- **Source Code:**  https://github.com/042AditiGupta/Zepto_Homepage_clone

---

## Technology Stack

- React.js
- Vite
- Tailwind CSS
- React Icons

---

## Project Structure

```
src/
├── assets/
├── Components/
│   ├── Navbar/
│   ├── Headings/
│   ├── Category/
│   └── Banner/
├── App.jsx
└── main.jsx
```

---

## Why useRef() was used

I used React's `useRef()` hook to implement horizontal scrolling in the Category section.

`useRef()` allows direct access to the DOM element without causing unnecessary re-renders.

It was used to:

- Access the category container.
- Implement smooth left and right scrolling.
- Improve performance.
- Create a user experience similar to Zepto.

Example:

```jsx
const sliderRef = useRef(null);

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};
```

---

## Why Tailwind CSS was used

Tailwind CSS was chosen because:

- Faster UI development.
- Responsive design is easier.
- Utility classes reduce CSS files.
- Better maintainability.

---

## Reusable Components

The application was divided into reusable components:

- Navbar
- Location Selector
- Search Bar
- User Actions
- Headings
- Category Section
- Category Card

This improves code readability and maintainability.

---

## Responsive Design

The application supports:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Tailwind breakpoints used:

- `sm` : 640px
- `md` : 768px
- `lg` : 1024px
- `xl` : 1280px

---

## Performance Optimizations

- Reusable components were used.
- `useRef()` was used instead of unnecessary state updates.
- Images were stored locally.
- Scrollbars were hidden for a cleaner UI.

---

## Accessibility

- Semantic HTML elements were used.
- Images include alt text.
- Buttons include hover states.

---

## Challenges Faced

- Implementing horizontal scrolling.
- Making the UI responsive.
- Managing reusable components.

---

## Improvements Over Original Design

- Cleaner component structure.
- Improved responsiveness.
- Better code organization.

---

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

Built and deployed as a static Vite build via [Vercel/Netlify]:

```bash
npm run build
```


## Performance

Implemented Intersection Observer-based lazy loading for category images to improve performance by reducing initial network requests and optimizing rendering for off-screen components.
  
# Changed the png format images to webp format 
also compressed the image 

Optimized banner images by defining explicit width and height attributes to prevent layout shifts (CLS) and improve rendering performance. Applied async decoding for smoother image rendering and reduced main thread blocking.

Optimized horizontal category slider by throttling scroll events, minimizing unnecessary state updates, and improving rendering efficiency. Enhanced UI responsiveness and performance across devices.
