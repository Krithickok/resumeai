document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== "") {
        // Display the user's message
        const userMessage = document.createElement('p');
        userMessage.className = 'user';
        userMessage.textContent = userInput;
        document.getElementById('chatbox-messages').appendChild(userMessage);

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Simulate a bot response after a short delay
        setTimeout(() => {
            const botMessage = document.createElement('p');
            botMessage.className = 'bot';
            botMessage.textContent = getBotResponse(userInput);
            document.getElementById('chatbox-messages').appendChild(botMessage);

            // Scroll to the bottom of the chatbox
            const chatbox = document.getElementById('chatbox-messages');
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000);
    }
}

// Function to generate bot responses (can be customized)
function getBotResponse(input) {
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you': 'I’m a bot, but I’m here to help!',
        'what is your name': 'My name is Chatbot!',
        'bye': 'Goodbye! Have a great day!',
    };

    // Default response
    return responses[input.toLowerCase()] || 'Sorry, I didn’t understand that. Can you please rephrase?';
}