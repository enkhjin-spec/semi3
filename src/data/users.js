let users = [
  {
    id: 1,
    name: "Bold",
    email: "bold@example.com",
    password: "123456"
  },
  {
    id: 2,
    name: "Saraa",
    email: "saraa@example.com",
    password: "456789"
  }
];

let nextId = 3;

export function getUsers() {
  return users;
}

export function findUserById(id) {
  return users.find(user => user.id === id);
}

export function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

export function addUser({ name, email, password }) {
  const user = {
    id: nextId++,
    name,
    email,
    password
  };

  users.push(user);
  return user;
}

export function updateUser(id, data) {
  const user = findUserById(id);

  if (!user) return null;

  Object.assign(user, data);
  return user;
}

export function removeUser(id) {
  const index = users.findIndex(user => user.id === id);

  if (index === -1) return false;

  users.splice(index, 1);
  return true;
}