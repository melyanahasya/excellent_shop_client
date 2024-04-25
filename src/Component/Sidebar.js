import React, { useState } from "react";
import "../css/Sidebar.css";

function Sidebar() {
  const [isProductActive, setIsProductActive] = useState(false);

  const handleProductClick = () => {
    setIsProductActive(!isProductActive);
  };

  return (
    <div className="app-theme-white body-tabs-shadow fixed-sidebar fixed-header overflow-auto">
      <div
        className="app-sidebar sidebar-shadow"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div className="app-header__logo">
          {/* <div className="logo-src"></div> */}
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <i class="fa-brands fa-product-hunt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              class="hamburger hamburger--elastic mobile-toggle-nav"
            >
              {/*  */}
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span class="btn-icon-wrapper">
                <i class="fa-solid fa-chevron-down"></i>{" "}
              </span>
            </button>
          </span>
        </div>{" "}
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li className="app-sidebar__heading">Menu</li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/admin-berita"
                  className={isProductActive ? "mm-active" : ""}
                  onClick={handleProductClick}
                >
                  <i
                    className={`fa-regular fa-newspaper metismenu-icon ${
                      isProductActive ? "rotate-icon" : ""
                    }`}
                  ></i>{" "}
                  Produk
                </a>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      href="/admin-berita"
                      class="mm-active"
                    >
                      <i class="fa-regular fa-newspaper metismenu-icon"></i>{" "}
                      Komputer{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      href="/admin-berita"
                      class="mm-active"
                    >
                      <i class="fa-regular fa-newspaper metismenu-icon"></i>{" "}
                      Laptop{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      href="/admin-berita"
                      class="mm-active"
                    >
                      <i class="fa-regular fa-newspaper metismenu-icon"></i>{" "}
                      Printer{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">
                      {" "}
                      <div className="logout-button">
                        <button className="btn btn-danger btn-logout">LOG OUT</button>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
