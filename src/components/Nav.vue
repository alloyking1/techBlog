<template>
  <div>
    <!-- Navbar (Solid background + shadow)-->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
      data-scroll-header
    >
      <div class="container px-0 px-xl-3">
        <button
          class="navbar-toggler ml-n2 mr-2"
          type="button"
          data-toggle="offcanvas"
          data-offcanvas-id="primaryMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link
          to="/"
          class="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4"
        >
          <img
            class="d-none d-lg-block"
            width="153"
            src="img/logo/logo-dark.png"
            alt="TalkBox"
          />
          <img
            class="d-lg-none"
            width="58"
            src="img/logo/logo-icon.png"
            alt="Around"
          />
        </router-link>
        <div class="d-flex align-items-center order-lg-3 ml-lg-auto">
          <a
            class="nav-link-style font-size-sm text-nowrap"
            href="#modal-signin"
            data-toggle="modal"
            data-view="#modal-signin-view"
            ><i class="fe-user font-size-xl mr-2"></i>Sign in</a
          ><a
            class="btn btn-primary ml-grid-gutter d-none d-lg-inline-block"
            href="#modal-signin"
            data-toggle="modal"
            data-view="#modal-signup-view"
            >Join our community</a
          >
        </div>
        <div class="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
          <div class="cs-offcanvas-cap navbar-box-shadow">
            <h5 class="mt-1 mb-0">Menu</h5>
            <button
              class="close lead"
              type="button"
              data-toggle="offcanvas"
              data-offcanvas-id="primaryMenu"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="cs-offcanvas-body">
            <!-- Menu-->
            <ul class="navbar-nav">
              <li class="nav-item dropdown dropdown-mega">
                <router-link to="/blog" class="nav-link dropdown-toggle"
                  >Blog</router-link
                >
              </li>
              <li class="nav-item dropdown dropdown-mega">
                <router-link to="/podcast" class="nav-link dropdown-toggle"
                  >Podcast</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" class="nav-link dropdown-toggle"
                  >Radio</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>