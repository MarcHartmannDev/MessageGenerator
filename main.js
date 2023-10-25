// Enter your messages in the messages array if you want to
const messages = [
  "What the heck does this thing do?",
  "Who the hell came up with this dumb idea???",
  "Another greenhorn starting his programming career.... well, ok...",
  "let's stop it here, this is ridiculous!",
  "Ha! got ya! Just spying for your own silly little projects!",
  "Just another stupid sentence.",
  "When the heck is this going to end???",
];

// Object representing the main message generator functionality
const messageGenerator = {
  _messages: [],
  // Setter for messages incl. typecheck for array
  set messages(newMessages) {
    if (Array.isArray(newMessages)) {
      this._messages = newMessages;
    } else {
      console.log(
        "Invalid Messages! Please Input an Array with your Messages!"
      );
    }
  },
  // Main feature that prints a random message from this._messages to the console
  printRandomMessage() {
    const randomIndex = Math.floor(Math.random() * this._messages.length);

    if (this._messages.length === 0) {
      console.log("No messages inserted!");
    } else {
      console.log(this._messages[randomIndex]);
    }
  },
};

// Assigning array of messages with setter method
messageGenerator.messages = messages;

// main function runnind
messageGenerator.printRandomMessage();
