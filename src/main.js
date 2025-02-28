import 'prismjs';
import 'prismjs/components/prism-javascript'; // Ensure JavaScript syntax is loaded
import 'prismjs/themes/prism.css'; // Import Prism theme
import './style.css';
import { WebContainer } from '@webcontainer/api';
import { files } from './files';

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance;

window.addEventListener('load', async () => {
  const textareaEl = document.querySelector('#codeTextArea');
  const codePreviewEl = document.querySelector('#codePreview');

  textareaEl.value = `import express from 'express';
const app = express();
const port = 3111;

app.get('/', (req, res) => {
  res.send('Welcome to a WebContainers app! 🥳');
});

app.listen(port, () => {
  console.log(\`App is live at http://localhost:\${port}\`);
});`;

  // Sync textarea with PrismJS preview
  const updatePreview = () => {
    codePreviewEl.textContent = textareaEl.value;
    Prism.highlightElement(codePreviewEl);
  };

  textareaEl.addEventListener('input', updatePreview);
  updatePreview();
});

// Modify your HTML structure
document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="editor">
      <textarea id="codeTextArea"></textarea>
    </div>
    <div class="preview">
      <pre><code id="codePreview" class="language-javascript"></code></pre>
    </div>
  </div>
`;

// document.querySelector('#app').innerHTML = `
//   <div class="container">
//     <div class="editor">
//       <textarea id="codeTextArea">I am a textarea</textarea>
//     </div>
//     <div class="preview">
//       <iframe src="loading.html"></iframe>
//     </div>
//   </div>
// `

// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
