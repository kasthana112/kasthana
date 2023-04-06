import React from 'react'

const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">All About Kanika</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Just Hold On We're Goin Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Look What I Can Do!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Call Me</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Home</a></li>
              <li><a class="dropdown-item" href="#">Look What I Can Do!</a></li>
              <li><a class="dropdown-item" href="#">Call Me</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar