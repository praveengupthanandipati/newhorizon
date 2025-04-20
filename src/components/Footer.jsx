import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import footerlogo from "../assets/img/logo-color.svg";


const Footer = () => {
  //on click browser move to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
         <footer className="footer">
        {isScrolled && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <Link>
              <span className="icon-forward icomoon"></span>
            </Link>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-4 d-none d-md-block">
              <Link>
                <img src={footerlogo} alt="" />
              </Link>
              <article className="pe-3">
                <p className="pt-3">
                  For deciding the quality of the plant material and herbal
                  formulations, assay for chemical markers is an important
                  parameter necessarily to be studied{" "}
                  <Link className="font-bold" to="/About">
                    Read More
                  </Link>
                </p>
              </article>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <h5 className="footer-col-title font-bold">Company</h5>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About us</Link>
                    </li>
                    <li>
                      <Link to="/Services">Services</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pt-4 pt-md-0">
                  <h5 className="footer-col-title font-bold">Contact</h5>
                  <ul className="contacts">
                    <li>
                      <span className="icon-phone-call"></span> +91-9849601776
                    </li>
                    <li>
                      <span className="icon-email"></span>{" "}
                      info@newhorizonbotanicals.com
                    </li>
                    <li>
                      <h6 className="font-bold">New Horozon Botanicals</h6>
                      <span className="icon-pin"></span> H.No: 8-6-249/22/p,
                      Road # 2 Sri Venkataramana Colony Vanasthalipuram
                      Hyderabad-500070, India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter py-3">
          <p className="text-center pb-0 mb-0 font-white">
            All Copy rights Reserved @ New Horizon Biosciences 2025
          </p>
        </div>
      </footer>
        </>
    )
}

export default Footer;
