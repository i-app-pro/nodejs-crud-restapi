import db from "../config/db.js";


// 1. GET ALL PRODUCTS
// SQL: SELECT products.*, categories.name AS category_name 
// FROM products JOIN categories ON products.category_id = categories.id
export const getProducts = (req, res) => {
  db.query(
    `SELECT products.*, categories.name AS category_name
     FROM products JOIN categories ON products.category_id = categories.id`,
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(results);
    }
  );
};

// 2. CREATE PRODUCT
// SQL: INSERT INTO products (category_id, name, price) VALUES (?,?,?)
export const createProduct = (req, res) => {
  const { category_id, name, price } = req.body;

  db.query(
    "INSERT INTO products (category_id, name, price) VALUES (?,?,?)",
    [category_id, name, price],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({
        message: "Product berhasil ditambahkan",
        id: result.insertId
      });
    }
  );
};

// 3. GET PRODUCT BY ID
// SQL: SELECT * FROM products WHERE id=?
export const getProductById = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM products WHERE id=?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err.message });

      if (results.length === 0) {
        return res.status(404).json({ message: "Product tidak ditemukan" });
      }

      res.json(results[0]);
    }
  );
};

// 4. UPDATE PRODUCT
// SQL: UPDATE products SET category_id=?, name=?, price=? WHERE id=?
export const updateProduct = (req, res) => {
  const id = req.params.id;
  const { category_id, name, price } = req.body;

  db.query(
    "UPDATE products SET category_id=?, name=?, price=? WHERE id=?",
    [category_id, name, price, id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Product tidak ditemukan" });
      }

      res.json({ message: "Product berhasil diupdate" });
    }
  );
};

// 5. DELETE PRODUCT
// SQL: DELETE FROM products WHERE id=?
export const deleteProduct = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM products WHERE id=?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Product tidak ditemukan" });
      }

      res.json({ message: "Product berhasil dihapus" });
    }
  );
};
