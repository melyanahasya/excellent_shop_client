import React from "react";
import Navbar from "../../../Component/Navbar";
import Footer from "../../../Component/Footer";
import ServiceHardware from "../../../asset/img/komputer1.webp";
import ServiceSoftWare from "../../../asset/img/komputer2.jpg";
import PartLaptop from "../../../asset/img/komputer3.jpg";
import GedungExcellent1 from "../../../asset/img/gedung-excellent1.jpg";
import GedungExcellent2 from "../../../asset/img/gedung-excellent2.png";
import GedungExcellent from "../../../asset/img/gedung-excellent-service.jpg";
import Garansi from "../../../asset/img/garansi.png";

function ServiceKomputer() {
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
                <h2 class="title">
                  Service <span>Komputer</span>
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
                    <h4>Waktu Service Komputer</h4>
                  </div>
                </div>
                <div class="details">
                  <p>
                    Setelah konsultasi, Komputer Anda dibawa ke toko kami. Anda
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
                    Komputer dapat diambil setelah perbaikan pada jam 08.00 –
                    17.00 dari Senin sampai Sabtu, dan garansi 7 hari akan{" "}
                    <br /> aktif saat itu juga.
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
                <img class="shape-image" src={ServiceHardware} alt="img" />
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
                              <li>Komputer Mati</li>
                              <li>Komputer Tidak bisa di Charger</li>
                              <li>
                                Komputer overheat <br /> ( panas )
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Engsel patah / rusak</li>
                              <li>Layar pecah / bergaris</li>
                              <li>dan lainya</li>
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
                              <li>Tombol keyboard mati</li>
                              <li>Touchpad mencet sendiri</li>
                              <li>Ganti batrai Komputer</li>
                              <li>Tombol power rusak</li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <ul class="single-list-inner">
                              <li>Fan Komputer mati</li>
                              <li>Susara speaker pecah</li>
                              <li>Wifi tidak connect</li>
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
          style={{ marginTop: "-10%", marginLeft: "4%" }}
        >
          <div class="section-title px-lg-5 mb-0">
            <h5 class="sub-title left-border">Service Untuk Komputer Kamu</h5>
            <h2 class="title">Service Hardware Komputer</h2>

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
                  Jika komputer Anda mengalami kesulitan, baik itu masalah kecil
                  atau besar, Excellent Computer siap memberikan solusi terbaik.
                  Kami memiliki tim teknisi yang terampil dan dilengkapi dengan
                  peralatan standar untuk menangani setiap masalah pada komputer
                  Anda dengan profesionalisme.
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
                <img class="shape-image" src={ServiceSoftWare} alt="img" />
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
                          <div class="col-lg-12">
                            <ul class="single-list-inner">
                              <li>Tidak bisa booting (masuk windows)</li>
                              <li>Blue Screen OS (BSOD)</li>
                              <li>Webcam mati</li>
                              <li>Cleaning OS /Sitem</li>
                              <li>Pembersihan Virus</li>
                              <li>Aplikasi Crash / tidak bisa dibuka</li>
                              <li>Install Driver Software</li>
                              <li>Disable / Enable Windows Update</li>
                              <li>Tidak bisa connect jaringan Wifi / LAN</li>
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
          style={{ marginTop: "-2%", marginLeft: "4%" }}
        >
          <div class="section-title px-lg-5 mb-0">
            <h5 class="sub-title left-border">Service Untuk Komputer Kamu</h5>
            <h2 class="title">Service Software</h2>

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
                  Jika Anda mengalami beragam masalah perangkat lunak pada
                  komputer Anda yang mengganggu aktivitas sehari-hari, kami
                  menyarankan untuk membawanya ke Excellent Computer. Teknisi
                  kami di sana siap membantu Anda menangani segala macam masalah
                  perangkat lunak pada komputer Anda.
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
                          Upgrade Sparepart Komputer
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
            <h5 class="sub-title left-border">Service Untuk Komputer Kamu</h5>
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
                  Jika Komputermu terasa lambat, mungkin sudah saatnya untuk
                  meng-upgrade SSD atau RAM-nya. Excellent Computer menyediakan
                  berbagai opsi untuk meningkatkan performa Komputermu.
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

      <div class="skill-area bg-relative pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Excellent Services</h5>
                <h2 class="title">Excellent Computer</h2>
                <p class="content">
                  Sejak tahun 2002, Excellent Computer Semarang telah menjadi
                  tempat utama bagi kebutuhan perangkat Komputer di Semarang.
                  Dengan lebih dari 21 tahun pengalaman, kami memiliki tim
                  teknisi dan staf layanan pelanggan yang terlatih untuk
                  membantu Anda menangani setiap masalah dan keluhan terkait
                  Komputer Anda dengan cepat dan efisien.
                </p>
                <br />
                <p>
                  Dengan komitmen kami untuk memberikan layanan optimal kepada
                  Anda, kami bertekad untuk terus meningkatkan dan meluaskan
                  jangkauan layanan kami. Kami berusaha agar setiap pengalaman
                  Anda, baik saat berbelanja maupun saat memperbaiki Komputer di
                  Excellent Computer Semarang, dapat memuaskan.
                </p>
              </div>
            </div>
            <div class="col-lg-6 px-xl-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="thumb border-radius-5 mb-4 image-hover-animate">
                    <img src={GedungExcellent1} alt="img" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="thumb border-radius-5 image-hover-animate mb-3 mb-md-0">
                    <img src={GedungExcellent2} alt="img" />
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

      <div class="skill-area bg-relative pd-top-50 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 px-xl-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="thumb border-radius-5 mb-4 image-hover-animate">
                    <img src={GedungExcellent} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Excellent Services</h5>
                <h2 class="title">A complete Komputer solution.</h2>
                <p class="content">
                  Kami di Excellent Computer dengan bangga menghadirkan dedikasi
                  kami untuk menjadi solusi terdepan dalam layanan perbaikan
                  Komputer di Kota Semarang. Dari metode pelayanan kami hingga
                  berbagai jenis kerusakan yang kami tangani, kami berusaha
                  memberikan yang terbaik.
                </p>
                <br />
                <p>
                  Kami berusaha untuk membuat pengalaman pelanggan kami menjadi
                  yang terbaik dengan menyajikan layanan unggulan yang tak
                  tertandingi. Dengan menitikberatkan pada kecepatan dan
                  kualitas, Excellent Computer siap menghadapi setiap tantangan
                  dalam memperbaiki perangkat Komputer Anda.
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
          </div>
        </div>
      </div>

      <div class="project-area half-bg-top pd-top-115">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title style-white text-center">
                <h5 class="sub-title double-border">Excellent Services</h5>
                <h2 class="title">Service Komputer Anti Ribet</h2>
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
                      untuk layanan atau perbaikanKomputer Anda, sehingga Anda
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
      <Footer />
    </div>
  );
}
export default ServiceKomputer;
