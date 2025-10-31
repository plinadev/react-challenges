# React Challenges

A small app where users can create personal challenges and track their progress — marking each challenge as **accomplished or **failed**.

## 🚀 Features

- Create new challenges with a title and optional description
- Mark a challenge as **Accomplished** or **Failed**
- View lists of active, accomplished, and failed challenges
- Simple, responsive UI built with React

## 🧰 Tech Stack

- React (v19)
- Vite (or your preferred React build tool)
- Local state (or a lightweight store like Zustand / Context API)
- CSS Modules / Tailwind (optional)

## 📦 Installation

```bash
git clone https://github.com/plinadev/react-challenges.git
cd react-challenges
npm install
npm run dev
```

Open your browser at `http://localhost:5173` (or the port shown by your tooling).

## 📝 Usage

1. Open the app.
2. Create a challenge (give it a title, optional description).
3. From the challenge list:
   - Click **Accomplished** to mark it as completed.
   - Click **Failed** to mark it as failed.
   - Edit or delete a challenge as needed.
4. Filter or view lists by status (Active / Accomplished / Failed).

## 📁 Project Structure (example)

```
react-challenges/
├── src/
│   ├── components/     # ChallengeList, ChallengeItem, NewChallengeForm
│   ├── pages/          # Main app pages / routes
│   ├── store/          # Optional: state management
│   ├── styles/         # CSS or Tailwind config
│   └── main.jsx
├── index.html
└── package.json
```

## 🛠 Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build

