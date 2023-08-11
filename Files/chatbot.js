function appendMessage(sender, message) {
  const chatbox = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.className = sender;
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}

function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() !== '') {
      appendMessage('user', userInput);

      // Process user input (You can use backend services for actual processing)
      // For this example, we'll just display a sample bot response
      setTimeout(() => {
          const botResponse = 'Thank you for your message. Your complaint has been registered.';
          appendMessage('bot', botResponse);
      }, 1000);

      document.getElementById('userInput').value = '';
  }
}

document.getElementById('userInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
});
