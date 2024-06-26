import { Box } from "@mui/material";
import ChatBox from "../../components/ChatBox";
import MyChats from "../../components/MyChats";
import useTitle from "../../hooks/useTitle";

const Chat = () => {
  useTitle("Chats");
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          height={"100vh"}
          boxShadow={"rgba(0, 0, 0, 0.4) 0px 30px 90px"}
        >
          <MyChats />
          <ChatBox />
        </Box>
      </Box>
    </>
  );
};

export default Chat;
