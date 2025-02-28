import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { basicSetup } from 'codemirror'; // Correct import
import { javascript } from '@codemirror/lang-javascript';

window.addEventListener('load', () => {
  const app = document.querySelector('#app');

  // Ensure #app exists
  if (!app) {
    console.error("Error: #app container not found!");
    return;
  }

  // Create container manually
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <div class="editor" id="editor"></div>
    <div class="preview">
      <iframe src="loading.html"></iframe>
    </div>
  `;
  container.style.display = 'flex';
  container.style.flexDirection = 'row';

  // Append container to the app
  app.innerHTML = ''; // Clear existing content
  app.appendChild(container);

  console.log("✅ Container added successfully!");

  // Initialize CodeMirror 6
  new EditorView({
    state: EditorState.create({
      doc: `import express from 'express';
const app = express();
const port = 3111;

app.get('/', (req, res) => {
  res.send('Welcome to a WebContainers app! 🥳');
});

app.listen(port, () => {
  console.log(\`App is live at http://localhost:\${port}\`);
});`,
      extensions: [basicSetup, javascript()]
    }),
    parent: document.getElementById('editor')
  });
});