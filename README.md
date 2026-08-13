# Portfolio-mac-os

A macOS-like web desktop built with React. The app provides a desktop environment with draggable/resizable windows and several built-in apps such as GitHub viewer, Resume (PDF) viewer, Notes, CLI, Email, Calendar, and more — aiming to reproduce the look-and-feel of macOS in the browser.

This README describes the project structure, development setup, available apps/components, and how to contribute.

Table of contents
- Features
- Tech stack & key packages
- Demo / Usage
- Installation
- Development
- Build
- Project structure
- Apps / Components
- Environment & configuration
- Testing
- Contributing
- License & contact

Features
- macOS-like desktop UI with draggable and resizable windows
- Multiple built-in apps: GitHub, Resume (PDF) viewer, Notes, Terminal/CLI, Email, Calendar, File Finder
- Markdown rendering and syntax highlighting in Notes
- Copy/paste, window stacking, and basic keyboard shortcuts
- Extensible architecture for adding new apps

Tech stack & key packages
- React (function components + hooks)
- Vite (dev server & build)
- npm for package management
- Key libraries used:
  - react-rnd — draggable & resizable windows
  - react-console-emulator — in-browser CLI/terminal
  - react-markdown — rendering markdown content (Notes, README viewer)
  - react-syntax-highlighter — code block highlighting
  - other common libs: react-router (if used), axios or fetch for network

Demo / Usage
- Open the app in development mode and interact with the desktop UI.
- Click app icons to open windows, drag/resize them, and use the built-in terminal and note editor.

Screenshots

Below are example screenshots of the desktop UI:

![Dashboard](/D:/Backend/Mac-os/public/images/mac1.png)

![Apps view](/D:/Backend/Mac-os/public/images/mac2.png)

If the images do not display, ensure the files exist at D:/Backend/Mac-os/public/images/mac1.png and D:/Backend/Mac-os/public/images/mac2.png (paths are absolute).

Installation
1. Clone the repository
   git clone https://github.com/Aditya2045/Portfolio-mac-os.git
   cd Portfolio-mac-os

2. Install dependencies
   npm install

Development
- Start the dev server with hot-reload:
  npm run dev

- Typical commands (update to match your package.json scripts if different):
  - npm run dev         # start development server
  - npm run build       # create production build
  - npm run preview     # preview production build locally (vite preview)
  - npm test            # run tests (if configured)

Build
- To create an optimized production build:
  npm run build

- To preview the production build locally:
  npm run preview

Project structure (example)
- public/                Static assets (icons, pdfs, images)
- src/
  - apps/                Each built-in app (GithubViewer, ResumeViewer, Notes, Terminal, Email, Calendar)
  - components/          Reusable UI components (Window, Dock, MenuBar, Icon)
  - layout/              Desktop layout and state (window manager, z-order, app registry)
  - styles/              CSS / Tailwind / styled-components
  - utils/               Helpers (storage, API wrappers)
  - index.jsx            App entry
- package.json
- README.md

Apps / Components overview
- Window manager (Window, Draggable/Resizable behavior) — uses react-rnd for drag/resize
- Dock & MenuBar — app launcher and global controls
- Notes — markdown editor/viewer using react-markdown and syntax highlighter
- Terminal/CLI — interactive terminal using react-console-emulator
- GitHub — open a small GitHub profile/repo viewer (uses GitHub API)
- Resume viewer — open local/remote PDF resume in a window
- Email & Calendar — lightweight UI for viewing messages and events (local or mocked)

Environment & configuration
- If the project talks to external APIs (e.g., GitHub), place keys or config in an .env file. Example env variables:
  - VITE_GITHUB_TOKEN=your_token_here

- Do NOT commit secrets to the repository. Add .env to .gitignore.

Testing
- If tests are configured, run:
  npm test

- Consider adding unit tests for core components (Window manager, Dock, and app integration tests).

Deployment
- Build the project (npm run build) and deploy the contents of the dist/ folder to any static host: Netlify, Vercel, GitHub Pages, or a static file server.

Contributing
- Contributions are welcome. Suggested workflow:
  1. Fork the repository
  2. Create a branch: git checkout -b feat/your-feature
  3. Make changes and add tests where appropriate
  4. Open a pull request describing the changes

- Code style: follow existing project conventions (ESLint/Prettier if configured).

Troubleshooting
- If windows or drag behavior break, check the React StrictMode effects and ensure react-rnd is provided stable keys for tracking state.
- Missing images or PDFs: ensure files are placed in public/ and paths referenced relative to public.

License
- This project is provided under the MIT License by default. Update LICENSE file or this section if a different license is required.

Contact
- For questions or bug reports, open an issue on the repository or contact the maintainer at: aditya89sharma0@gmail.com

Notes / Next steps
- Repository URL and contact email in this README have been updated. Update other placeholders if needed.
- If you want, provide any additional docs (API reference, architecture diagrams) and they can be added here or in docs/.


