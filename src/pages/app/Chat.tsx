import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import userImage from "../../assets/images/user.png";

type ChatType = "Online" | "Group" | "Previous";

const ChatData: { name: string; lastMessage: string }[] = [
  {
    name: "Shobhit",
    lastMessage: "Whats up?",
  },
  {
    name: "Mohit",
    lastMessage: "Are you there?",
  },
  {
    name: "Sonali",
    lastMessage: "I will be there in a half hours?",
  },
  {
    name: "Spider man",
    lastMessage: "I am losing my power",
  },
];

function Chat() {
  const [chatCategory, setChatCategory] = useState<ChatType>("Online");
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <div className="chat-heading">
          <div onClick={() => setChatCategory("Online")}>
            <h2>Online Member</h2>
            {chatCategory === "Online" && <hr />}
          </div>
          <div onClick={() => setChatCategory("Group")}>
            <h2>Group</h2>
            {chatCategory === "Group" && <hr />}
          </div>
          <div onClick={() => setChatCategory("Previous")}>
            <h2>Previous Chat</h2>
            {chatCategory === "Previous" && <hr />}
          </div>
        </div>
        <div className="chat-bar">
          {ChatData.map((e) => (
            <ChatMember name={e.name} lastMessage={e.lastMessage} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface IChatMemberProps {
  photo?: string;
  name: string;
  lastMessage: string;
}

function ChatMember({ name, lastMessage }: IChatMemberProps) {
  return (
    <div className="user-info">
      <img src={userImage} alt="User Avatar" />
      <div>
        <h2>{name}</h2>
        <h3>{lastMessage}</h3>
      </div>
    </div>
  );
}

export default Chat;
