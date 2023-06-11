import Header from "../components/Header";

const SignIn = () => {
  return `
  ${Header()}
  <div class="container">
  <h1>Sign In</h1>

  <form  id="form">
      <div class="mb-3"><input type="text" name="name" id="name" placeholder="Name User" class="form-control"></div>
      <div class="mb-3"><input type="number" name="Pass" id="Pass" placeholder="Pass" class="form-control"></div>
      <div class="mb-3"><button type="submit" class="btn btn-primary">Submit</button></div>
  </form>
</div>`;
};

export default SignIn;
