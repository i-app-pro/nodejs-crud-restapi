# Node.js CRUD REST API

Project ini adalah **REST API CRUD** menggunakan Node.js, Express.js, dan MySQL.
Pastikan file project ini sudah di download atau di clone
---

## 1. Persiapan Database

1. Buat database MySQL:

```sql
CREATE DATABASE nodejs_crud_restapi;


2. Buat tabel sesuai kebutuhan (Users, Categories, Products). Contoh:

-- Categories
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);


## 2. Konfigurasi .env

Buat file .env di root project
contoh:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=nodejs_crud_restapi

Sesuaikan dengan konfigurasi MySQL di komputer kamu.


## 3. Install Dependencies

npm install

Dependencies utama:

1. express
2. mysql2
3. dotenv
4. nodemon (untuk development)


## 4. Menjalankan Project

npm run dev

Server akan berjalan di port sesuai .env atau default 3000.
Cek di browser atau Postman:
GET http://localhost:3000/

Response:
{ "message": "REST API Node.js berjalan!" }


## 5. Testing API

1. categories

get categories (screenshot/get-categories.png)

get categories by id (screenshot/get-categories-id.png)

post categories create new (screenshot/post-categories-create.png)

put categories update by id (screenshot/put-categories-update.png)

delete categories by id (screenshot/delete-categories-id.png)


2. products

get products (screenshot/get-products.png)

get products by id (screenshot/get-products-id.png)

post products create new (screenshot/post-products-create.png)

put products update by id (screenshot/put-products-update.png)

delete products by id (screenshot/delete-products-id.png)
