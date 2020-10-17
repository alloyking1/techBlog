<template>
    <!-- Sidebar-->
    <div class="cs-sidebar col-lg-3 pt-lg-5">
        <div class="cs-offcanvas-collapse cs-offcanvas-right" id="blog-sidebar">
        <div class="cs-offcanvas-cap navbar-box-shadow px-4 mb-3">
            <h5 class="mt-1 mb-0">Sidebar</h5>
            <button class="close lead" type="button" data-toggle="offcanvas" data-offcanvas-id="blog-sidebar"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="cs-offcanvas-body px-4 pt-3 pt-lg-0 pr-lg-0 pl-lg-2 pl-xl-4" data-simplebar>
            <!-- Search-->
            <div class="cs-widget mb-5">
            <h3 class="cs-widget-title">Search blog</h3>
            <div class="input-group-overlay">
                <div class="input-group-prepend-overlay"><span class="input-group-text"><i class="fe-search"></i></span></div>
                <input class="form-control prepended-form-control" type="text" placeholder="Search">
            </div>
            </div>
            <!-- Categories-->
            <div class="cs-widget cs-widget-categories mb-5">
            <h3 class="cs-widget-title">Categories</h3>
            <ul>
                <li><a class="cs-widget-link" href="#">Digital design<small class="text-muted pl-1 ml-2">23</small></a></li>
                <li><a class="cs-widget-link" href="#">Brand strategy<small class="text-muted pl-1 ml-2">14</small></a></li>
                <li><a class="cs-widget-link" href="#">Project management<small class="text-muted pl-1 ml-2">7</small></a></li>
                <li><a class="cs-widget-link" href="#">Business<small class="text-muted pl-1 ml-2">19</small></a></li>
                <li><a class="cs-widget-link" href="#">Technology<small class="text-muted pl-1 ml-2">35</small></a></li>
                <li><a class="cs-widget-link" href="#">Travel &amp; Vacation<small class="text-muted pl-1 ml-2">28</small></a></li>
            </ul>
            </div>
            <!-- Featured posts-->
            <div class="cs-widget mt-n1 mb-5">
            <h3 class="cs-widget-title pb-1">Trending posts</h3>
            <div class="media align-items-center pb-1 mb-3"><a class="d-block" href="#"><img class="rounded" width="64" src="img/blog/th01.jpg" alt="Post"/></a>
                <div class="media-body pl-2 ml-1">
                <h4 class="font-size-md nav-heading mb-1"><a class="font-weight-medium" href="#">Virtual Reality - game changing technology</a></h4>
                <p class="font-size-xs text-muted mb-0">by John Doe</p>
                </div>
            </div>
            <div class="media align-items-center pb-1 mb-3"><a class="d-block" href="#"><img class="rounded" width="64" src="img/blog/th02.jpg" alt="Post"/></a>
                <div class="media-body pl-2 ml-1">
                <h4 class="font-size-md nav-heading mb-1"><a class="font-weight-medium" href="#">New trends in suburban fashion</a></h4>
                <p class="font-size-xs text-muted mb-0">by Susan Mayer</p>
                </div>
            </div>
            <div class="media align-items-center"><a class="d-block" href="#"><img class="rounded" width="64" src="img/blog/th03.jpg" alt="Post"/></a>
                <div class="media-body pl-2 ml-1">
                <h4 class="font-size-md nav-heading mb-1"><a class="font-weight-medium" href="#">Millenials is the top market for companies</a></h4>
                <p class="font-size-xs text-muted mb-0">by Daniel Adams</p>
                </div>
            </div>
            </div>
            <!-- Tag cloud-->
            <div class="cs-widget mb-5">
            <h3 class="cs-widget-title pb-1">Popular tags</h3><a class="cs-tag mr-2 mb-2" href="#">#business</a><a class="cs-tag mr-2 mb-2" href="#">#online shopping</a><a class="cs-tag mr-2 mb-2" href="#">#gadgets</a><a class="cs-tag mr-2 mb-2" href="#">#travel</a><a class="cs-tag mr-2 mb-2" href="#">#brands</a><a class="cs-tag mr-2 mb-2" href="#">#personal finance</a><a class="cs-tag mb-2" href="#">#around news</a>
            </div>
        </div>
        </div>
    </div>
</template>