let userName = "";
let todos = [];

function getReply(command) {
  command = command.toLowerCase();

 if (command.startsWith("hello my name is ")) {
  let name = command.replace("hello my name is ", "");
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (userName === name) return "Nice to meet you again " + name;
  userName = name;
  return "Nice to meet you " + name;
}

  if (command === "what is my name?") {
    return userName ? "Your name is " + userName : "I don't know your name yet";
  }

  if (command.startsWith("add ") && command.endsWith(" to my todo")) {
    const task = command.slice(4, -11);
    todos.push(task);
    return task + " added to your todo";
  }

  if (command.startsWith("remove ") && command.endsWith(" from my todo")) {
    const task = command.slice(7, -14);
    const index = todos.indexOf(task);
    if (index !== -1) todos.splice(index, 1);
    return index !== -1
      ? "Removed " + task + " from your todo"
      : task + " is not in your todo";
  }

  if (command === "what is on my todo?") {
    return todos.length
      ? "You have " + todos.length + " todos - " + todos.join(" and ")
      : "Your todo list is empty";
  }

  if (command === "what day is it today?") {
    const d = new Date();
    return d.getDate() + ". of " +
           d.toLocaleString("default", { month: "long" }) +
           " " + d.getFullYear();
  }

  if (command.startsWith("what is ")) {
    try {
      return Function("return " + command.replace("what is ", ""))();
    } catch {
      return "I cannot calculate that";
    }
  }

  if (command.startsWith("set a timer for ")) {
    const minutes = parseFloat(command.replace("set a timer for ", "").replace(" minutes", ""));
    setTimeout(() => console.log("Timer done"), minutes * 60000);
    return "Timer set for " + minutes + " minutes";
  }

  return "I don't understand that command";
}


console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));