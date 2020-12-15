<template>
  <div>
    <header
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
      data-scroll-header
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
        <router-link to="/" class="navbar-brand">
          <!-- <img
            class="d-none d-lg-block"
            width="53"
            src="../assets/img/logoTekiii.png"
            :alt="this.$SiteName"
          /> -->
          Tekiii
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/blog" class="nav-item nav-link">Blog</router-link>
            <router-link to="/podcast" class="nav-item nav-link"
              >Podcast</router-link
            >
            <a class="nav-item nav-link" href="#" @click="openForm()">Radio</a>
            <router-link to="/about" class="nav-item nav-link"
              >About</router-link
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>