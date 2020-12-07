<template>
  <div>
    <!-- Comments-->
    <div class="pb-4 mb-5" id="comments">
      <h2 class="h3 pb-4">3 Comments</h2>
      <div class="cs-comment">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat cumque nihil impedit quo minus. Duis
          aute irure dolor in reprehenderit in voluptate.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="media media-ie-fix align-items-center">
            <img
              class="rounded-circle"
              width="42"
              src="img/blog/comments/01.jpg"
              alt="Barbara Palson"
            />
            <div class="media-body pl-2 ml-1">
              <h4 class="font-size-sm mb-0">Barbara Palson</h4>
              <span class="font-size-xs text-muted">3 days ago</span>
            </div>
          </div>
          <a class="btn btn-outline-primary btn-sm" href="#"
            ><i class="fe-corner-up-left font-size-base mr-2 ml-n1"></i>Reply</a
          >
        </div>
        <div class="cs-comment">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat cumque nihil impedit quo minus. Duis
            aute irure dolor in reprehenderit in voluptate.
          </p>
          <div class="media align-items-center">
            <img
              class="rounded-circle"
              width="42"
              src="img/blog/comments/02.jpg"
              alt="Daniel Adams"
            />
            <div class="media-body pl-2 ml-1">
              <h4 class="font-size-sm mb-0">Daniel Adams</h4>
              <span class="font-size-xs text-muted">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cs-comment">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="media media-ie-fix align-items-center">
            <img
              class="rounded-circle"
              width="42"
              src="img/blog/comments/03.jpg"
              alt="Tim Brooks"
            />
            <div class="media-body pl-2 ml-1">
              <h4 class="font-size-sm mb-0">Tim Brooks</h4>
              <span class="font-size-xs text-muted">1 week ago</span>
            </div>
          </div>
          <a class="btn btn-outline-primary btn-sm" href="#"
            ><i class="fe-corner-up-left font-size-base mr-2 ml-n1"></i>Reply</a
          >
        </div>
      </div>
      <a
        class="btn btn-translucent-primary btn-block"
        href="#comment-form"
        data-toggle="collapse"
        >Join the conversation</a
      >
      <!-- Comment form-->
      <div class="collapse" id="comment-form">
        <form
          class="needs-validation bg-light rounded-lg box-shadow p-4 p-lg-5 mt-4"
          novalidate
        >
          <div class="row">
            <div class="col-sm-6 form-group">
              <label class="form-label" for="com-name"
                >Your name<sup class="text-danger ml-1">*</sup></label
              >
              <input
                class="form-control"
                type="text"
                id="com-name"
                placeholder="Enter your name"
                required
              />
              <div class="invalid-feedback">Please enter your name.</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-sm-6 form-group">
              <label class="form-label" for="com-email"
                >Email address<sup class="text-danger ml-1">*</sup></label
              >
              <input
                class="form-control"
                type="email"
                id="com-email"
                placeholder="Enter your email"
                required
              />
              <div class="invalid-feedback">
                Please provide a vild email address.
              </div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="com-text"
              >Comment<sup class="text-danger ml-1">*</sup></label
            >
            <textarea
              class="form-control"
              id="com-text"
              rows="6"
              placeholder="Write your comment here"
              required
            ></textarea>
            <div class="invalid-feedback">Please write your comment.</div>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <button class="btn btn-primary" type="submit">Post comment</button>
        </form>
      </div>
    </div>
  </div>
</template>