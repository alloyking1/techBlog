<template>
  <div>
    <div class="d-md-flex justify-content-between align-items-center pt-3 pb-2">
      <div class="d-flex justify-content-center align-items-center mb-4">
        <label class="pr-1 mr-2">Show</label>
        <select class="form-control custom-select mr-2" style="width: 5rem">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <div class="font-size-sm text-nowrap pl-1 mb-1">posts per page</div>
      </div>
      <nav class="mb-4" aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous"
              ><i class="fe-chevron-left"></i
            ></a>
          </li>
          <li class="page-item d-sm-none">
            <span class="page-link page-link-static">2 / 10</span>
          </li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active d-none d-sm-block" aria-current="page">
            <span class="page-link"
              >2<span class="sr-only">(current)</span></span
            >
          </li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item d-none d-sm-block">...</li>
          <li class="page-item d-none d-sm-block">
            <a class="page-link" href="#">10</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next"
              ><i class="fe-chevron-right"></i
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>