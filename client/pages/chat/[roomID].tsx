import { useRouter } from "next/dist/client/router";
import React from "react";
import ChatRoom from "../../Components/ChatRoom";

const Room: React.FC = ({}) => {
  const router = useRouter();
  const { username, roomID } = router.query;
  return (
    <div>
      <ChatRoom username={username} roomID={roomID} />
    </div>
  );
};
export default Room;
