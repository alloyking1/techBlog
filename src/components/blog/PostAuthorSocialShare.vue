<template>
  <div>
    <!-- Post author + Sharing-->
    <div
      class="row position-relative no-gutters align-items-center border-top border-bottom mb-4"
    >
      <div class="col-md-6 py-3 pr-md-3">
        <div
          class="d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <div class="media media-ie-fix align-items-center mr-grid-gutter">
            <a class="d-block" href="#"
              ><img
                class="rounded-circle mr-1"
                width="64"
                src="img/blog/single/author.jpg"
                alt="Emma Brown"
            /></a>
            <div class="media-body pl-2">
              <h6 class="nav-heading mb-1">
                <a href="#">Emma Brown</a>
              </h6>
              <div class="text-nowrap">
                <div class="meta-link font-size-xs">
                  <i class="fe-calendar mr-1 mt-n1"></i>&nbsp;Feb 19
                </div>
                <span class="meta-divider"></span
                ><a class="meta-link font-size-xs" href="#comments" data-scroll
                  ><i class="fe-message-square mr-1"></i>&nbsp;3</a
                >
              </div>
            </div>
          </div>
          <a class="btn btn-translucent-primary btn-sm" href="#">Follow</a>
        </div>
      </div>
      <div
        class="d-none d-md-block position-absolute border-left h-100"
        style="top: 0; left: 50%; width: 1px"
      ></div>
      <div class="col-md-6 pl-md-3 py-3">
        <div
          class="d-flex align-items-center justify-content-center justify-content-md-end"
        >
          <h6 class="text-nowrap my-2 mr-3">Share post:</h6>
          <a class="social-btn sb-outline sb-facebook ml-2 my-2" href="#"
            ><i class="fe-facebook"></i></a
          ><a class="social-btn sb-outline sb-twitter ml-2 my-2" href="#"
            ><i class="fe-twitter"></i></a
          ><a class="social-btn sb-outline sb-google ml-2 my-2" href="#"
            ><i class="fe-google"></i></a
          ><a class="social-btn sb-outline sb-email ml-2 my-2" href="#"
            ><i class="fe-mail"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>