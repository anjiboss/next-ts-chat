import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [roomID, setRoomID] = useState<string>("");

  return (
    <div className={styles.container}>
      <div>
        <h4>Username:</h4>
        <input
          type="text"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </div>
      <div>
        <h4>Room:</h4>
        <input
          type="text"
          value={roomID}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRoomID(e.target.value)
          }
        />
      </div>
      <button
        onClick={() => {
          window.location.href = "/chat/" + roomID + `?username=${username}`;
        }}
      >
        Go To Chat Room
      </button>
    </div>
  );
}
