import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube, FaGoogle} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3> AItronics E-commerce</h3>
              <p>Laptops & Computers</p>
              <p>Video Games & Console</p>
              <p>Smart Phones & Tablets</p>
              <p> TV & Audio</p>
              <p>Gadgets & Devices</p>
              <p>Smart Watches</p>
              <p>Computer Accesories</p>
              <p>Office Supplies</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="https://formspree.io/f/mjvddzwq" method="POST">
                <input className="subscribe" type="email" name="email" placeholder="YOUR E-MAIL" />

                <input className="subscribe" type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Connect with Us</h3>
              <div className="footer-social--icons">
          
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>        
                  <div >
                  <FaGoogle className="icons" />
                </div>                        
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <h3>+91 XXX-XXX-XXXX</h3>
              <h3>aitronics@gmail.com</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-three-column ">
             <div>
              <p>"Smarter electronics, powered by AItronics."</p>
             <p>
              @{new Date().getFullYear()} <b>AItronics Store.</b> All Rights Reserved
              </p>
             </div>
              <div className="info">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Product Support</p>
              <p>FAQs</p>
            </div>
            <div>
              <p> My Account</p>
              <p>Order Tracking</p>
              <p>Returns / Exchange</p>
              <p>Customer Services</p>
            </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 13px;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;
    text-align: center;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;