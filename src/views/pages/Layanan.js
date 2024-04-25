import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import "../../css/layanan.css"

function Layanan() {
  return (
    <div>
      <Navbar />
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
                <h2 class="title">Layanan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-area pd-top-115 pd-bottom-90">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-md-9">
              <div class="section-title text-center">
                <h5 class="sub-title double-border">Pricing Plan</h5>
                <h2 class="title">Let's check our latest price</h2>
                <p class="content mt-2">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-pricing-inner style-2">
                <div class="header text-center">
                  <h3>Basic plan</h3>
                  <div class="price">
                    <sup>$</sup>
                    <h2 class="d-inline-block">12</h2>
                  </div>
                </div>
                <div class="details">
                  <h4>Jaminan Kemanan</h4>
                  <p>
                    Kami menjamin setiap barang yang anda beli dari excellent
                    aman dan sudah lulus uji coba sesuai standart, kemudian jika
                    anda menggunakan jasa kami akan memberikan yang terbaik
                    untuk keamanan data dan privasi anda.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-pricing-inner style-2">
                <div class="header text-center">
                  <h3>Gold plan</h3>
                  <div class="price">
                    <sup>$</sup>
                    <h2 class="d-inline-block">59</h2>
                  </div>
                </div>
                <div class="details">
                  <h4>Jaminan Garansi</h4>
                  <p>
                    Kami memberikan jaminan garansi barang yang dibeli di
                    excellent computer semarang sesuai syarat dan ketentuan yang
                    berlaku. Dengan adanya jaminan garansi anda tidak perlu
                    susah payah untuk klaim garansi pada saat barang anda rusak.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-pricing-inner style-2">
                <div class="header text-center">
                  <h3>Platinum plan</h3>
                  <div class="price">
                    <sup>$</sup>
                    <h2 class="d-inline-block">59</h2>
                  </div>
                </div>
                <div class="details">
                  <h4>Terbaru dan Terbaik</h4>
                  <p>
                    Barang yang kami sediakan di excellent computer semarang
                    sudah lulus uji coba dan sesuai standart yang ada, dan kami
                    selalu menyediakan dengan barang terbaru dan terbaik
                    dikelasnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-area pd-top-120 pd-bottom-120">
        <div class="row justify-content-center p-3 p-lg-0">
          <div class="col-lg-5 align-self-center order-lg-first">
            <div class="section-title text-center">
              <h2 class="title mb-4">
                Your Cyber Security Is <br />
                In Your Hand Now
              </h2>
              <p>
                AI technology is perfect for best business solutions & we <br />
                offer help to achieve your goals.
              </p>
            </div>
          
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-2.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Continuous Monitoring</h5>
                  <p>
                    Continuous monitoring is the process and technology used to
                    detect compliance and risk issues associated with an
                    organization's financial and operational
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-1.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Secure By Design</h5>
                  <p>
                    Secured by Design (SBD) is the official police security
                    initiative that works to improve the security of buildings
                    and their immediate
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-2.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Continuous Monitoring</h5>
                  <p>
                    Continuous monitoring is the process and technology used to
                    detect compliance and risk issues associated with an
                    organization's financial and operational
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-1.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Secure By Design</h5>
                  <p>
                    Secured by Design (SBD) is the official police security
                    initiative that works to improve the security of buildings
                    and their immediate
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-2.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Continuous Monitoring</h5>
                  <p>
                    Continuous monitoring is the process and technology used to
                    detect compliance and risk issues associated with an
                    organization's financial and operational
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-1.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Secure By Design</h5>
                  <p>
                    Secured by Design (SBD) is the official police security
                    initiative that works to improve the security of buildings
                    and their immediate
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-2.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Continuous Monitoring</h5>
                  <p>
                    Continuous monitoring is the process and technology used to
                    detect compliance and risk issues associated with an
                    organization's financial and operational
                  </p>
                </div>
              </div>
              <div class="single-security-wrap text-center">
                <div class="thumb">
                  <img
                    src="assets/img/home-cyber/about/icon-2.webp"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h5>Continuous Monitoring</h5>
                  <p>
                    Continuous monitoring is the process and technology used to
                    detect compliance and risk issues associated with an
                    organization's financial and operational
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div class="blog-area pd-top-115 pd-bottom-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Blog Post</h5>
                <h2 class="title">Read Our Latest Tips &Tricks</h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://mercusuar.co/wp-content/uploads/2022/08/IMG-20220805-WA0042-1.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Stock Exchange Market Foreca 2021-2024
                    </a>
                  </h4>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-text" href="blog-details.html">
                    Read More <i class="fa fa-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://mercusuar.co/wp-content/uploads/2022/08/IMG-20220805-WA0042-1.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Market Stock Exchange Foreca 2024-2024
                    </a>
                  </h4>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-text" href="blog-details.html">
                    Read More <i class="fa fa-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-2">
                <div class="thumb">
                  <img
                    src="https://mercusuar.co/wp-content/uploads/2022/08/IMG-20220805-WA0042-1.jpg"
                    alt="img"
                  />
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Foreca Exchange Stock Market 2010-2024
                    </a>
                  </h4>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-text" href="blog-details.html">
                    Read More <i class="fa fa-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Layanan;
