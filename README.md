# Phone Book Application

## Description
This is a simple Phone Book application implemented in JavaScript. It allows users to add, update, delete, and sort contacts based on different criteria such as name, phone number, or email.

## Features
- Add new contacts with name, phone number, and email.
- Update existing contacts.
- Delete contacts from the phone book.
- Sort contacts by name, phone number, or email.
- Display all contacts in a tabular format.

## Installation and Usage

### Prerequisites
- Ensure that you have [Node.js](https://nodejs.org/) installed on your system.

### Running the Application
1. Clone this repository or copy the source code.
```sh
 git clone https://github.com/yourusername/phone-book.git
```
2. Navigate to the project folder.
```sh
 cd phone-book
```
3. Create a JavaScript file and include the `PhoneBook` class.
4. Run the script using Node.js.
```sh
 node phonebook.js
```

## Example Usage
```js
const myPhoneBook = new PhoneBook();
myPhoneBook.addContact("Alice", "123-456-7890", "alice@example.com");
myPhoneBook.addContact("Bob", "987-654-3210", "bob@example.com");
myPhoneBook.displayContacts();
myPhoneBook.sortContacts("name");
myPhoneBook.displayContacts();
myPhoneBook.updateContact("Alice", "Alicia", "111-222-3333", "alicia@example.com");
myPhoneBook.deleteContact("Bob");
myPhoneBook.displayContacts();
```

## License
This project is licensed under the MIT License.

## Author
- **Azadeh Zamanipour** - Developer

