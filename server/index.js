const express=require("express");
const pool=require("./db")
const cors=require("cors")
const app=express();

app.use(cors());
app.use(express.json());

app.post("/insertProduct", async (req, res) => {
    try {
      const { productName,productCategory,productMrp,productWeight } = req.body;
      const qry = await pool.query(
        `INSERT INTO product_details(product_name,product_catagory,mrp,weight) values($1,$2,$3,$4)`,
        [productName,productCategory,productMrp,productWeight]
      );
      res.json(qry);
    } catch (error) {
      console.log(error);
    }
  });
app.get("/product", async (req, res) => {
    try {
      const qry = await pool.query("SELECT * FROM product_details;");
      res.json(qry.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
  

app.listen(5000,()=> {
console.log("server has started on port 5000");
});