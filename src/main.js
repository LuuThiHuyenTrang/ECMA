// import 'bootstrap/dist/css/bootstrap.min.css'

import { render, router } from "./lib";
import PageNotFound from "./pages/PageNotFound";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUP";

const app = document.querySelector("#app");

router.on("/", () => render(ProductList, app));
router.on("/products", () => render(ProductList, app));
router.on("/products/add", () => render(ProductAdd, app));
router.on("/products/:id/edit", ({ data }) =>
  render(() => ProductEdit(data), app)
);
router.on("/signin", () => render(SignIn, app));
router.on("/signup", () => render(SignUP, app));

router.notFound(() => render(PageNotFound, app));

router.resolve();
