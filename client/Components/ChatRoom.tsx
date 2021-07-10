import React, { useEffect, useState } from "react";
import chatStyle from "../styles/chat.module.css";
import { io } from "socket.io-client";
import { GetStaticProps } from "next";

interface RoomProps {
  username: string | undefined | string[];
  roomID: string | string[] | undefined;
}

const socket = io("http://localhost:5000");

let chatkey: number = 0;
let newChats: string[];

const ChatRoom: React.FC<RoomProps> = ({ username, roomID }) => {
  const [userChat, setUserChat] = useState("");
  const [chats, setChats] = useState<string[]>([]);
  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("send-msg", userChat);
  };

  useEffect(() => {
    if (roomID) {
      socket.emit("joinRoom", roomID);

      socket.on("joinedRoom", (msg) => {
        setChats([...chats, msg]);
      });
      socket.on("recieved-msg", (newMsg) => {
        console.log(chats);
        setChats((chats) => [...chats, newMsg]);
      });
    }
  }, [roomID]);
  return (
    <div>
      <div className={chatStyle.chatContainer}>
        <h3>Chat Content</h3>
        {chats.map((chat) => (
          <div key={chatkey++}>{chat}</div>
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
