const Header = () => {
  return `
  <div class="container">
  <header>
      <nav>
          <ul style="display: flex; background-color: bisque; padding: 20px 0;">
              <li style="list-style: none; margin-right: 20px;"><a href="/products">Home</a></li>
              <li style="list-style: none; margin-right: 20px;"><a href="/products">Products</a></li>
              <li style="list-style: none; margin-right: 20px;"> <a href="/signin">Sign In</a></li>
              <li style="list-style: none; margin-right: 20px;"><a href="/signup">Sign Up</a></li>
          </ul>
      </nav>
  </header>
</div> `;
};

export default Header;
