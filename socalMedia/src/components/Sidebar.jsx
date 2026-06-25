import { Link } from "react-router-dom";
const SideBar =() => {

    return(
      <>
        <div className="masthead py-5 sidebar" bis_skin_checked="1">
          <nav className="nav nav-pills justify-content-center flex-lg-column justify-content-lg-start gap-1 sidebar-nav">
            <Link 
            className={"nav-link d-flex align-items-center fw-semibold"} 
            to="/" onClick={() => {
              console.log("Home clicked");
            }}>
              <svg className="bi me-2 f5 bd-text-purple"><use xlinkHref="#file-earmark-richtext"></use></svg>
              Home
            </Link>
            <Link 
            className={"nav-link d-flex align-items-center"} 
            to="/create-post" onClick={() => { console.log("create post clicked") }}>
              <svg className="bi me-2 f5 text-primary"><use xlinkHref="#archive"></use></svg>
              Create Post
            </Link>
          </nav>
        </div>
      </>
    );
}

export default SideBar;