import React from "react";

function Footer() {
  return (
    <footer className="footer bg-white container border-t border-sothebys-blue mt-18 mb-8 md:mb-3 font-benton text-xs tracking-tight !mx-auto footer-text">
      <div className="max-w-6xl mx-auto">
        <div className="md:block">
          <div className="md:border md:border-x-0 md:border-b-0 md:border-t border-footer-line mx-auto text-center">
            <a className="pointer-events-none" aria-label="Homepage" href="/">
              <img
                alt="Footer Logo AE"
                loading="lazy"
                width="250"
                height="50"
                decoding="async"
                data-nimg="1"
                className="mx-auto mt-8 md:mt-11 inline-block pointer-events-auto"
                style={{ color: "transparent" }}
                src="https://sothebysrealty.ae/assets/images/logo_ae.svg"
              />
            </a>
            <p className="mt-9 max-w-3xl mx-auto font-normal font-benton tracking-[0.375px] text-[#111111] text-xs">
              Dubai Sotheby's International Realty
              <br />
              EMAAR Business Park, Building. 4, Office G-05,
              <br />
              Sheikh Zayed Rd.
              <br />
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center py-12 md:flex-row">
          <div className="w-full md:w-1/3 xl:w-1/2 flex items-center">
            <div className="font-normal text-left hidden xl:flex items-center tracking-[0.375px]">
              <span className="mx-1.5 font-acta">Contact us</span>
              <span
                id="phone-number-click"
                className="contact-item py-2.5 px-6 mx-1.5 text-[15px] hover:font-medium flex flex-col w-[75px]"
                data-title={+971527180606}
              >
                <a href="tel:+971527180606" area-label="phone">
                  <img
                    alt="Phone Icon"
                    loading="lazy"
                    width={21}
                    height={21}
                    decoding="async"
                    data-nimg={1}
                    className="aspect-auto"
                    style={{ color: "transparent" }}
                    src="/assets/icons/phone_footer.svg"
                  />
                </a>
              </span>
              <span
                id="email-click"
                className="contact-item py-2.5 mx-1.5 text-[15px] hover:font-medium flex flex-col w-[60px]"
                data-title="E-mail"
              >
                <a
                  href="mailto:mss@sothebysrealty.ae"
                  area-label="email"
                  className="w-[30px]"
                >
                  <img
                    src="/assets/icons/email_footer.svg"
                    alt="Email Icon"
                    width={23}
                    height={18}
                    className="aspect-auto"
                    quality={50}
                  />
                </a>
              </span>
              <a
                id="whatsapp-click"
                href="https://api.whatsapp.com/send?phone=971527180606&text=Hi Shoaib Shahid, I am looking for more information"
                className="cursor-pointer contact-item py-2.5  mx-1.5 text-[15px] hover:font-medium flex flex-col w-[75px]"
                data-title="Whatsapp"
              >
                <img
                  alt="Whatsapp Icon"
                  loading="lazy"
                  width={21}
                  height={21}
                  decoding="async"
                  data-nimg={1}
                  className="aspect-auto"
                  style={{ color: "transparent" }}
                  src="/assets/icons/whatsapp_footer.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 xl:w-1/2 text-right flex flex-col md:flex-row flex-wrap items-center justify-end tracking-[0.375px]">
            <div className=" flex">
              <a
                href="#"
                target="_blank"
                className="mx-3"
                aria-label="[object Object]"
              >
                <img
                  alt="Linkedin Icon"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  data-nimg="1"
                  className="footer-social-link transition-all duration-300"
                  src="https://sothebysrealty.ae/assets/icons/linkedin.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-3"
                aria-label="[object Object]"
              >
                <img
                  alt="Youtube Icon"
                  loading="lazy"
                  width="19"
                  height="15"
                  decoding="async"
                  data-nimg="1"
                  className="footer-social-link transition-all duration-300"
                  src="https://sothebysrealty.ae/assets/icons/youtube.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-3"
                aria-label="[object Object]"
              >
                <img
                  alt="Facebook Icon"
                  loading="lazy"
                  width="12"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="footer-social-link transition-all duration-300"
                  src="https://sothebysrealty.ae/assets/icons/facebook.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="mx-3"
                aria-label="[object Object]"
              >
                <img
                  alt="Instagram Icon"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  data-nimg="1"
                  className="footer-social-link transition-all duration-300"
                  src="https://sothebysrealty.ae/assets/icons/instagram.svg"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-center pt-10 md:pt-5 font-acta tracking-wider text-[9px] md:text-[10px] font-normal text-black/70">
          <div className="w-full h-[1px] bg-black/5 mb-3"></div>
          <span className="text-black/90">2024 © Shoaib Shahid.</span> ALL
          RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
