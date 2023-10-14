const express = require("express");
const pool = require("./db");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
const port = 3000;

app.use(bodyParser.json());

app.post("/insertProduct", async (req, res) => {
  try {
    const {
      productName,
      productCategory,
      productMrp,
      productWeight,
      createdAt,
      modifyAt,
    } = req.body;
    const qry = await pool.query(
      `INSERT INTO product_details(product_name,product_category,mrp,weight,created_at,modified_at) values($1,$2,$3,$4,$5,$6)`,
      [
        productName,
        productCategory,
        productMrp,
        productWeight,
        createdAt,
        modifyAt,
      ]
    );
    res.json(qry);
  } catch (error) {
    console.log(error);
  }
});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  saveUserData(username, password);
  res.json({ message: "User registered successfully" });
});
app.get("/product", async (req, res) => {
  try {
    const qry = await pool.query("SELECT * FROM product_details");
    res.json(qry.rows);
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM product_details WHERE product_id = $1", [id]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const qry = await pool.query(
      "SELECT * FROM product_details WHERE product_id=$1",
      [id]
    );
    res.json(qry.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/umain/${id}", async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, productCategory, productMrp, productWeight } =
      req.body;
    const qry = await pool.query(
      "update product_details set product_name=$1,product_category=$2,mrp=$3,weight=$4 where update_id =$5",
      [productName, productCategory, productMrp, productWeight, id]
    );
    res.json(qry);
  } catch (error) {
    console.log(error);
  }
});
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
