# My Ebook

A basic Vue.js application for displaying an ebook with chapters.

## Features

- Table of contents with clickable chapters
- Simple content display
- Easy to modify and add content

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Adding Content

To add your ebook content, edit the `chapters` array in `src/App.vue`. Each chapter has an `id`, `title`, and `content` (HTML string).

Example:
```javascript
const chapters = ref([
  { id: 1, title: 'My Chapter', content: '<p>Your content here.</p>' },
  // Add more chapters...
])
```

## Build for Production

```bash
npm run build
```

## Technologies Used

- Vue 3
- TypeScript
- Vite
