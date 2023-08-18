/* Három fő részből áll: elérhetőségek, fotó szolgáltatások és a weboldal navigációs linkek.

Az elérhetőségek szakasz tartalmazza a kapcsolattartási adatokat, mint például e-mail cím és telefon szám, valamint linkeket az Instagram és Facebook oldalakhoz. Ezekre a linkekre kattintva új böngésző ablakban nyílnak meg az oldalak.

A fotó szolgáltatások szakasz linkeket tartalmaz a különböző fotózás szolgáltatásokra, mint például portré, esküvői, boudoir, sport és családi fotózás, valamint rendezvény fotózás.

A harmadik szakaszban a weboldal oldalainak linkei találhatóak, mint például a Főoldal, Galéria, Árak, Rólam, Kapcsolat és Admin oldalak.

Az alján a lábléc tartalmaz egy szerzői jogi szöveget, amely megjeleníti az aktuális évet és egy linket a FrontWeb oldalára. Végül figyelmeztetést ad a reCAPTCHA használatára vonatkozóan, ami azt jelenti, hogy a weboldalt a Google reCAPTCHA védi. */

import React from "react";
import classes from "./Footer.module.css";
import email from "../../Assets/email.svg";
import phone from "../../Assets/phone.svg";
import instagram from "../../Assets/instagram.svg";
import facebook from "../../Assets/facebook.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.containerContact}>
          <h2>Elérhetőségek</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.emailContainer}>
            <img src={email} alt="E-mail" className={classes.icon} />
            <div className={classes.email}>
              <span className={classes.email}>WebShop</span>
              <span className={classes.email}>@</span>
              <span className={classes.email}>gmail.com</span>
            </div>
          </div>

          <div className={classes.emailContainer}>
            <img src={phone} alt="phone icon" className={classes.icon} />
            <p className={classes.iconText}>+36 00 123 4567</p>
          </div>

          <div className={classes.iconContainer}>
            <img
              src={instagram}
              alt="instagram icon"
              className={classes.icon}
            />
            <p className={classes.iconText}>Instagram</p>
          </div>

          <div className={classes.iconContainer}>
            <img src={facebook} alt="facebook icon" className={classes.icon} />
            <p className={classes.iconText}>Facebook</p>
          </div>
        </div>

        <div className={classes.photoServices}>
          <h2>Szolgáltatások</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Szállítási lehetőségek
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Fizetési lehetőségek
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Reklamáció és <br></br>termékvisszaküldés
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Gyakori kérdések
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Megrendelés állapota
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="" className={classes.linkText}>
            Karrier
            </NavLink>
          </div>
        </div>

        <div className={classes.pages}>
          <h2>WebShop</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.linkContainer}>
            <NavLink to="/" className={classes.linkText}>
              Főoldal
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/alaplapok" className={classes.linkText}>
              Alaplap
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/memoriak" className={classes.linkText}>
              Memória
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/merevlemezek" className={classes.linkText}>
              SSD meghajtó
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/processzorok" className={classes.linkText}>
              Processzor
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/videokartyak" className={classes.linkText}>
              Videókártya
            </NavLink>
          </div>
        </div>
      </div>
      <hr className={classes.underlineLong}></hr>
      <p className={classes.author}>
        © {currentYear} WebShop &{" "}
        <a
          href="https://www.frontweb.hu"
          style={{
            color: "#23967F",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontWeb
        </a>{" "}
        | Minden jog fenntartva.
      </p>
    </footer>
  );
}

export default Footer;
