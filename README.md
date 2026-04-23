# Rock Paper Scissors

A browser-based **Rock Paper Scissors** game built with **HTML, CSS, and JavaScript** as part of **The Odin Project** Foundations curriculum. This version revisits the original console-based game and adds a full UI to **Rock**, **Paper**, or **Scissors** using buttons, plays against a CPU opponent for **5 rounds**, and then sees the final winner with an option to restart and play again.

## About the Project

This project was completed as part of **The Odin Project – Revisiting Rock Paper Scissors** lesson, where the goal is to take a previous Rock Paper Scissors project and refactor it into a DOM-based interactive game. The assignment specifically asks students to replace prompt-based input with buttons, display results directly on the page, track the running score, and announce a winner once one side reaches 5 points. The game is played over **5 rounds total** rather than continuing until one side reaches 5 points. After the fifth round, the final score is compared, the winner message is shown, and the player can restart the game with a dedicated button. Created with:

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Flexbox**

The repository currently includes:
- `index.html`
- `logic.js`
- `css/` folder for styling assets

- Interactive Rock Paper Scissors UI
- Three button choices for player input
- CPU opponent with randomized selection
- 5-round game flow
- Live score tracking for player and CPU
- Round-by-round result feed
- Final winner screen after the game ends
- Restart button to reset scores and play again
- Flexbox-based page layout
- Button click handling using **event delegation** to avoid attaching multiple listeners

- The player clicks one of the three move buttons: **Rock**, **Paper**, or **Scissors**
- The CPU randomly selects its move from the same three options
- Each round result is added to the on-page round feed
- Scores update after every round
- After **5 rounds**, the game compares total scores and displays the final result
- The player can click **Restart** to clear the board and begin a new match

This project helped me strengthen my skills in:

- DOM manipulation with JavaScript
- Handling user interaction with click events
- Updating UI elements dynamically
- Managing game state across rounds
- Writing reusable functions for score updates and resets
- Using **event delegation** for cleaner event handling
- Structuring layouts with **Flexbox**
- Separating logic, structure, and styling across JS, HTML, and CSS

## Code Highlights

A few implementation details that stand out in this project:

- **Event delegation** is used on the button container so all three game choices are handled through a single click listener
- Score updates are abstracted into helper functions for cleaner DOM updates
- The round feed is dynamically appended to the page after each round
- The game toggles between the active game view and the winner view once the match is complete
- A restart function resets rounds, scores, and UI state for replayability

The page layout is built primarily with **Flexbox**, which is used to organize the score area, input controls, gameplay section, and winner screen. The styling also includes small screen-based adjustments using media queries, so the project reads as **desktop-first with some responsive tweaks** rather than strictly desktop-only.

Some of the main takeaways from building this project:

- Moving from console output to DOM output requires better separation of logic and presentation
- Game state becomes much easier to manage when scores, rounds, and UI updates are broken into dedicated functions
- Event delegation is a clean solution when several buttons trigger similar behavior
- Even simple browser games benefit from thoughtful UI state transitions, such as switching from the game screen to a winner screen

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/arocegue/rock-paper-scissors.git
   ```
2. Open the project folder: 
    ```bash
    cd rock-paper-scissors
    ```
3. open index.html in your browser.

## Project Context
This project was built for The Odin Project Foundations course as part of the Revisiting Rock Paper Scissors lesson. In that lesson, students are asked to build on their earlier Rock Paper Scissors logic by adding a UI, replacing prompts with buttons, showing results in the DOM, and practicing Git branching as part of the workflow.

[The Odin Project - Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors)

## Future Improvements
Possible enhancements for this project:

- Add animations or transitions for round outcomes
- Add icons or themed graphics for each move
- Track match history across multiple games
- Let the user choose the number of rounds
- Add sound effects or visual feedback for wins/losses
- Improve accessibility with keyboard support and ARIA labels
- Expand responsive behavior for a more polished mobile layout