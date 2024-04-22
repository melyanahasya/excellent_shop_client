import React from "react";
import "../../css/CSS.css";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

function Beranda() {
  return (
    
    <div>
      {/* <div class="preloader" id="preloader">
      <div class="preloader-inner">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div> */}
<Navbar/>
      <div class="td-search-popup" id="td-search-popup">
        <form action="index.html" class="search-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search....." />
          </div>
          <button type="submit" class="submit-btn">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div class="body-overlay" id="body-overlay"></div>

      <div
        class="banner-area banner-area-2 bg-relative"
        // style="background-image: url('./assets/img/banner/3.webp')"
        style={{
          backgroundImage:
            "url('https://images.tokopedia.net/img/KRMmCm/2022/9/12/cea70077-6a42-4701-87bc-197e1a5f3b6d.jpg')",
        }}
      >
        <div class="bg-overlay-gradient"></div>
        <div
          class="banner-bg-img"
          style={{
            backgroundImage:
              "url('https://images.tokopedia.net/img/KRMmCm/2022/9/12/cea70077-6a42-4701-87bc-197e1a5f3b6d.jpg')",
          }}
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-9">
              <div class="banner-inner">
                <h4 class="sub-title">Best it solution</h4>
                <h2 class="title">
                  Creating a better <span>IT solutions</span>
                </h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis.
                  Nunc egestas augue pellentesque
                </p>
                <div class="btn-wrap">
                  <a class="btn btn-base" href="blog.html">
                    Get Started
                  </a>
                  <a class="btn btn-black" href="contact.html">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro-area mg-top--100 bg-relative">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-intro-inner">
                <div class="thumb media">
                  <div class="media-left">
                    <i class="icomoon-gear"></i>
                  </div>
                  <div class="media-body align-self-center">
                    <h4>Flexible Solutions</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Curabitur ullamcorper ultricies nisiamng tiamns rhoncus.
                    Maecenas tempus tellus endimentum rhoncem
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-intro-inner">
                <div class="thumb media">
                  <div class="media-left">
                    <i class="icomoon-time"></i>
                  </div>
                  <div class="media-body align-self-center">
                    <h4>Flexible Solutions</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Curabitur ullamcorper ultricies nisiamng tiamns rhoncus.
                    Maecenas tempus tellus endimentum rhoncem
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-intro-inner">
                <div class="thumb media">
                  <div class="media-left">
                    <i class="icomoon-money"></i>
                  </div>
                  <div class="media-body align-self-center">
                    <h4>Flexible Solutions</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Curabitur ullamcorper ultricies nisiamng tiamns rhoncus.
                    Maecenas tempus tellus endimentum rhoncem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-area pd-top-90 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mask-bg-wrap mask-bg-img-3">
                <img
                  class="shape-image"
                  src="https://www.apple.com/v/macbook-air/s/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png"
                  alt="img"
                />
                <div class="thumb">
                  <img
                    src="https://www.apple.com/v/macbook-air/s/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="section-title px-lg-5 mb-0">
                <h5 class="sub-title left-border">About US</h5>
                <h2 class="title">We are Working world With 15+ Years</h2>
                <p class="content-strong mt-2">
                  Duis leo. Sed fringilla mauris siamet nibh. odales sagittis
                  magna. Sed consequat
                </p>
                <ul
                  class="nav nav-tabs tab-button-style mt-4"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Our Misson
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p class="content mt-4">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed imquam
                      nunullam quis ante. Etiam sit amet orci.
                    </p>
                    <div class="list-wrap mt-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <ul class="single-list-inner">
                            <li>Client happiness</li>
                            <li>World-class service</li>
                          </ul>
                        </div>
                        <div class="col-lg-6">
                          <ul class="single-list-inner">
                            <li>Client happiness</li>
                            <li>World-class service</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <p class="content mt-4">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed imquam
                      nunullam quis ante. Etiam sit amet orci.
                    </p>
                    <div class="list-wrap mt-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <ul class="single-list-inner">
                            <li>Client happiness</li>
                            <li>World-class service</li>
                          </ul>
                        </div>
                        <div class="col-lg-6">
                          <ul class="single-list-inner">
                            <li>Client happiness</li>
                            <li>World-class service</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="service-area pd-top-115 pd-bottom-90"
        style={{
          backgroundImage:
            "url('https://images.tokopedia.net/img/KRMmCm/2022/9/12/cea70077-6a42-4701-87bc-197e1a5f3b6d.jpg')",
        }}
      >
        <div class="container">
          <div class="section-title">
            <div class="row">
              <div class="col-xl-6 col-lg-7 mb-4 mb-lg-0">
                <h5 class="sub-title left-border">Our Service</h5>
                <h2 class="title">We provided world class service</h2>
                <p class="content mt-2">
                  Duis leo. Sed fringilla mauris siamet nibh. odales sagittis
                  magna. Sed consequat iamet nibh.
                </p>
              </div>
              <div class="col-xl-6 col-lg-5 align-self-center">
                <div class="btn-wrap text-md-end">
                  <a class="btn btn-base" href="service.html">
                    Discover More Service
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-layer"></i>
                </div>
                <div class="details">
                  <h3>App Development</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>App Development</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-application"></i>
                </div>
                <div class="details">
                  <h3>Web design</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>Web design</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-cloud-data"></i>
                </div>
                <div class="details">
                  <h3>It Mangement</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>It Mangement</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-megaphone"></i>
                </div>
                <div class="details">
                  <h3>Digital Marketing</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>Digital Marketing</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-lock"></i>
                </div>
                <div class="details">
                  <h3>Cloud Service</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>Cloud Service</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service-inner text-center">
                <div class="icon-box-bg">
                  <i class="icomoon-magnifiying-glass"></i>
                </div>
                <div class="details">
                  <h3>Machine learning</h3>
                  <p>
                    Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                    Maecenas tempus tellus endimentum
                  </p>
                </div>
                <div class="details-hover-wrap">
                  <div class="details-hover">
                    <h3>Machine learning</h3>
                    <p>
                      Curabitur ullamcorper ultricies nisiam tiamns rhoncus.
                      Maecenas tempus tellus endimentum
                    </p>
                    <a
                      class="btn btn-base btn-small"
                      href="service-details.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-area bg-relative pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Professional Skill</h5>
                <h2 class="title">
                  Bringing new it business solutions and ideas
                </h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque
                </p>
              </div>
              <div class="skill-progress-area mt-4">
                <div class="single-progressbar">
                  <h6>Web development</h6>
                  <div class="progress-item" id="progress-running">
                    <div class="progress-bg">
                      <div
                        id="progress"
                        class="progress-rate"
                        data-value="75"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="75">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>It solution</h6>
                  <div class="progress-item" id="progress-running-1">
                    <div class="progress-bg">
                      <div
                        id="progress-1"
                        class="progress-rate"
                        data-value="95"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="95">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>Web development</h6>
                  <div class="progress-item" id="progress-running-2">
                    <div class="progress-bg">
                      <div
                        id="progress-2"
                        class="progress-rate"
                        data-value="75"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="75">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>Data Research</h6>
                  <div class="progress-item mb-0" id="progress-running-3">
                    <div class="progress-bg">
                      <div
                        id="progress-3"
                        class="progress-rate"
                        data-value="60"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="60">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-xl-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="thumb border-radius-5 mb-4 image-hover-animate">
                    <img
                      src="https://asset.kompas.com/crops/61VuXErpqWIzcCB4M67RKzkT_Us=/0x0:1080x720/750x500/data/photo/2022/10/28/635b3513836a0.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="thumb border-radius-5 image-hover-animate mb-3 mb-md-0">
                    <img
                      src="https://asset.kompas.com/crops/61VuXErpqWIzcCB4M67RKzkT_Us=/0x0:1080x720/750x500/data/photo/2022/10/28/635b3513836a0.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="thumb border-radius-5 image-hover-animate">
                    <img
                      src="https://asset.kompas.com/crops/61VuXErpqWIzcCB4M67RKzkT_Us=/0x0:1080x720/750x500/data/photo/2022/10/28/635b3513836a0.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-area half-bg-top pd-top-115">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title style-white text-center">
                <h5 class="sub-title double-border">Work Process</h5>
                <h2 class="title">How to work it</h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="project-slider slider-control-round owl-carousel">
            <div class="item">
              <div class="single-project-inner">
                <div class="thumb">
                  <a
                    class="icon swp-readmore-arrow swp-image-popup"
                    href="assets/img/project/6.webp"
                  >
                    <i class="fas fa-search-minus"></i>
                  </a>
                  <img src="assets/img/project/6.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3>
                      <a href="project-details.html">Data solution</a>
                    </h3>
                    <p>
                      Maecenas tempus, tellus eget condi honcus sem quam semper
                      libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-project-inner">
                <div class="thumb">
                  <a
                    class="icon swp-readmore-arrow swp-image-popup"
                    href="assets/img/project/6.webp"
                  >
                    <i class="fas fa-search-minus"></i>
                  </a>
                  <img src="assets/img/project/6.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3>
                      <a href="project-details.html">It management</a>
                    </h3>
                    <p>
                      Maecenas tempus, tellus eget condi honcus sem quam semper
                      libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-project-inner">
                <div class="thumb">
                  <img src="assets/img/project/6.webp" alt="img" />
                  <a
                    class="icon swp-readmore-arrow swp-image-popup"
                    href="assets/img/project/6.webp"
                  >
                    <i class="fas fa-search-minus"></i>
                  </a>
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3>
                      <a href="project-details.html">Market research</a>
                    </h3>
                    <p>
                      Maecenas tempus, tellus eget condi honcus sem quam semper
                      libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-area pd-top-100 pd-bottom-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-xl-5 align-self-center">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Faq</h5>
                <h2 class="title">Know more about solution</h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque
                </p>
              </div>
              <div class="accordion mt-4" id="accordionExample">
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Why we are?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What we do for you?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner style-2">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      100% data security
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-4 mt-lg-0">
              <form
                class="contact-form-wrap"
                action="mail.php"
                method="post"
                id="contact-form"
              >
                <div class="consulting-contact-form mx-lg-4">
                  <h3 class="mb-3">Free consulting</h3>
                  <div class="single-input-inner style-bg">
                    <input name="name" type="text" placeholder="Full Name" />
                  </div>
                  <div class="single-input-inner style-bg">
                    <input
                      name="email"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="single-input-inner style-bg">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div class="btn-wrap pb-3">
                    <button type="submit" class="btn btn-base">
                      Submit Now
                    </button>
                  </div>
                </div>
                <p class="form-messege mb-0 mt-20 text-center"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default Beranda;
