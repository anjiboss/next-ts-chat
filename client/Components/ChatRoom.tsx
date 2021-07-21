import React, { useEffect, useState } from "react";
import chatStyle from "../styles/chat.module.css";
import { io } from "socket.io-client";

interface RoomProps {
  username: string | undefined | string[];
  roomID: string | string[] | undefined;
}
interface ChatInfo {
  username: string;
  msg: string;
}

const socket = io("http://localhost:5000");

let chatkey: number = 0;
let newChats: string[];
let newMsg: string;

const ChatRoom: React.FC<RoomProps> = ({ username, roomID }) => {
  const [userChat, setUserChat] = useState("");
  const [chats, setChats] = useState<ChatInfo[]>([]);
  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("send-msg", {
      username: username,
      msg: userChat,
    });
    setUserChat("");
  };

  useEffect(() => {
    if (roomID) {
      socket.emit("joinRoom", {
        username: username,
        roomID: roomID,
      });

      socket.on("joinedRoom", (msg) => {
        setChats((chats) => [...chats, { username: "bot", msg: msg }]);
      });
      socket.on("recieved-msg", (chatInfo) => {
        console.log(chats);
        setChats((chats) => [...chats, chatInfo]);
      });
    }
  }, [roomID]);
  return (
    <div>
      <div className={chatStyle.chatContainer}>
        <h3>Chat Content</h3>
        {chats.map((chat) => (
          <div
            key={chatkey++}
            className={
              chat.username === username
                ? chatStyle.sentMsg
                : chatStyle.recievedMsg
            }
          >
            {chat.msg}{" "}
            {chat.username === username ? null : ": " + chat.username}
          </div>
        ))}
      </div>

      <form className={chatStyle.inputBox} onSubmit={submitHandle}>
        <input
          type="text"
          value={userChat}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserChat(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default ChatRoom;
