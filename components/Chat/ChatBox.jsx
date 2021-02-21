import React from "react";
import "./ChatBox.scss";

export default function ChatBox() {
    const chatboxContainer = {
        padding: "0",
        margin: "0",
        display: "flex",
    };

    return (
        <div className="justify-content-center" style={chatboxContainer}>
            <div id="message-container"></div>
            <form id="send-container">
                <input type="text" id="message-input" />
                <button type="submit" id="send-button">
                    Send
                </button>
            </form>
        </div>
    );
}
