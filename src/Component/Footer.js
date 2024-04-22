import React from "react";

function Footer() {
    return(
        <div>
             <footer
        class="footer-area bg-cover"
        style={{
          backgroundImage:
            "url('https://www.google.com/search?sca_esv=b1e24946e2e3e41f&sca_upv=1&sxsrf=ACQVn0_xdNcds9fPA_Om22GxhFNTW3EBbQ:1713773139228&q=color+blue+sky&uds=AMwkrPvZ2zHRgPESJfeAynWG-3CuyEhEIu3K6EES2H2ywcXJcRBvtzHej5GAm88g8oYL26rfdh-9ZqQ7ww7U-aHBhheBvo53wF-otUK3DdASzF0oAgwFLIeO9aB9ZuszgR0VeN3UXTXfzOfGPPwVPcAXp0jerV72d3B_BVkd45q3H8pc-6e_4cJzlYKv-HMv29hw8kYMP52UKds6mx1GLbq1zlNEdSpVg-egJDhogi-pmwohq6TOo9cv69MLh7gF0-zRpk_J3pDEDwMT20NlffbJANCbcWYOOjjH6lxr4VHwajeL6pqGBq2TQ30ASHOOK-ziKsQw1GGF&udm=2&prmd=isvnmbtz&sa=X&ved=2ahUKEwjRvcG5rtWFAxUHV2wGHWVTC9sQtKgLegQIDxAB&biw=1266&bih=559&dpr=1.5#vhid=_tcaK0_S0bd7mM&vssid=mosaic')",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title">About company</h4>
                <div class="details">
                  <p>Address</p>
                  <p>Melbourne’s GPO 434 VIC 3074, Australia.</p>
                  <ul class="social-media">
                    <li>
                      <a class="facebook" href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="twitter" href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="instagram" href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="youtube" href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Service</h4>
                <ul>
                  <li>
                    <a href="service.html">Web design</a>
                  </li>
                  <li>
                    <a href="service.html">Digital marketing </a>
                  </li>
                  <li>
                    <a href="service.html">It management</a>
                  </li>
                  <li>
                    <a href="service.html">Cloud services</a>
                  </li>
                  <li>
                    <a href="service.html">Machine learning</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Useful link</h4>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team </a>
                  </li>
                  <li>
                    <a href="project.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_subscribe">
                <h4 class="widget-title">Contact us</h4>
                <div class="single-input-inner style-border style-bg-none">
                  <input type="text" placeholder="Your Email" />
                  <button>
                    <i class="fa fa-arrow-right"></i>
                  </button>
                </div>
                <label>
                  <input type="checkbox" />
                  Maecenas tempususcondime honcus sem quam libero
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 align-self-center">
                <p>© 2024. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Footer;