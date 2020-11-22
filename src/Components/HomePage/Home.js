import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <div>
            <header id='header'>
              <div className='header-top'>
                <div className='container'></div>
              </div>
              <div className='container main-menu'>
                <div className='row align-items-center justify-content-between d-flex'>
                  <div id='logo'>
                    {/* <!-- <a href="index.html"><img src="img/logo.png" alt="" title="" /></a> --> */}
                    <h1 id='logoTitle'>NJ Cash Cars</h1>
                  </div>
                  <nav id='nav-menu-container'>
                    <ul className='nav-menu'>
                      <li>
                        <a href='index.html'>Home</a>
                      </li>
                      <li>
                        <a href='index.html'>About Us</a>
                      </li>
                      <li>
                        <a href='index.html'>Blogs</a>
                      </li>
                      <li>
                        <a href='index.html'>FAQs</a>
                      </li>
                      <li>
                        <a href='index.html'>Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
            {/* <!-- #header --> */}

            {/* <!-- banner Area --> */}
            <section className='banner-area relative'>
              <div className='overlay overlay-bg'></div>
              <div className='container'>
                <div className='row fullscreen align-items-center justify-content-between'>
                  <div className='col-lg-6 col-md-6 banner-left'>
                    <h6 className='text-white'>
                      Get an estimate for your car now!
                    </h6>
                    <h1 className='text-white'>TELL US ABOUT YOUR CAR</h1>
                    <a href='#' className='primary-btn text-uppercase'>
                      Get Started
                    </a>
                  </div>

                  {/* <!-- ------------------------------------------------------------------------ --> */}

                  <div
                    className='col-lg-4 col-md-6 banner-right'
                    id='bannerRight'
                  >
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                      <li className='nav-item' id='active'>
                        <a
                          className='nav-link active'
                          id='flight-tab'
                          data-toggle='tab'
                          href='#flight'
                          role='tab'
                          aria-controls='flight'
                          aria-selected='true'
                        >
                          Car details
                        </a>
                      </li>
                      <li className='nav-item' id='active2'>
                        <a
                          className='nav-link'
                          id='hotel-tab'
                          data-toggle='tab'
                          href='#hotel'
                          role='tab'
                          aria-controls='hotel'
                          aria-selected='false'
                        >
                          Details
                        </a>
                      </li>

                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          id='holiday-tab'
                          data-toggle='tab'
                          href='#holiday'
                          role='tab'
                          aria-controls='holiday'
                          aria-selected='false'
                        >
                          <i className='fa fa-user'></i> Info
                        </a>
                      </li>
                    </ul>
                    <div className='tab-content' id='myTabContent'>
                      <div
                        className='tab-pane fade show active'
                        id='flight'
                        role='tabpanel'
                        aria-labelledby='flight-tab'
                      >
                        <form className='form-wrap'>
                          <select
                            className='form-control'
                            name='car-years'
                            id='car-years'
                            required
                          >
                            <option value=' '>Select Year</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                            <option value='2018'>2018</option>
                            <option value='2017'>2017</option>
                            <option value='2016'>2016</option>
                            <option value='2015'>2015</option>
                            <option value='2014'>2014</option>
                            <option value='2013'>2013</option>
                            <option value='2012'>2012</option>
                            <option value='2011'>2011</option>
                            <option value='2010'>2010</option>
                            <option value='2009'>2009</option>
                            <option value='2008'>2008</option>
                            <option value='2007'>2007</option>
                            <option value='2006'>2006</option>
                            <option value='2005'>2005</option>
                            <option value='2004'>2004</option>
                            <option value='2003'>2003</option>
                            <option value='2002'>2002</option>
                            <option value='2001'>2001</option>
                            <option value='2000'>2000</option>
                            <option value='1999'>1999</option>
                            <option value='1998'>1998</option>
                            <option value='1997'>1997</option>
                            <option value='1996'>1996</option>
                            <option value='1995'>1995</option>
                            <option value='1994'>1994</option>
                            <option value='1993'>1993</option>
                            <option value='1992'>1992</option>
                            <option value='1991'>1991</option>
                            <option value='1990'>1990</option>
                            <option value='1989'>1989</option>
                            <option value='1988'>1988</option>
                            <option value='1987'>1987</option>
                            <option value='1986'>1986</option>
                            <option value='1985'>1985</option>
                            <option value='1984'>1984</option>
                            <option value='1983'>1983</option>
                            <option value='1982'>1982</option>
                            <option value='1981'>1981</option>
                            <option value='1980'>1980</option>
                          </select>
                          <select
                            className='form-control'
                            name='car-makes'
                            id='car-makes'
                            id='selectTag'
                            required=''
                          >
                            <option value=''>---</option>
                          </select>

                          <select
                            className='form-control'
                            name='car-makes'
                            id='car-makes'
                            id='selectTag'
                            required=''
                          >
                            <option value=''>---</option>
                          </select>
                          <select
                            className='form-control'
                            name='car-model-trims'
                            id='car-model-trims'
                            id='selectTag'
                            required
                          >
                            <option value=''>---</option>
                          </select>

                          <select
                            name='condition'
                            className='form-control'
                            required
                          >
                            <option value=''>Select Condition</option>
                            <option value='Clean'>Clean</option>
                            <option value='Average'>Average</option>
                            <option value='Rough'>Rough</option>
                            <option value='Damaged'>Damaged</option>
                            <option value='Not Sure'>Not Sure</option>
                          </select>
                          <button
                            type='button'
                            id='changetabbutton'
                            className='primary-btn text-uppercase'
                          >
                            Next
                          </button>
                        </form>
                      </div>
                      <div
                        className='tab-pane fade'
                        id='hotel'
                        role='tabpanel'
                        aria-labelledby='hotel-tab'
                      >
                        <form className='form-wrap'>
                          <input
                            type='text'
                            className='form-control'
                            name='vin'
                            placeholder='VIN# ( Optional )'
                          />

                          <select
                            name='financial'
                            className='form-control'
                            required
                          >
                            <option value=''>Financial Status</option>
                            <option value='Owned'>Owned</option>
                            <option value='Financed'>Financed</option>
                          </select>

                          <input
                            type='text'
                            className='form-control'
                            name='mileage'
                            placeholder='Enter Mileage'
                            required
                          />

                          <input
                            type='text'
                            className='form-control'
                            name='price'
                            placeholder='Asking Price'
                            required
                          />

                          <input
                            type='text'
                            className='form-control'
                            name='comment'
                            placeholder='Comments'
                          />
                          <button
                            type='button'
                            id='changetabbutton2'
                            className='primary-btn text-uppercase'
                          >
                            Next
                          </button>
                        </form>
                      </div>
                      <div
                        className='tab-pane fade'
                        id='holiday'
                        role='tabpanel'
                        aria-labelledby='holiday-tab'
                      >
                        <form className='form-wrap' id='form3'>
                          <input
                            type='text'
                            className='form-control'
                            name='name'
                            placeholder='Full Name'
                            required
                          />
                          <input
                            type='text'
                            className='form-control'
                            name='phone'
                            placeholder='Phone Number'
                            required
                          />
                          <input
                            type='text'
                            className='form-control'
                            name='email'
                            placeholder='Email Address'
                            required
                          />
                          <input
                            type='text'
                            className='form-control'
                            name='code'
                            placeholder='Zip Code'
                            required
                          />
                          <a href='#' className='primary-btn text-uppercase'>
                            Get My Valuation!
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End banner Area --> */}

            {/* <!-- Start Dateils1 Area --> */}
            <section className='insurence-one-area section-gap'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 insurence-left'>
                    <img
                      className='img-fluid img-one'
                      src='assets/img/details/sell1.web'
                      alt='sell cars'
                    />
                  </div>
                  <div className='col-lg-6 insurence-right'>
                    <h1>Are You Looking To Sell Your Car For Cash ?</h1>
                    <p>
                      Selling your car has never been easier! We will come to
                      your home or office at a time which is convenient for you
                      and pay you on the spot for your car in NJ. ANY MAKE, ANY
                      MODEL, ANY CONDITION! WE WILL BUY YOUR CAR! To get started
                      today simply give us a call at Toll Free +1(908) 688-4059
                      or fill out Our Online Form, and we will be happy to
                      assist you through this swift and easy process. Have your
                      car picked up in NJ and get your CASH ON THE SPOT! We Pay
                      Top Dollar! Call Us Now!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* ----- End Dateils1 Area ----- */}

            {/* ----- Start Dateils2 Area -----*/}
            <section className='insurence-two-area pb-120'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 insurence-left'>
                    {/* <h6 className="text-uppercase">Need to know</h6> */}
                    <h1>Our steps</h1>
                    <div className='list-wrap'>
                      <ul>
                        <li>You will display your car on NJ Cash Cars .</li>
                        <li>We will call you.</li>
                        <li>
                          Come to you Give you cash on the spot of your car.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='col-lg-6 insurence-right'>
                    <img
                      class='img-fluid img-two'
                      src='assets/img/details/sell2.web'
                      alt='sell cars'
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* ----- End Dateils2 Area ----- */}

            {/* ----- start footer Area ----- */}
            <footer className='footer-area section-gap'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='single-footer-widget'>
                      <h6>About Us</h6>
                      <p>
                        Get cash for your used car in New Jersey. We pay the
                        highest dollars. We come to you and buy your car as it
                        is! Sell your car quickly and easily today!
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='single-footer-widget'>
                      <h6>Navigation Links</h6>
                      <div className='row'>
                        <div className='col'>
                          <ul>
                            <li>
                              <a href='#'>Home</a>
                            </li>
                            <li>
                              <a href='#'>About us</a>
                            </li>
                            <li>
                              <a href='#'>Blogs</a>
                            </li>
                            <li>
                              <a href='#'>FAQs</a>
                            </li>
                          </ul>
                        </div>
                        <div className='col'>
                          <ul>
                            <li>
                              <a href='#'>Home</a>
                            </li>
                            <li>
                              <a href='#'>About us</a>
                            </li>
                            <li>
                              <a href='#'>Blogs</a>
                            </li>
                            <li>
                              <a href='#'>FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-6'>
                    <div className='single-footer-widget'>
                      <h6>Call Now</h6>
                      <p>+1(908) 688-4059</p>
                      <div id='mc_embed_signup'>
                        <form
                          target='_blank'
                          action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                          method='get'
                          className='subscription relative'
                        >
                          <div className='input-group d-flex flex-row'>
                            <input
                              name='EMAIL'
                              placeholder='Email Address'
                              required=''
                              type='email'
                            />
                            <button className='btn bb-btn'>
                              <span className='lnr lnr-location'></span>
                            </button>
                          </div>
                          <div className='mt-10 info'></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row footer-bottom d-flex justify-content-between align-items-center'>
                  <p className='col-lg-8 col-sm-12 footer-text m-0'>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with
                    <i className='fa fa-heart-o' aria-hidden='true'></i> by
                    <a href='http://cashcars.surge.sh/' target='_blank'>
                      Yasmeen
                    </a>
                  </p>
                  {/* <div className="col-lg-4 col-sm-12 footer-social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-behance"></i></a>
          </div>  */}
                </div>
              </div>
            </footer>
            {/* ----- End footer Area ----- */}
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
