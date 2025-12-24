import db from "../config/db.js";


// 1. GET ALL CATEGORIES
// SQL: SELECT * FROM categories
export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};


// 2. CREATE CATEGORY
// SQL: INSERT INTO categories (name) VALUES (?)
export const createCategory = (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({
        message: "Category berhasil ditambahkan",
        id: result.insertId
      });
    }
  );
};
// 3. GET CATEGORY BY ID
// SQL: SELECT * FROM categories WHERE id=?
export const getCategoryById = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM categories WHERE id=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });

      if (results.length === 0) {
        return res.status(404).json({ message: "Category tidak ditemukan" });
      }

      res.json(results[0]);
    }
  );
};
// 4. UPDATE CATEGORY
// SQL: UPDATE categories SET name=? WHERE id=?
export const updateCategory = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  db.query(
    "UPDATE categories SET name=? WHERE id=?",
    [name, id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Category tidak ditemukan" });
      }

      res.json({ message: "Category berhasil diupdate" });
    }
  );
};
// 5. DELETE CATEGORY
// SQL: DELETE FROM categories WHERE id=?
export const deleteCategory = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM categories WHERE id=?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Category tidak ditemukan" });
      }

      res.json({ message: "Category berhasil dihapus" });
    }
  );
};
