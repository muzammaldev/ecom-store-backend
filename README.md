
# E-Commerce Product API README.md

# **E-Commerce Product API**

A simple Node.js API for managing products in an e-commerce platform. This project uses **Express**, **MongoDB**, and **Mongoose**.


## **Features**

- Create a new product
- Get all products
- Get a single product by ID
- Organized folder structure for scalability
- JWT-based authentication and CORS support
- Environment-based configuration


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

5. **API will be running at** \`http://localhost:8080\`