import io from "socket.io-client";
export const socket = io.connect("http://localhost:3500/");
// export const socket = io.connect("https://react-quiz-game-sholes.herokuapp.com:3500");
