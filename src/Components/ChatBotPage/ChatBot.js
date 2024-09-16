import React, {useState} from 'react';
import './ChatBot.css';

function ChatBot(){
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            message: "Hello I am ChatGPT",
            sender: "ChatGPT"
        }
    ]);

    const handleChange = (event)=>{
        setInput(event.target.value)
    }

    const handleSend = async (event)=>{
        event.preventDefault()
        const newMessage = {
            message: input,
            sender: "user"
        }

        const newMessages = [...messages,newMessage];

        setMessages(newMessages);

        setInput('');

        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages) {
        const API_KEY = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Replace with a valid key
        let apiMessages = chatMessages.map((messageObject) => {
            let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role: role, content: messageObject.message };
        });
    
        const systemMessage = {
            role: "system",
            content: "Explain all concepts like I'm 10 years old",
        };
    
        const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [systemMessage, ...apiMessages],
        };
    
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiRequestBody),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setMessages([
                ...chatMessages,
                {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT",
                },
            ]);
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("There was an issue communicating with ChatGPT.");
        }
    }
    

    return (
        <div className="container">
			<div className="response-area">
                {messages.map((message, index) => {
                    return(
                        <div className={message.sender==="ChatGPT" ? 'gpt-message message' : 'user-message message'}>{message.message}</div>
                    );
                })}
            </div>
			<div className="prompt-area">
				<input type="text" placeholder="Send a message..." value={input} onChange={handleChange}/>
				<button className="submit" type="submit" onClick={handleSend}>Send</button>
			</div>
		</div>
    );
}

export default ChatBot;