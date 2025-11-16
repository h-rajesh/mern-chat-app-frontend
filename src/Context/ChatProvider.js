import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Load user first
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      setLoading(false);
      history.push("/");
      return;
    }

    setUser(userInfo);

    // Load chats and selected chat
    const storedChats = JSON.parse(localStorage.getItem("chats"));
    const storedSelectedChat = JSON.parse(localStorage.getItem("selectedChat"));

    if (storedChats) setChats(storedChats);
    if (storedSelectedChat) setSelectedChat(storedSelectedChat);

    setLoading(false);
  }, [history]);

  // Persist selectedChat
  const setSelectedChatAndPersist = (chat) => {
    setSelectedChat(chat);
    localStorage.setItem("selectedChat", JSON.stringify(chat));
  };

  // Persist chats
  const setChatsAndPersist = (chatList) => {
    setChats(chatList);
    localStorage.setItem("chats", JSON.stringify(chatList));
  };

  // Prevent rendering until everything is loaded
  if (loading) return null;

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat: setSelectedChatAndPersist,
        chats,
        setChats: setChatsAndPersist,
        notification,
        setNotification
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

export { ChatProvider };
