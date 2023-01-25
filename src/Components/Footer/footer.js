import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

import styles from "../Footer/footer.module.scss";
import ServiceLogo from "../../Assets/ImageLogo/ServiceLogo.png";

function Footer() {
  return (
    <div className={styles.Footer}>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a
                href="/"
                className="d-flex align-items-center p-0 text-dark"
                style={{ color: "white", textDecoration: "none" }}
              >
                <img
                  src={ServiceLogo}
                  alt="BMW logo"
                  style={{ width: 70, height: 70, marginRight: "10px" }}
                ></img>
                <span
                  className="ml-3 h5 font-weight-bold"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Yours Service
                </span>
              </a>
              <p className="my-3" style={{ width: "300px" }}>
                Misiunea noastra este de a raspunde cu promtitudine si
                professionalism la toate nevoile clientilor nostrii si de a le
                propune solutiile cele mai convenabile pentru rezolvarea
                problemelor lor.
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn
                  flat
                  color="dark"
                  href="https://www.facebook.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="mx-3"
                  href="https://twitter.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="p-2"
                  href="https://www.instagram.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Harta site
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/">Home</CDBFooterLink>
                <CDBFooterLink href="/">Oferta service auto</CDBFooterLink>
                <CDBFooterLink href="/">Contact</CDBFooterLink>
                <CDBFooterLink href="/">Despre noi</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="https://anpc.ro/" target="_blank">
                  Protectia consumatorului
                </CDBFooterLink>
                <CDBFooterLink
                  href="http://www.anpm.ro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ANPM
                </CDBFooterLink>
                <CDBFooterLink
                  href="https://anpc.ro/ce-este-sal/?ref=footer_3_6"
                  target="_blank"
                  rel="noreferrer"
                >
                  ANPC - SAL
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/serviciiCard">Servicii</CDBFooterLink>
                <CDBFooterLink href="/locatii">Locatii</CDBFooterLink>
                <CDBFooterLink href="/">Contrast</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}

export default Footer;
