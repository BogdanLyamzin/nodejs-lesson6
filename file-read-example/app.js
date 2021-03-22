const fs = require("fs");

const contactsPath = path.join(__dirname, "./db/contacts.json");
async function readFile(path) {
    try {
        const fileData = await fs.readFile(path, "utf-8");
          // сохрани в переменуную слеве не Promise, а результат после его выполнения
        const contacts = JSON.parse(fileData);
        return contacts; // заворачивает в Промис то, что ты возвращаешь
    }
    catch (e){
        return {
            status: "error",
            message: "File not exist"
        }
    }
}


const contacts = readFile(contactsPath); // 
// contacts.then(result => console.log(result))
async function listContacts() {
  // ...твой код
  const contacts = await readFile(contactsPath);
  return console.table(contacts);
}
