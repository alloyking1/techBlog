<template>
  <div>
    <!-- Footer-->
    <footer class="cs-footer bg-dark pt-5 pt-md-6">
      <div class="container pt-3 pt-md-0">
        <div class="row mb-4">
          <div class="col-md-7 mb-3">
            <div class="d-sm-flex justify-content-between">
              <div class="cs-widget cs-widget-light pb-1 mb-4">
                <h4 class="cs-widget-title">Have a look around</h4>
                <ul>
                  <!-- To do -->
                  <li>
                    <a
                      class="cs-widget-link"
                      target="_blank"
                      :href="this.$SlackLink"
                      >Join Our Community</a
                    >
                  </li>
                  <li>
                    <router-link to="/podcast" class="cs-widget-link"
                      >{{ this.$SiteName }} Podcast</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/radio" class="cs-widget-link"
                      >{{ this.$SiteName }} Internet Radio</router-link
                    >
                  </li>
                </ul>
              </div>

              <div class="cs-widget cs-widget-light pb-1 mb-4">
                <h4 class="cs-widget-title">Social media</h4>
                <ul>
                  <li>
                    <a
                      class="cs-widget-link"
                      target="_blank"
                      href="https://web.facebook.com/officialtekiii"
                      >Facebook</a
                    >
                  </li>
                  <li>
                    <a
                      class="cs-widget-link"
                      target="_blank"
                      href="https://twitter.com/Tekiii9"
                      >Twitter</a
                    >
                  </li>
                  <!-- <li><a class="cs-widget-link" href="#">Tumblr</a></li>
                  <li><a class="cs-widget-link" href="#">Medium</a></li>
                  <li><a class="cs-widget-link" href="#">YouTube</a></li> -->
                </ul>
              </div>
              <div class="cs-widget cs-widget-light pb-1 mb-4">
                <h4 class="cs-widget-title">Resources</h4>
                <ul>
                  <li>
                    <router-link to="/contact" class="cs-widget-link"
                      >Contacts</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/about" class="cs-widget-link"
                      >About</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/privacy" class="cs-widget-link"
                      >Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/terms" class="cs-widget-link"
                      >Terms and Condition</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 ml-auto mb-3">
            <div class="cs-widget cs-widget-light mb-4">
              <h4 class="cs-widget-title">Don’t miss a single story</h4>
              <p class="font-size-sm text-light opacity-60">
                Subscribe to our newsletter to receive latest articles to your
                inbox weekly.
              </p>
              <form
                class="cs-subscribe-form validate"
                action="#"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
              >
                <div class="input-group input-group-overlay flex-nowrap">
                  <div class="input-group-prepend-overlay">
                    <span class="input-group-text text-muted"
                      ><i class="fe-mail"></i
                    ></span>
                  </div>
                  <input
                    class="form-control prepended-form-control"
                    type="email"
                    name="EMAIL"
                    placeholder="Your email"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                ></div>
                <div class="cs-subscribe-status"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-darker py-4 py-md-3">
        <div
          class="container d-md-flex align-items-center justify-content-between pt-3"
        >
          <div class="d-flex flex-wrap align-item-center order-md-1">
            <a
              class="d-block mr-grid-gutter mb-3"
              href="index.html"
              style="width: 108px"
              ><img src="img/logo/logo-footer.png" :alt="this.$SiteName"
            /></a>
            <p class="font-size-sm pt-2 mb-3">
              <span class="text-light opacity-50 mr-1"
                >© {{ this.$SiteName }} {{ new Date().getFullYear() }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import EmailList from "../EmailList";
export default {
  components: {
    // EmailList,
  },
};
</script>