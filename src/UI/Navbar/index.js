import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.custom_color} py-md-3`}>
        <a className={`navbar-brand ${styles.a}`}>Brand</a>
        <button
          type="button"
          className={`navbar-toggler  ${styles.custom_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse1">
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse1">
          <div class="navbar-nav">
            <a href="#" className={`nav-item nav-link ${styles.a}`}>
              Home
            </a>
            <a href="#" className={`nav-item nav-link active ${styles.a}`}>
              About
            </a>
            <a href="#" className={`nav-item nav-link active ${styles.a}`}>
              Products
            </a>
          </div>
          <form class="form-inline ml-auto">
            <input
              type="text"
              class="form-control mr-sm-2"
              placeholder="Search"
            />
            <button
              type="submit"
              class={`btn btn-outline-light ${styles.btn_color}`}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
