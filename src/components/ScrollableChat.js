import React, { useEffect, useRef } from "react";
import { isLastMessage, isSameSender } from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { Avatar, Tooltip, Box } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="flex-end"
      h="100%"
      overflowY="auto"
      p={2}
    >
      {messages &&
        messages.map((m, i) => {
          const isSender = m.sender._id === user._id;

          return (
            <Box
              key={m._id}
              display="flex"
              w="100%" // Important: full width for proper alignment
              alignItems="center"
              justifyContent={isSender ? "flex-end" : "flex-start"}
              mb={1}
            >
              {/* Avatar for receiver only */}
              {!isSender &&
                (isSameSender(messages, m, i, user._id) ||
                  isLastMessage(messages, i, user._id)) && (
                  <Tooltip
                    label={m.sender.name}
                    placement="bottom-start"
                    hasArrow
                  >
                    <Avatar
                      mt="7px"
                      mr={1}
                      size="sm"
                      cursor="pointer"
                      name={m.sender.name}
                      src={m.sender.pic}
                    />
                  </Tooltip>
                )}

              {/* Chat Bubble */}
              <Box
                bg={isSender ? "#DCF8C6" : "#FFFFFF"} // WhatsApp colors
                borderRadius="18px"
                px={3}
                py={2}
                maxWidth="70%"
                boxShadow="md"
                fontSize="15px"
              >
                {m.content}
              </Box>
            </Box>
          );
        })}

      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ScrollableChat;
