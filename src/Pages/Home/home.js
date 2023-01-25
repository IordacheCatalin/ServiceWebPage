import styles from "./home.module.scss";
import IframeYoutube from "../../Components/Youtube/IframeYoutube";

import Rar from "../../Assets/ImageLogo/RAR.png";
import Rar2 from "../../Assets/ImageLogo/RAR2.png";


import Contact from "../Contact/contact";

function HomePage() {
  return (
    <div>
      <div className={styles.Top}>
        Service auto si verificare ITP{" "}
      </div>
      <div className={styles.Data}>
        <div className={styles.BoxData}>
          <span className={styles.Title}>
            Service Auto Bucuresti - Iuliu Maniu
          </span>
          <span className={styles.Bold}>
            CHECKSTAR - MAGNETI MARELLI - Timas Bld. Iuliu Maniu , nr 444,
            sector 6, Bucuresti
          </span>
          <span className={styles.Normal}>Tel/Fax: + 40 744 709 537</span>
          <span className={styles.Bold}>
            Service auto: Autoturisme si Autoutilitare
          </span>
          <span className={styles.Bold}>Program</span>
          <span className={styles.Normal}>Luni-Vineri: 08:30 - 17:00</span>
          <span className={styles.Normal}>Sambata: 08:30 - 13:00</span>
          <span className={styles.Normal}>Duminica: Inchis</span>
        </div>
        <div className={styles.BoxData}>
          <span className={styles.Title}>Service Auto Bucuresti - Fundeni</span>
          <span className={styles.Bold}>
            Sos. Fundeni nr.129 Sect.2, Bucuresti, Romania
          </span>
          <span className={styles.Normal}>Tel/Fax: + 40 744 709 537</span>
          <span className={styles.Bold}>
            Service auto: Autoturisme si Autoutilitare
          </span>
          <span className={styles.Bold}>Program</span>
          <span className={styles.Normal}>Luni-Vineri: 08:30 - 17:00</span>
          <span className={styles.Normal}>Sambata: 08:30 - 13:00</span>
          <span className={styles.Normal}>Duminica: Inchis</span>
        </div>
        <div className={styles.BoxData}>
          <span className={styles.Title}>
            Service Auto Bucuresti - Ilfov - Pipera - Tunari
          </span>
          <span className={styles.Bold}>
            Soseaua de Centura nr. 27, Tunari, Jud Ilfov
          </span>
          <span className={styles.Normal}>Tel/Fax: + 40 744 709 537</span>
          <span className={styles.Bold}>
            Service auto: Autoturisme, Autoutilitare si Camioane
          </span>
          <span className={styles.Bold}>Program</span>
          <span className={styles.Normal}>Luni-Vineri: 08:30 - 17:00</span>
          <span className={styles.Normal}>Sambata: 08:30 - 13:00</span>
          <span className={styles.Normal}>Duminica: Inchis</span>
        </div>
        <div className={styles.BoxData}>
          <img
            src={Rar}
            alt="registru auto roman"
            style={{ width: 150, height: 150 }}
          ></img>
          <img
            src={Rar2}
            alt="registru auto roman"
            style={{ width: 150, height: 150 }}
          ></img>
        </div>
      </div>
      <div className={styles.Video}>
        <div className={styles.Box1}>
          <div className={styles.Title}>Servicii geometrie roti</div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Ești în căutarea unui service auto autorizat ce oferă serviciul de
            geometrie roti în Bucuresti sau Ilfov? Service-urile auto Timas
            oferă servicii profesionale de geometrie roti, realizate de personal
            calificat, cu experiență. Pentru geometrie roti sector 2/geometrie
            roti Fundeni: Sos. Fundeni nr.129, București; Pentru geometrie roti
            sector 6/geometrie roti Militari: Bd. Iuliu Maniu, nr 444,
            București; Pentru geometrie roti Ilfov/Tunari: Sos. de Centură nr.
            27, Jud. Ilfov. Pentru geometrie roti camioane Bucuresti , geometrie
            roti camioane Ilfov/Tunari:Sos.de centura nr 27 ,Tunari,Ilfov
            -sistem de masura Josam -ultima tehnologie
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Serviciul de geometrie roti constă în reglarea unghiurilor acestora
            astfel încât acestea să fie în conformitate cu specificațiile și
            standardele stabilite de fiecare producător de autovehicule în
            parte. Acest lucru asigură un rulaj corect și în siguranță pe șosea,
            dar și reducerea riscului de uzură neuniformă a anvelopelor.
          </div>
        </div>
        <div className={styles.Box2}>
          <IframeYoutube embedId="jKUmHjuQ3uk" />
        </div>
      </div>
      <div className={styles.Video1}>
        <div className={styles.Box1}>
          <div className={styles.Title}>
            Reconditionare si reparatii turbosuflante
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Ești în căutarea unui service ce realizează reparatii turbosuflante
            în Bucuresti sau Ilfov? Timas este alegerea cea mai potrivită pentru
            mașina ta! Oferim servicii complete pentru toate mărcile auto.
            Service-ul nostru își desfășoară activitatea în cele trei locații
            din Fundeni, Militari și Tunari: Pentru reconditionare si reparatii
            turbosuflante sector 2/Fundeni: Sos. Fundeni nr.129, București;
            Pentru reconditionare si reparatii turbosuflante sector 6/Militari:
            Bd. Iuliu Maniu, nr 444, București; Pentru reconditionare si
            reparatii turbosuflante Ilfov/Tunari: Sos. de Centură nr. 27, Jud.
            Ilfov.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina îndeplinește rolul de a trimite cu putere
            aer, care intră în motor, folosind energia gazelor de eșapament
            emise de către acesta. Astfel, debitul este mult mai mare decât ar
            primi motorul în mod natural. Turbosuflanta se poate învârti cu
            viteze foarte mari, atingând chiar 160.000 de rotații pe minut,
            pentru a furniza suficient aer motorului.
          </div>
        </div>
        <div className={styles.Box2}>
          <IframeYoutube embedId="Va4nn1Jwun4" />
        </div>
      </div>
      <div className={styles.Video2}>
        <div className={styles.Box1}>
          <div className={styles.Title}>Incarcare freon auto</div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Ești în căutarea unui service profesionist pentru servicii de
            incarcare freon auto? Vino cu încredere la Timas! Echipa noastră de
            profesioniști are la dispoziție, în toate cele 3 locații din
            București și Ilfov, aparatură de ultimă generație, cu care execută
            orice tip de lucrare. De peste 27 de ani, satisfacția clienților
            noștri este pe primul loc! Poți beneficia de serviciul de incarcare
            freon auto în oricare dintre locațiile noastre. Te așteptăm la
            următoarele adrese: Pentru incarcare freon auto sector 2/încărcare
            freon Fundeni: Sos. Fundeni nr.129, București; Pentru incarcare
            freon auto sector 6/incarcare freon Militari: Bd. Iuliu Maniu, nr
            444, București; Pentru incarcare freon Ilfov/Tunari: Sos. de Centură
            nr. 27, Jud. Ilfov.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina îndeplinește rolul de a trimite cu putere
            aer, care intră în motor, folosind energia gazelor de eșapament
            emise de către acesta. Astfel, debitul este mult mai mare decât ar
            primi motorul în mod natural. Turbosuflanta se poate învârti cu
            viteze foarte mari, atingând chiar 160.000 de rotații pe minut,
            pentru a furniza suficient aer motorului.
          </div>
        </div>
        <div className={styles.Box2}>
          <IframeYoutube embedId="02Li83TWgBA" />
        </div>
      </div>
      <div className={styles.Video3}>
        <div className={styles.Box1}>
          <div className={styles.Title}>Schimbare ulei</div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Ești în căutarea unui serviciu de schimbare ulei pentru
            autovehiculul tău? Vino cu încredere într-una dintre cele 3 locații
            Timas din Militari, Fundeni sau Tunari! Personalul nostru calificat
            îți va veni în ajutor în funcție de nevoile pe care le ai!
            Schimbarea uleiurilor reprezintă una dintre cele mai importante
            operațiuni de întreținere a autovehiculelor. Această operațiune este
            esențială pentru o bună funcționare pe termen lung a motorului și a
            cutiei de viteze a mașinii tale. De aceea, este esențial să știi,
            pentru mașina ta, care este intervalul de timp la care ar trebui să
            faci schimbarea uleiului. Acest interval este determinat în funcție
            de recomandările producătorului autovehiculului tău sau în funcție
            de regimul de utilizare.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina îndeplinește rolul de a trimite cu putere
            aer, care intră în motor, folosind energia gazelor de eșapament
            emise de către acesta. Astfel, debitul este mult mai mare decât ar
            primi motorul în mod natural. Turbosuflanta se poate învârti cu
            viteze foarte mari, atingând chiar 160.000 de rotații pe minut,
            pentru a furniza suficient aer motorului.
          </div>
        </div>
        <div className={styles.Box2}>
          <IframeYoutube embedId="O1hF25Cowv8" />
        </div>
      </div>
      <br></br>
      <Contact></Contact>
      <br></br>
    </div>
  );
}

export default HomePage;
