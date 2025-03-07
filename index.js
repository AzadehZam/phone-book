class PhoneBook {
    constructor() {
        this.contacts = [];
    }

    // Add a new contact
    addContact(name, phone, email = "") {
        this.contacts.push({ name, phone, email });
    }

    // Update an existing contact
    updateContact(oldName, newName, newPhone, newEmail) {
        const contact = this.contacts.find(contact => contact.name === oldName);
        if (contact) {
            contact.name = newName;
            contact.phone = newPhone;
            contact.email = newEmail;
        } else {
            console.log("Contact not found.");
        }
    }

    // Delete a contact
    deleteContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
    }

    // Sort contacts by a given key (name, phone, or email)
    sortContacts(by = "name") {
        this.contacts.sort((a, b) => a[by].localeCompare(b[by]));
    }

    // Display all contacts
    displayContacts() {
        console.table(this.contacts);
    }
}

// Example usage:
const myPhoneBook = new PhoneBook();
myPhoneBook.addContact("Bob", "987-654-3210", "d-bob@example.com");
myPhoneBook.addContact("Alice", "123-456-7890", "alice@example.com");
myPhoneBook.addContact("Charlie", "555-555-5555", "charlie@example.com");

console.log("Before Sorting:");
myPhoneBook.displayContacts();

// Sorting by name
myPhoneBook.sortContacts("name");
console.log("After Sorting by Name:");
myPhoneBook.displayContacts();

// Sorting by email
myPhoneBook.sortContacts("email");
console.log("After Sorting by Email:");
myPhoneBook.displayContacts();

// Updating a contact
myPhoneBook.updateContact("Alice", "Alicia", "111-222-3333", "alicia@example.com");
console.log("After Updating Alice:");
myPhoneBook.displayContacts();

// Deleting a contact
myPhoneBook.deleteContact("Bob");
console.log("After Deleting Bob:");
myPhoneBook.displayContacts();