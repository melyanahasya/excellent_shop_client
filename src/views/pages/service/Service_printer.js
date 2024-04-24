import React from "react";
import "../../../css/service.css";
import Navbar from "../../../Component/Navbar";
import Footer from "../../../Component/Footer";
import ServiceHardwarePrinter from "../../../asset/img/service-hardware-printer.jpg";
import ServiceSoftWarePrinter from "../../../asset/img/service-software-printer.jpg";
import PartLaptop from "../../../asset/img/part-laptop.jpg";
import GedungExcellent1 from "../../../asset/img/gedung-excellent1.jpg";
import GedungExcellent2 from "../../../asset/img/gedung-excellent2.png";
import JenisPrinter from "../../../asset/img/jenis-printer.jpg";
import Garansi from "../../../asset/img/garansi.png";

function Service_printer() {
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
                <h2 class="title">
                  Service <span>Printer</span>
                </h2>
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
                    <h4>Konsultasi dengan Mincom</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Jika kamu tidak dapat mengunjungi toko kami secara langsung,
                    jangan ragu untuk menghubungi kami melalui WhatsApp untuk
                    berkonsultasi sebelumnya.
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
                    <h4>Waktu Service Laptop</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Setelah konsultasi, laptop Anda dibawa ke toko kami. Anda
                    akan menerima tanda terima dan menunggu info pembaruan
                    perbaikan.
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
                    <h4>Ambil dan Pakai</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Laptop dapat diambil setelah perbaikan pada jam 08.00 –
                    17.00 dari Senin sampai Sabtu, dan garansi 7 hari akan aktif
                    saat itu juga.
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
                  src={ServiceHardwarePrinter}
                  alt="img"
                />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div
                class="item"
                style={{ width: "95%", marginLeft: "8.3%", marginTop: "2%" }}
              >
                <div class="single-project-inner">
                  <div class="thumb">
                    <a class="icon swp-readmore-arrow swp-image-popup" href="">
                      <i class="fas fa-search-minus"></i>
                    </a>
                    <img src="" alt="" />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h3>
                        <a href="project-details.html">Kerusakan Berat</a>
                      </h3>
                      <div class="list-wrap mt-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Printer Mati</li>
                              <li>Ganti Sparepart printer </li>
                              <li>Ganti Headprint</li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Intermitten</li>
                              <li>dan lainnya</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="item"
                style={{ width: "95%", marginLeft: "8.3%", marginTop: "2%" }}
              >
                <div class="single-project-inner">
                  <div class="thumb">
                    <a class="icon swp-readmore-arrow swp-image-popup" href="">
                      <i class="fas fa-search-minus"></i>
                    </a>
                    <img src="" alt="" />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h3>
                        <a href="project-details.html">Kerusakan Ringan</a>
                      </h3>
                      <div class="list-wrap mt-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li> Papper Jam</li>
                              <li> Isi ulang tinta</li>
                              <li>Isi ulang toner printer</li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Hasil Print putus-putus</li>
                              <li>Hasil Print bergaris / miring</li>
                              <li>dan lainya</li>
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
          class="col-lg-6 align-self-center"
          style={{ marginTop: "-6%", marginLeft: "4%" }}
        >
          <div class="section-title px-lg-5 mb-0">
            <h5 class="sub-title left-border">Service Untuk Laptop Kamu</h5>
            <h2 class="title">Service Hardware Printer</h2>

            <ul
              class="nav nav-tabs tab-button-style mt-4"
              id="myTab"
              role="tablist"
            ></ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p class="content mt-4">
                  Jika Anda mengalami kendala dengan printer, baik itu masalah
                  kecil maupun besar, Excellent Computer adalah tempat yang
                  tepat untuk Anda. Kami selalu menyediakan solusi terbaik untuk
                  setiap masalah yang Anda hadapi dengan printer Anda.
                </p>
                <br />
                <p>
                  Kami memiliki tim teknisi yang ahli dan dilengkapi dengan
                  peralatan standar mutu.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="content mt-4">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque sed imquam nunullam quis
                  ante. Etiam sit amet orci.
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

      <div class="about-area pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mask-bg-wrap mask-bg-img-3">
                <img class="shape-image" src={ServiceSoftWarePrinter} alt="img" />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div
                class="item"
                style={{ width: "95%", marginLeft: "8.3%", marginTop: "2%" }}
              >
                <div class="single-project-inner">
                  <div class="thumb">
                    <a class="icon swp-readmore-arrow swp-image-popup" href="">
                      <i class="fas fa-search-minus"></i>
                    </a>
                    <img src="" alt="" />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h3>
                        <a href="project-details.html">Service Software</a>
                      </h3>
                      <div class="list-wrap mt-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Reset Software</li>
                              <li>Reset Counter</li>
                              <li>Reset Configurasi</li>
                              <li>Setting Wireless Printer</li>
                              <li>Setting LAN Printer</li>
                              <li>Sharing Printer LAN</li>
                              <li>dan lainnya</li>
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
          class="col-lg-6 align-self-center"
          style={{ marginTop: "3%", marginLeft: "4%" }}
        >
          <div class="section-title px-lg-5 mb-0">
            <h5 class="sub-title left-border">Service Untuk Laptop Kamu</h5>
            <h2 class="title">Service Software Printer</h2>

            <ul
              class="nav nav-tabs tab-button-style mt-4"
              id="myTab"
              role="tablist"
            ></ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p class="content mt-4">
                  Jika Anda mengalami masalah dengan perangkat lunak printer
                  yang mengganggu aktivitas Anda, kami menyarankan untuk
                  membawanya ke Excellent Computer. Teknisi kami siap membantu
                  Anda mengatasi berbagai masalah perangkat lunak printer.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="content mt-4">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque sed imquam nunullam quis
                  ante. Etiam sit amet orci.
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

      {/* <div class="about-area pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mask-bg-wrap mask-bg-img-3">
                <img class="shape-image" src={PartLaptop} alt="img" />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div
                class="item"
                style={{ width: "95%", marginLeft: "8.3%", marginTop: "2%" }}
              >
                <div class="single-project-inner">
                  <div class="thumb">
                    <a class="icon swp-readmore-arrow swp-image-popup" href="">
                      <i class="fas fa-search-minus"></i>
                    </a>
                    <img src="" alt="" />
                  </div>
                  <div class="details-wrap">
                    <div class="details-inner">
                      <h3>
                        <a href="project-details.html">
                          Upgrade Sparepart Laptop
                        </a>
                      </h3>
                      <div class="list-wrap mt-4">
                        <div class="row">
                          <div class="col-lg-12">
                            <ul class="single-list-inner">
                              <li>Upgrade HDD ke SSD</li>
                              <li>Upgrade SSD SATA ke SSD NVme</li>
                              <li>Upgrade RAM DDR 4</li>
                              <li>Upgrade RAM DDR 3</li>
                              <li>RAM Single Chanel ke Dual Chanel</li>

                              <p>* SSD dari 128 GB hingga 1 TB</p>
                              <p>* RAM dari 4×2 GB hingga 16×2 GB</p>
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
          class="col-lg-6 align-self-center"
          style={{ marginTop: "-1%", marginLeft: "4%" }}
        >
          <div class="section-title px-lg-5 mb-0">
            <h5 class="sub-title left-border">Service Untuk Laptop Kamu</h5>
            <h2 class="title">Upgrade Part</h2>

            <ul
              class="nav nav-tabs tab-button-style mt-4"
              id="myTab"
              role="tablist"
            ></ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p class="content mt-4">
                  Jika laptop Anda lambat, mungkin saatnya untuk memperbarui SSD
                  atau RAM-nya. Excellent Computer memiliki berbagai pilihan
                  untuk meningkatkan kinerja laptop Anda.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="content mt-4">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque sed imquam nunullam quis
                  ante. Etiam sit amet orci.
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
      </div> */}

      <div class="skill-area bg-relative pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 px-xl-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="thumb border-radius-5 mb-4 image-hover-animate">
                    <img src={JenisPrinter} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Excellent Services</h5>
                <h2 class="title">Jenis Service Printer</h2>
                <br />

                <div
                  style={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <ol>
                    <li>Printer Inkjet / tinta</li>
                    <li>Printer dotmatrix</li>
                    <li>Printer Laser</li>
                    <li> Printer InkTank</li>
                    <li> Printer Thermal</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-area bg-relative pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Excellent Services</h5>
                <h2 class="title">A Complete Printer Solution</h2>
                <p class="content">
                  Excellent Computer Semarang telah menjadi pilihan utama untuk
                  kebutuhan laptop di Semarang sejak tahun 2002, dengan
                  pengalaman lebih dari 21 tahun.
                </p>

                <br />
                <p>
                  Dengan dedikasi kami untuk memberikan layanan terbaik kepada
                  pelanggan, kami berkomitmen untuk terus meningkatkan dan
                  memperluas layanan kami agar Anda dapat memiliki pengalaman
                  yang memuaskan setiap kali berbelanja atau memperbaiki laptop
                  di Excellent Computer Semarang.
                </p>

                <ul
                  class="nav nav-tabs tab-button-style mt-4"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
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
                      Tanya Mincom
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 px-xl-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="thumb border-radius-5 mb-4 image-hover-animate">
                    <img src={GedungExcellent1} alt="img" />
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
                <h5 class="sub-title double-border">Excellent Services</h5>
                <h2 class="title">Service Laptop Anti Ribet</h2>
              </div>
            </div>
          </div>
          <div class="project-slider slider-control-round owl-carousel">
            <div class="item">
              <div class="single-project-inner">
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3 style={{ color: "black" }}>Service Ditempat</h3>
                    <p>
                      Jika Anda tidak dapat mengunjungi Excellent Computer di
                      Semarang karena kesibukan atau alasan lainnya, silakan
                      hubungi kami melalui WhatsApp di MinCom untuk mengatur
                      layanan di lokasi Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-project-inner">
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3 style={{ color: "black" }}>Antar Jemput Service</h3>
                    <p>
                      Jika perangkat Anda tidak dapat diservis di lokasi, kami
                      menyediakan layanan antar-jemput untuk perbaikan perangkat
                      Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-project-inner">
                <div class="details-wrap">
                  <div class="details-inner">
                    <h3 style={{ color: "black" }}>Scheduled Service</h3>
                    <p>
                      Di Excellent Computer, kami juga menerima penjadwalan
                      untuk layanan atau perbaikan laptop Anda, sehingga Anda
                      dapat merasa lebih aman dan nyaman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-intro-inner" style={{ margin: "5% 9% 5% 9%" }}>
        <div
          class="details"
          style={{ display: "flex", gap: "8%", marginLeft: "5%" }}
        >
          <img src={Garansi} alt="" />

          <div>
            <h4 style={{ color: "black" }}>Servis Bergaransi selama 7 Hari</h4>
            <p>
              Di Excellent Computer, kami menawarkan jaminan layanan selama 7
              hari untuk masalah atau keluhan yang serupa. Artinya, jika Anda
              mengalami masalah yang sama dalam rentang waktu tersebut, kami
              akan memperbaikinya tanpa biaya tambahan!
            </p>
          </div>
        </div>
      </div>

      {/* <div class="faq-area pd-top-100 pd-bottom-90">
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
      </div> */}
      <Footer />
    </div>
  );
}

export default Service_printer;
