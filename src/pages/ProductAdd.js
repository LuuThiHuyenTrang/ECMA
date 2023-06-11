import axios from "axios";
import { router, useEffect } from "../lib";
import Header from "../components/Header";

const ProductAdd = () => {
  useEffect(() => {
    document.querySelector("#form").addEventListener("submit", (e) => {
      e.preventDefault();

      const product = {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
      };

      if (product.name == "") {
        alert("Name is required");
      } else if (product.price == "") {
        alert("Price is required");
      } else if (product.price <= 0) {
        alert("Price <= 0");
      } else {
        axios.post(`http://localhost:3000/products`, product).then(() => {
          alert("Add Product to successfully");
          router.navigate("/products");
        });
      }
    });
  });
  return `
  ${Header()}
  
  <div class="container">
    <h1>Product Add</h1>

    <form  id="form">
        <div class="mb-3"><input type="text" name="name" id="name" placeholder="Name Product" class="form-control"></div>
        <div class="mb-3"><input type="number" name="price" id="price" placeholder="Price" class="form-control"></div>
        <div class="mb-3"><button type="submit" class="btn btn-primary">Submit</button></div>
    </form>
  </div>
  `;
};

export default ProductAdd;
