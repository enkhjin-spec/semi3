import {
  getUsers,
  findUserById,
  findUserByEmail,
  addUser,
  updateUser,
  removeUser
} from "../data/users.js";

function safeUser(user) {
  if (!user) return null;

  const { password, ...result } = user;
  return result;
}

// GET /users
export function list(req, res) {
  const users = getUsers().map(safeUser);
  res.status(200).json(users);
}

// GET /users/:id
export function getOne(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: "Invalid user ID"
    });
  }

  const user = findUserById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  return res.status(200).json(safeUser(user));
}

// POST /users
export function create(req, res) {
  const { name, email, password } = req.body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof password !== "string" ||
    !password
  ) {
    return res.status(400).json({
      message: "Name, email and password are required"
    });
  }

  if (findUserByEmail(email.trim())) {
    return res.status(409).json({
      message: "Email already exists"
    });
  }

  const user = addUser({
    name: name.trim(),
    email: email.trim(),
    password
  });

  return res.status(201).json(safeUser(user));
}

// PATCH /users/:id
export function update(req, res) {
  const id = Number(req.params.id);
  const existingUser = findUserById(id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: "Invalid user ID"
    });
  }

  if (!existingUser) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const { name, email, password } = req.body ?? {};
  const data = {};

  if (name !== undefined) {
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Name must not be empty"
      });
    }

    data.name = name.trim();
  }

  if (email !== undefined) {
    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        message: "Email must not be empty"
      });
    }

    const normalizedEmail = email.trim();
    const otherUser = findUserByEmail(normalizedEmail);

    if (otherUser && otherUser.id !== id) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    data.email = normalizedEmail;
  }

  if (password !== undefined) {
    if (typeof password !== "string" || !password) {
      return res.status(400).json({
        message: "Password must not be empty"
      });
    }

    data.password = password;
  }

  const updatedUser = updateUser(id, data);

  return res.status(200).json(safeUser(updatedUser));
}

// DELETE /users/:id
export function remove(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      message: "Invalid user ID"
    });
  }

  const deleted = removeUser(id);

  if (!deleted) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  return res.status(204).send();
}