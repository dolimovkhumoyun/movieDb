import { socket } from "../api";

const loginReducer = (state = [], action) => {
  if (action.type === "ON_LOGIN") {
    return socket.on("err", function(data) {
      console.log(data);
      //   return [...data.message];
    });
  }

  return state;
};

export default loginReducer;
