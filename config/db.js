import mysql from "mysql2";

// perintah koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: process.env.DB_PASS,
    database: "practice",
});

// jalankan koneksi databasenya
db.connect((err) => {
    // jika ada error
    if (err) {
        console.error("ERROR koneksi database", err);
        return;
    }

    // jika berhasil
    console.log("MYSQL berhasil connect!");
});

export default db;