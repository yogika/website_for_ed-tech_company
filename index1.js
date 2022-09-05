[...document.querySelectorAll(".btn")].forEach((mov) => {
  mov.addEventListener("click", function (e) {
    console.log("Hello World");

    let course_title = e.target
      .closest(".card-body")
      .querySelector(".card-title u").textContent;

    let course_desc = e.target
      .closest(".card-body")
      .querySelector(".card-text").textContent;

    let course_time = e.target
      .closest(".card-body")
      .querySelectorAll(".btn")[0]
      .textContent.trim();

    let course_price = e.target
      .closest(".card-body")
      .querySelectorAll(".btn")[1]
      .textContent.trim();

    console.log(course_time, course_price);

    let html = `
        <div class="c1">

        <div class="c1-1">
            <h1 id="course-name">${course_title}</h1>
            <h3 id="course-desc" style="color:white">${course_desc}</h3>
        </div>
        <div class="c1-2">
            <div class="row">
                <div class="col-lg-5 col-sm-5">
                    <a href="individual-package.html" id="bu-li">
                        <h4 class="b1">Free Trial</h4>
                    </a>
                </div>
                <div class="col-lg-7 col-sm-7">
                    <h4 class="b1">${course_time}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <h4 class="b1">Course Content</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <h4 class="b1">Learn More</h4>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <a href="individual-package.html">
                        <h4 class="b1">Apply Now</h4>
                    </a>
                </div>
            </div>
            <div class="row">
                <center>
                    <div class="col-lg-4 col-sm-4">
                        <h4 class="b1" id="price">${course_price}</h4>
                    </div>
                </center>
            </div>
        </div>
    </div>
`;

    document.querySelector(".pc").innerHTML = "";
    document
      .querySelector(".course-final")
      .insertAdjacentHTML("beforeend", html);
  });
});
