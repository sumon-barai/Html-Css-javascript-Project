const phoneBook = [
  {
    name: "adele",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "agnes",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "billy",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "bob",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "calvin",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "christina",
    phone: "",
    email: "",
    address: "",
  },
  {
    name: "cindy",
    phone: "",
    email: "",
    address: "",
  },
];

export function getContact(name) {
  const contacts = phoneBook.filter((contact) => {
    // check name is undefined
    if (name === undefined) {
      return true;
    }

    return contact.name.toLowerCase().includes(name.toLowerCase());
  });
  return contacts;
}
