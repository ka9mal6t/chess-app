# Chess App

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</div>

A modern browser-based chess game built with React, TypeScript, and Vite. The project includes piece movement logic, turn management, timer control, captured figures tracking, win/draw detection, and a polished game interface.

## Overview

This project is a playable chess application intended as both a functional game and a practical example of how board game logic can be modeled in TypeScript with a React UI. The application follows a class-based game model where the board, cells, and pieces are represented as domain objects, while the interface updates based on game state.

## Features

- Full 8x8 chess board with alternating colors
- Piece movement and legality checks
- Turn-based gameplay for white and black
- Captured pieces panel for both players
- Check, checkmate, and stalemate detection
- Draw and win modal notifications
- Countdown timers for both sides
- Restart game functionality
- Responsive layout for desktop browsers
- Custom chess piece visuals and polished UI accents

## Gameplay

Players take turns moving pieces according to standard chess rules. The app tracks:

- whose move it is;
- which pieces are captured;
- the active state of the timer;
- whether the game has ended due to checkmate or draw conditions.

When a player wins or the game ends in a draw, a modal appears and the timers stop.

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules / custom CSS
- ESLint

## Project Structure

```text
chess-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── black-bishop.png
│   │   ├── black-king.png
│   │   ├── black-knight.png
│   │   ├── black-pawn.png
│   │   ├── black-queen.png
│   │   ├── black-rook.png
│   │   ├── white-bishop.png
│   │   ├── white-king.png
│   │   ├── white-knight.png
│   │   ├── white-pawn.png
│   │   ├── white-queen.png
│   │   └── white-rook.png
│   ├── components/
│   │   ├── BoardComponent.tsx
│   │   ├── CellComponent.tsx
│   │   ├── LostFigures.tsx
│   │   └── Timer.tsx
│   ├── modal/
│   │   ├── ChooseFigureComponent.tsx
│   │   └── MessageComponent.tsx
│   ├── models/
│   │   ├── Board.ts
│   │   ├── Cell.ts
│   │   ├── Colors.ts
│   │   ├── Player.ts
│   │   └── figures/
│   │       ├── Bishop.ts
│   │       ├── Figure.ts
│   │       ├── King.ts
│   │       ├── Knight.ts
│   │       ├── Pawn.ts
│   │       ├── Queen.ts
│   │       └── Rook.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Architecture Notes

The application separates the chess rules from presentation logic:

- `Board` manages the board state and checks for win/draw conditions.
- `Cell` represents an individual square and is responsible for figure occupancy and movement context.
- `Figure` defines common movement behavior shared by all chess pieces.
- `Timer` manages both players' countdown clocks and game timeout logic.
- `BoardComponent` orchestrates interactions between the board, selected pieces, and end-of-game rules.
- `App.tsx` acts as the root application container and handles the main game state.

This structure keeps the logic easy to understand and extend if you want to add more advanced chess rules later.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development mode

```bash
npm run dev
```

Then open the local Vite URL in your browser, usually:

```text
http://localhost:5173/
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build locally

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start development server
npm run build    # compile TypeScript and build the app
npm run preview  # preview production build locally
npm run lint     # run ESLint checks
```

## How to Play

1. Choose a piece by clicking on it.
2. Available legal moves are highlighted.
3. Click a highlighted destination square to move the figure.
4. The turn changes automatically after a valid move.
5. Monitor the timers in the top of the play area.
6. When a player is checkmated or time runs out, the game ends and a result is shown.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contribution

Contributions are welcome. If you want to improve the gameplay, add features, or enhance the UI, feel free to fork the repository and submit a pull request.

## Future Improvements

Possible enhancements for this project include:

- legal chess validation improvements;
- move history panel;
- sound effects;
- drag-and-drop interaction;
- AI opponent;
- online multiplayer support;
- better animations and board styling.

## Author

This project is a personal or educational chess game built with React and TypeScript for learning, experimentation, and gameplay demonstration.
