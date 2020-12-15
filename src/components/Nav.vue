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
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>