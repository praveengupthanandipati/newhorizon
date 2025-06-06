import React from 'react';
import { Link } from 'react-router-dom';
import about01 from "../assets/img/about-bg-04.jpg";
import about02 from "../assets/img/about-bg-05.jpg";
import about03 from "../assets/img/about-bg-06.jpg";
import aboutprimary from "../assets/img/about-primary-img.jpg";

const About = () => {
    const pageTitle = "About New Horizon Botanicals";
    const pageIntro = "Welcome to our innovative bioscience company, dedicated to advancing health through cutting-edge research, development, and sustainable solutions for a better future.";
    
  return (
  <>
       <main className="subPage">
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-2 pt-md-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{pageTitle}</h1>
                <p className="d-none d-md-block">{pageIntro}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb my-2">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="pageContainer">
              <div className="row">
                <div className="col-md-6 d-none d-md-block">
                  <figure className="row">
                    <div className="col-md-6 align-self-center position-relative">
                      <img src={about01} alt="" className="img-fluid" />
                      <div className="position-relative experience-div">
                        <div className="count font-bold">20</div>
                        <h6 className="font-white">Years of Experience</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src={about02} alt="" className="img-fluid mb-4" />
                      <img src={about03} alt="" className="img-fluid" />
                    </div>
                  </figure>
                </div>
                <div className="col-md-6 align-self-center">
                  <h2 className="h2 font-bold font-black pb-2">
                    We’ll Ensure You Alwasy Get Best Results.
                  </h2>
                  <h5 className="h5 font-primary font-semibold">
                    New Horizon Botanicals is located at Hyderabad, the pharma
                    hub of India.
                  </h5>
                  <p>
                    Incorporated with a very humble approach dedicated to
                    research and development of Phytochemicals. New product
                    development and market oriented research is our main focus
                    and thrust. Our vast natural resource combined with
                    excellence in organic chemistry and supported by scientific
                    research centers, uniquely enables us to provide cutting
                    edge research based high performance ingredients with
                    comprehensive valuable services for general well being.
                  </p>
                  <ul className="list-items">
                    <li>Team Expertise</li>
                    <li>Research and Development</li>
                    <li>Impact and Future Directions</li>
                  </ul>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-6 order-lg-last">
                  <img src={aboutprimary} alt="" className="img-fluid w-100 mb-4" />
                </div>
                <div className="col-md-6 align-self-center">
                  <h2 className="h2 font-bold font-black pb-2">
                    Exploring the Frontiers of Life and Discovery
                  </h2>
                  <p>
                    New Horizon Botanicals is led by a team of highly qualified
                    and experienced people. A wide exposure and deep
                    understanding of the industry gives us insight into the
                    needs of the changing market. The organization believes in
                    the concept of total quality management emphasizing on
                    strong customer relationship, management, high quality and
                    on –schedule delivery of its products. We strive to upgrade
                    the existing standards of quality through innovation and
                    hard work. Our products pass through stringent quality
                    checks to ensure that only the best product reaches our
                    customers. Being technically sound and hosting a highly
                    experienced and dedicated staff, we will reach our targets
                    without fail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  </>
  );
};

export default About;