
import React, { useState, useEffect } from "react";
import { sampleChats } from "../data/users";
import { loadData, saveData } from "../utils";

function Messages({ currentUser }) {
  const [chats, setChats] = useState(() => loadData("chats", sampleChats));
  const [selectedId, setSelectedId] = useState(
    window.innerWidth < 768 ? null : 1
  );
  const [text, setText] = useState("");

  useEffect(() => {
    saveData("chats", chats);
  }, [chats]);

  let selected = chats.find((c) => c.id === selectedId);

  function handleSend(e) {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    let message = {
      from: "me",
      text: text.trim()
    };

    let updatedChats = chats.map((c) => {
      if (c.id === selectedId) {
        return {
          ...c,
          messages: [...c.messages, message]
        };
      } else {
        return c;
      }
    });

    setChats(updatedChats);
    setText("");
  }

  function handleChatClick(id) {
    setSelectedId(id);
  }

  function handleBack() {
    setSelectedId(null);
  }

  return (
    <div className="messages-box">

      {/* Chat list */}
      <div className={selected ? "chat-list hide-on-phone" : "chat-list"}>
        <div className="chat-list-title">
          <b>{currentUser.username}</b>
        </div>

        {chats.map((c) => {
          let lastMessage = "";

          if (c.messages.length > 0) {
            lastMessage = c.messages[c.messages.length - 1].text;
          }

          let rowClass = "user-row clickable";

          if (c.id === selectedId) {
            rowClass = "user-row clickable chat-active";
          }

          return (
            <div
              key={c.id}
              className={rowClass}
              onClick={() => handleChatClick(c.id)}
            >
              <img
                src={c.avatar}
                alt=""
                className="round-img"
                width="50"
                height="50"
              />

              <div className="user-row-text">
                <b>{c.username}</b>

                <div className="gray-text small-text">
                  {lastMessage.slice(0, 30)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat window */}
      <div className={selected ? "chat-window" : "chat-window hide-on-phone"}>

        {selected ? (
          <>
            <div className="chat-top">
              <button
                className="icon-btn back-btn"
                onClick={handleBack}
              >
                <i className="bi bi-arrow-left"></i>
              </button>

              <img
                src={selected.avatar}
                alt=""
                className="round-img"
                width="32"
                height="32"
              />

              <b>{selected.username}</b>
            </div>

            {/* Display messages */}
            <div className="chat-messages">
              {selected.messages.map((m, i) => {
                let bubbleClass = "bubble";

                if (m.from === "me") {
                  bubbleClass = "bubble mine";
                }

                return (
                  <div key={i} className={bubbleClass}>
                    {m.text}
                  </div>
                );
              })}
            </div>

            {/* Send a message */}
            <form className="chat-form" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button type="submit" className="blue-text-btn">
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="chat-empty">
            <i className="bi bi-send"></i>
            <h5>Your messages</h5>
            <p className="gray-text">
              Choose a chat to start messaging.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Messages;
