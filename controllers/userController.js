import db from "../config/db.js";


// 1. GET ALL USERS
// SQL: SELECT * FROM users
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

// 2. INSERT USER
// SQL: INSERT INTO users (name, email, password) VALUES (?,?,?)
export const insertUser = (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({
        message: "User berhasil ditambahkan",
        id: result.insertId
      });
    }
  );
};

// 3. GET USER BY ID
// SQL: SELECT * FROM users WHERE id=?
export const showUser = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM users WHERE id=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });

      if (results.length === 0) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      res.json(results[0]);
    }
  );
};

// 4. UPDATE USER
// SQL: UPDATE users SET name=?, email=? WHERE id=?
export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  db.query(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      res.json({ message: "User berhasil diupdate" });
    }
  );
};

// 5. DELETE USER
// SQL: DELETE FROM users WHERE id=?
export const deleteUser = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM users WHERE id=?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      res.json({ message: "User berhasil dihapus" });
    }
  );
};
