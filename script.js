// JACKPOT CHAMBER ENTRY
// IF player chooses 'jackpot':
//   - Clear existing choice buttons
//   - Display ancient slot machine story text
//   - Show 3 spinning symbols (slot1, slot2, slot3)
//   - Show "Pull the lever" button
// PASSWORD CHECK FUNCTION (checkPassword)
// GET user input from password field
// TRIM and convert to lowercase

// IF input equals "]":
//   - Proceed to tunnel (successful password)
// ELSE:
//   - Display sand-death curse text
//   - Show buried image
//   - Offer "Reincarnate" button
// JACKPOT PLAY FUNCTION (playJackpot)
// GET references to slot1, slot2, slot3 elements

// SELECT a random symbol combination from list of combos

// TEMPORARILY animate all 3 slots (scale up)

// AFTER 1 second:
//   - Reset slot scale
//   - Display new symbols in each slot

// IF all 3 symbols are 🏺 (win condition):
//   - Display escape narrative
//   - Show escape image
//   - Offer "Play Again" button
// ELSE:
//   - INCREMENT jackpotAttempts
//   - IF player has failed 3 times:
//       - Display burial death text
//       - Show buried image
//       - Offer "Reincarnate" button
//     ELSE:
//       - Prompt with "Try Again" button and current attempt count
// FINAL SETUP
// MAKE 'checkPassword' and 'playJackpot' available globally
// (for use in HTML inline event handlers)