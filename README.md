#!/bin/bash

# E-Commerce Product API README.md

cat << 'EOF' > README.md

# **E-Commerce Product API**

A simple Node.js API for managing products in an e-commerce platform. This project uses **Express**, **MongoDB**, and **Mongoose**.

---

## **Features**

- Create a new product
- Get all products
- Get a single product by ID
- Organized folder structure for scalability
- JWT-based authentication and CORS support
- Environment-based configuration

---

## **Folder Structure**

\`\`\`
project/
├── src/
│   ├── routes/
│   │   ├── product.routes.js
│   ├── controllers/
│   │   ├── product.controller.js
│   ├── models/
│   │   ├── product.model.js
│   ├── app.js
│   ├── db.js
├── .env
├── package.json
└── server.js
\`\`\`

---

## **Setup Instructions**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)

---

### **Installation**

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/ecommerce-product-api.git
   cd ecommerce-product-api
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Setup environment variables**
   - Create a `.env` file in the root directory and add:
     \`\`\`env
     MONGO_URI=mongodb://localhost:27017/ecommerce
     PORT=3000
     JWT_SECRET=your-secret-key
     \`\`\`

4. **Start the server**
   \`\`\`bash
   npm start
   \`\`\`

5. **API will be running at** \`http://localhost:3000\`

---

## **API Endpoints**

### **Products**

| Endpoint            | Method | Description         | Body (JSON)                                                                                                   |
|---------------------|--------|---------------------|--------------------------------------------------------------------------------------------------------------|
| `/api/products`     | GET    | Get all products    | None                                                                                                         |
| `/api/products/:id` | GET    | Get product by ID   | None                                                                                                         |
| `/api/products`     | POST   | Create a new product| \`{ "name": "Product", "description": "Description", "price": 100, "category": "Category", "stock": 10 }\`     |

---

## **Example Requests**

### **Create a Product**

- **Request**:
  \`\`\`bash
  POST /api/products
  \`\`\`
  \`\`\`json
  {
    "name": "Laptop",
    "description": "A high-performance laptop",
    "price": 1200,
    "category": "Electronics",
    "stock": 15
  }
  \`\`\`

- **Response**:
  \`\`\`json
  {
    "message": "Product created successfully",
    "product": {
      "_id": "64abe123...",
      "name": "Laptop",
      "description": "A high-performance laptop",
      "price": 1200,
      "category": "Electronics",
      "stock": 15,
      "createdAt": "2023-12-01T12:00:00.000Z",
      "updatedAt": "2023-12-01T12:00:00.000Z"
    }
  }
  \`\`\`

### **Get All Products**

- **Request**:
  \`\`\`bash
  GET /api/products
  \`\`\`

- **Response**:
  \`\`\`json
  [
    {
      "_id": "64abe123...",
      "name": "Laptop",
      "description": "A high-performance laptop",
      "price": 1200,
      "category": "Electronics",
      "stock": 15,
      "createdAt": "2023-12-01T12:00:00.000Z",
      "updatedAt": "2023-12-01T12:00:00.000Z"
    }
  ]
  \`\`\`

---

## **Technologies Used**

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: dotenv, cors

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/your-feature\`)
3. Commit your changes (\`git commit -m 'Add some feature'\`)
4. Push to the branch (\`git push origin feature/your-feature\`)
5. Open a Pull Request

---

## **Contact**

- **Author**: [Muhammad Muzammal](https://github.com/your-username)
- **Email**: your-email@example.com

EOF

echo "README.md file created successfully!"
