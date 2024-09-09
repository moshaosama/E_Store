import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTruck,
  FaTwitter,
} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import FooterRes from "../Pages/headerResponsive";

function Footer() {
  return (
    <>
      {/* Play Store*/}
      <div
        style={{ backgroundColor: "rgb(238 242 255)" }}
        className="d-flex rounded my-5 align-items-center justify-content-center"
      >
        <img
          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img-left_s5n2zf.webp&w=640&q=75"
          alt=""
          className="w-25"
        />
        <div className="w-25 text-center">
          <h2>Get Your Daily Needs From Our KachaBazar Store</h2>
          <p>
            There are many products you will find in our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offers.
          </p>
          <div className="d-flex">
            <Link to={"https://www.apple.com/app-store/"} target="blanc">
              <img src="app-store_cyyc0f.svg" alt="" className="w-100" />
            </Link>
            <Link
              className="mx-3"
              to={
                "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jun0122&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-lk-1003227-med-hasem-py-Evergreen-Jun0122-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700071429441653_creativeid_600975795576_device_c&gclid=CjwKCAjwwo-WBhAMEiwAV4dybdy60tnQqCSnQ-cXShNnEcxmaBx2I6iwwc_WEqoA5sN9YSLJEXh9fBoC3u4QAvD_BwE&gclsrc=aw.ds&pli=1"
              }
              target="blanc"
            >
              <img src="play-store_cavwua.svg" alt="" className="w-100" />
            </Link>
          </div>
        </div>
        <img
          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img_c7xqg4.webp&w=640&q=75"
          alt=""
          className="w-25"
        />
      </div>
      {/*////////////// */}

      {/*Create my Details  */}
      <Container className="my-0">
        <div className="d-flex">
          <p>
            <FaTruck className="text-success" />
            <span className="mx-4">Free Shiping from 500$</span>
          </p>
          <span className="mx-5">|</span>
          <p>
            <BiPhoneCall className="text-success" />
            <span className="mx-4">Support 24/7 At Anytime</span>
          </p>
          <span className="mx-5">|</span>
          <p>
            <MdOutlinePayment className="text-success" />
            <span className="mx-4">Secure Payment Totally Safe</span>
          </p>
          <span className="mx-5">|</span>
          <p>
            <FaGift className="text-success" />
            <span className="mx-4">Latest Offer Upto 20% Off</span>
          </p>
        </div>
      </Container>
      <hr />
      {/*/////////////////// */}

      {/* Footer */}
      <div className="p-2 rounded">
        <Container>
          <div className="SocialMedia d-flex justify-content-between">
            <p style={{ fontWeight: "bolder" }}>
              Get Connected with us on social media:{" "}
            </p>
            <div className="LinksSocial d-flex">
              <FaFacebook className="text-success mx-2" />
              <FaInstagram className="text-success mx-2" />
              <FaTwitter className="text-success mx-2" />
              <FaLinkedin className="text-success mx-2" />
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div id="footer1">
              <div>
                <th className="my-3">Company</th>
                <tr className="d-flex flex-column">
                  <td className="my-2">About Us</td>
                  <td className="my-2">Contact Us</td>
                  <td className="my-2">Careers</td>
                  <td className="my-2">Latest News</td>
                </tr>
              </div>
              <div>
                <th className="my-3">Latest News</th>
                <tr className="d-flex flex-column">
                  <td className="my-2">Fish & Meat</td>
                  <td className="my-2">Soft Drink</td>
                  <td className="my-2">Milk & Dairy</td>
                  <td className="my-2">Beauty & Health</td>
                </tr>
              </div>
            </div>
            <div id="footer1">
              <div>
                <th className="my-3">My Account</th>
                <tr className="d-flex flex-column">
                  <td className="my-2">Dashboard</td>
                  <td className="my-2">My Orders</td>
                  <td className="my-2">Recent Orders</td>
                  <td className="my-2">Update Profile</td>
                </tr>
              </div>
              <div>
                <th>
                  <img
                    src="logo-color_el4zmy.svg"
                    alt=""
                    style={{ width: "150%" }}
                    className="my-3"
                  />
                </th>
                <tr className="d-flex flex-column">
                  <td className="my-2">Carma City , Egypt</td>
                  <td className="my-2">Cairo, 6 October</td>
                  <td className="my-2">Tel : +20 1004365707</td>
                  <td className="my-2">Email : mohamedOSFekry@gmail.com</td>
                </tr>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <hr className="w-75 " style={{ margin: "0px 15pc" }} />
      </div>
      {/*//////////////////////*/}
      {/* Follow us and Call me */}
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center">
          <div id="Footer2">
            <div>
              <p className="h5" style={{ fontWeight: "bolder" }}>
                Follow Us
              </p>
              <div className="LinksSocial d-flex">
                <FaFacebook className=" mx-2" />
                <FaInstagram className=" mx-2" />
                <FaTwitter className=" mx-2" />
                <FaLinkedin className=" mx-2" />
              </div>
            </div>
            <div>
              <p className="h5" style={{ fontWeight: "bolder" }}>
                Call Us today!
              </p>
              <h4 className="text-success">+20 1004365707</h4>
            </div>
          </div>
          <div>
            <img
              id="Paypal"
              src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688607%2Fsettings%2Fpayment-logo_qhslgz.webp&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </Container>
      {/*//////////////////////*/}
      {/*Responsive Links Btn Header*/}
      <FooterRes />
    </>
  );
}

export default Footer;
