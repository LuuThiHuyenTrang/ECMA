import axios from "axios";
import { router, useEffect, useState } from "../lib";
import Header from "../components/Header";

const ProductEdit = ({ id }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => setProduct(data));
  }, []);

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
        axios.put(`http://localhost:3000/products/${id}`, product).then(() => {
          alert("Update Product to successfully");
          router.navigate("/products");
        });
      }
    });
  });
  return `
  ${Header()}
  
  <div class="container">
    <h1>Product Edit</h1>

    <form  id="form">
        <div class="mb-3"><input type="text" value="${
          product.name
        }" name="name" id="name" placeholder="Name Product" class="form-control"></div>
        <div class="mb-3"><input type="number" value="${
          product.price
        }" name="price" id="price" placeholder="Price" class="form-control"></div>
        <div class="mb-3"><button type="submit" class="btn btn-primary">Submit</button></div>
    </form>
  </div>
  `;
};
export default ProductEdit;
