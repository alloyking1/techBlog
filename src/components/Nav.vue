<template>
  <div>
    <!-- Navbar (Solid background + shadow)-->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
      data-scroll-header
    >
      <div class="container px-0 px-xl-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand ml-lg-5 pr-lg-2 mr-lg-4">
            <img
              class="d-none d-lg-block"
              width="80"
              src="../assets/img/podcast.png"
              alt="TalkBox"
            />
          </router-link>
          <div class="d-flex align-items-center order-lg-3 ml-lg-auto">
            <a
              class="nav-link-style font-size-sm text-nowrap"
              href="#modal-signin"
              data-toggle="modal"
              data-view="#modal-signin-view"
              ><i class="fe-user font-size-xl mr-2"></i>Sign in
            </a>
            <a
              class="btn btn-primary ml-grid-gutter d-none d-lg-inline-block"
              href="#modal-signin"
              data-toggle="modal"
              data-view="#modal-signup-view"
              >Join our community</a
            >
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/blog" class="nav-link">Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/podcast" class="nav-link"
                  >Podcast</router-link
                >
              </li>
              <li class="nav-item" @click="openForm()">
                <router-link to="#" class="nav-link">Radio</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>