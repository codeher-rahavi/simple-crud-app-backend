import express from "express";
import Product from "../models/product.model.js";
import { getProducts, getProduct, createProducts, updateProducts, deleteProducts } from "../controllers/product.controller.js"
const router = express.Router();

//get all the products
router.get('/', getProducts);
//get single product by id
router.get("/:id", getProduct);

//create a product
router.post("/", createProducts);

//update a products contents or add anything to exsisting product
router.put("/:id", updateProducts);

//delete a particular product by id
router.delete("/:id", deleteProducts);

export default router;