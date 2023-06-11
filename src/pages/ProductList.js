import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "../lib";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then(({ data }) => setProduct(data));
  }, []);

  useEffect(() => {
    const btnDelete = document.querySelectorAll(".btn-danger");
    for (const btn of btnDelete) {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;

        const tb = window.confirm("Are your sure?");
        if (tb) {
          axios.delete(`http://localhost:3000/products/${id}`).then(() => {
            setProduct(products.filter((pro) => pro.id != id));
            alert("Product deleted successfully");
          });
        }
      });
    }
  });
  return `
  ${Header()}
  <div class="container">
  <h1>Product List</h1>
  <a href="/products/add"><button class="btn btn-primary">Add</button></a>

  <table class="table">
      <thead>
          <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Action</td>
          </tr>
      </thead>
      <tbody>
          ${products
            .map((pro, index) => {
              return `
              <tr>
                  <td>${index + 1}</td>
                  <td>${pro.name}</td>
                  <td>${pro.price}</td>
                  <td>
                      <a href="/products/${
                        pro.id
                      }/edit"><button class="btn btn-warning">Edit</button></a>
                      <button class="btn btn-danger" data-id="${
                        pro.id
                      }">Delete</button>
                  </td>
              </tr>`;
            })
            .join("")}
      </tbody>
  </table>
</div>
  `;
};

export default ProductList;
