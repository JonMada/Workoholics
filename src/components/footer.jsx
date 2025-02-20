import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

import { HiArrowTurnDownRight } from "react-icons/hi2";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Your message has been sent!");
      setFormData({ email: "", termsAccepted: false });
    }, 2000);
  };

  return (
    <footer className="footer-wrapper">
      <div className="left-column">
        <div className="contact-methods">
          <p>
            <a href="tel:+34944059957">+34 944 059 957</a>
          </p>
          <p>
            <a href="mailto:hello@workoholics.es">hello@workoholics.es</a>
          </p>
        </div>

        <div className="rrss">
          <p>
            <a
              href="https://www.instagram.com/workoholics_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <GoArrowUpRight className="insta-icon" />
          </p>
        </div>

        <div className="motto">
          <p>Hecho en Bilbao con pasión</p>
          <svg
            fill="#fd0886"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8 2.5V0h-7.578v2.5H9.778V0H2.2v2.5H0V10h2.2v2.75h2.444V15H7.09v2.75h2.444V20h2.934v-2.25h2.444V15h2.444v-2.25H19.8V10H22V2.5h-2.2zm-14.422.25L2.2 2.5 2.444 8V2.75h2.934z"
              fill="#FB088C"
            ></path>
          </svg>
        </div>
      </div>

      <div className="right-column">
        <div className="headings">
          <p>We love what we do.</p>
          <p>We are Worköholics.</p>
        </div>

        <div className="contact-form">
          <p>Contact us!</p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
              />
            </div>

            <div className="terms-btn">
              <div className="terms">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span className="checkbox"></span>
                <label htmlFor="termsAccepted">
                  I have read and accepted the{" "}
                  <a href="#" target="_blank">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" target="_blank">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="btn">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
                <HiArrowTurnDownRight />
              </div>
            </div>
          </form>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
        {/*  <div className="policies">
          <a href="#" target="_blank">
            Privacy Policy
          </a>
          <a href="#" target="_blank">
            Legal Terms
          </a>
          <a href="#" target="_blank">
            Cookies
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
