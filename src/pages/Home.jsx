import React from "react";
import {Link} from "react-router-dom";
import Homebanner from "../components/Homebanner";
import AboutImage from "../assets/img/aboutimg.png";
import PhytochemicalReferenceStandardsimage from "../assets/img/Phytochemical-Reference-Standards-image.jpg";
import LeadPhytochemicalsimage from "../assets/img/Lead-Phytochemicals-image.jpg";
import SyntheticanalogsofLeadimage from "../assets/img/Synthetic-analogs-of-Lead-image.jpg";
// import HomeProducts from "../components/HomeProducts";
import Whychooseusimg from "../assets/img/whychooseusimg.jpg";
import story01image from "../assets/img/story/storyimg01.jpg";
import story02image from "../assets/img/story/storyimg02.jpg";
import story03image from "../assets/img/story/storyimg03.jpg";

const Home = () => {
    let categoryTitleTop = "Categories";
    let categoryTitle = "Popular Categories";
  
    let productTitleTop = "Popular Products";
    let productTitle = "Products";
  
    let whychooseusTitleTop = "Why Chooseus";
    let whychooseusTitle = "Phytochem Experts: Choose Excellence";
  
    let storyTitleTop = "Our Stories";
    let storyTitle = "Blogs & Articles";

    const abouthighlet = [
        {
          title: "1992",
          desc: "Year of Establishment",
        },
        {
          title: "25+",
          desc: "Qualified Team",
        },
        {
          title: "40%",
          desc: "xport Percentage",
        },
      ];

      const categoryHomeItems = [
        {
          Image: PhytochemicalReferenceStandardsimage,
          Title: "Phytochemical Reference Standards",
          Desc: "Phytochemical reference standards are compounds used as benchmarks for identifying and quantifying bioactive",
        },
        {
          Image: LeadPhytochemicalsimage,
          Title: "Lead Phytochemicals",
          Desc: "Alkaloids, flavonoids, terpenoids, polyphenols, and saponins are prominent lead phytochemicals",
        },
        {
          Image: SyntheticanalogsofLeadimage,
          Title: "Synthetic analogs of lead phytochemicals",
          Desc: "Chemical derivatives mimicking lead compounds for pharmaceutical development and research purposes.",
        },
      ];

      const storyItems = [
        {
          Image: story01image,
          ArticleBy: "Admin",
          Date: "13st November 2023",
          Title: "Unlocking Nature's Secrets: Innovations in Bioscience Research",
        },
        {
          Image: story02image,
          ArticleBy: "Admin",
          Date: "13st November 2023",
          Title:
            "Revolutionizing Healthcare: The Impact of Bioscience Breakthroughs",
        },
        {
          Image: story03image,
          ArticleBy: "Admin",
          Date: "13st November 2023",
          Title: "Behind the Lab Doors: A Glimpse into Our Bioscience Discoveries",
        },
      ];


    return (
        <>
            <Homebanner />
          {/* About Section */}
        <section className="Homeabout py-3 py-lg-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 align-self-center">
                <div className="sectionTitle pb-3">
                  <h6>Innovative Solutions</h6>
                  <h3 className="font-bold">
                    A RELIABLE COMPANY FOR RELIABLE PRODUCTS
                  </h3>
                </div>
                <p>
                  Plant based drugs are being increasingly used in recent times
                  all over the world. However their standardization has become a
                  matter of great concern in getting a wide acceptance for them.
                  The efficacy and safety of herbal drugs depend largely on
                  their authentication and quality. Thus effective methods of
                  standardization and quality control of the plant drugs as well
                  as these extracts are necessary.
                </p>
                <p>
                  As far as the plant raw materials are concerned, the
                  biological activity is due to the bioactive compounds present
                  in them, which makes the plant drugs therapeutically
                  potential.
                </p>
                <div>
                  <Link to="/About" className="green-btn">
                    Read More About us
                  </Link>
                </div>
                <div className="row company-highletscol d-none">
                  {abouthighlet.map((item) => (
                    <div className="col-4 border-end text-center">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="font-bold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <figure className="aboutImage">
                  <img src={AboutImage} alt="" className="img-fluid" />
                  <div className="ExpNumber shadow">
                    <div className="num font-bold">20</div>
                    <p className="font-primary font-semibold">
                      <small>Years of Experience</small>
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Home;