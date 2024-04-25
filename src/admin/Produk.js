import React from "react";
import Sidebar from "../Component/Sidebar";

import "../css/produk.css";
function Produk() {
  return (
    <div class="content">
      <Sidebar />
      <div class="container produk-container">
        <h2 class="mb-5">Table #9</h2>
        <div class="table-responsive">
          <table class="table custom-table custom-table-width">
            <thead>
              <tr>
                <th scope="col">
                    No
                  {/* <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label> */}
                </th>
                <th scope="col">Order</th>
                <th scope="col">Sales</th>
                <th scope="col">Description</th>
                <th scope="col">Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                    1
                  <label class="control control--checkbox">
                    
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>1392</td>
                <td>Sales Pitch - 2019</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+63 983 0962 971</td>
              </tr>
              <tr>
                <th scope="row">
                    2
                  <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>4616</td>
                <td>Social Media Planner</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+02 020 3994 929</td>
              </tr>
              <tr>
                <th scope="row">
                    3
                  <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>9841</td>
                <td>Website Agreement</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+01 352 1125 0192</td>
              </tr>
              <tr>
                <th scope="row">
                    4
                  <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>1392</td>
                <td>Sales Pitch - 2019</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+63 983 0962 971</td>
              </tr>
              <tr>
                <th scope="row">
                    5
                  <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>4616</td>
                <td>Social Media Planner</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+02 020 3994 929</td>
              </tr>
              <tr>
                <th scope="row">
                    6
                  <label class="control control--checkbox">
                    <div class="control__indicator"></div>
                  </label>
                </th>
                <td>9841</td>
                <td>Website Agreement</td>
                <td>
                  Far far away, behind the word mountains
                  <small class="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+01 352 1125 0192</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Produk;
