const socket = new WebSocket("ws://192.168.29.186:5000");
const mydb = mysql.connector.connect({
  host: "localhost",
  user: "root",
  password: "mahantswami1933",
  database: "rfid"
});
const mycursor = mydb.cursor();

let one_sec = new Date().getTime() + 1000;
let curr_id = "";
let prev_id = "";

socket.onopen = function() {
  console.log("Connection opened");
};

socket.onmessage = function(event) {
  curr_id = event.data;

  if (curr_id !== prev_id) {
    id = curr_id;
    console.log(id);
    const query = `insert into rfid(unique_id) values('%s')` % id;
    mycursor.execute(query);
    prev_id = curr_id;
  }
};

socket.onclose = function() {
  console.log("Connection closed");
};

setInterval(() => {
  if (new Date().getTime() >= one_sec) {
    curr_id = "";
  }
}, 1000);
