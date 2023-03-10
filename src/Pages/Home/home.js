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
            E??ti ??n c??utarea unui service auto autorizat ce ofer?? serviciul de
            geometrie roti ??n Bucuresti sau Ilfov? Service-urile auto Timas
            ofer?? servicii profesionale de geometrie roti, realizate de personal
            calificat, cu experien????. Pentru geometrie roti sector 2/geometrie
            roti Fundeni: Sos. Fundeni nr.129, Bucure??ti; Pentru geometrie roti
            sector 6/geometrie roti Militari: Bd. Iuliu Maniu, nr 444,
            Bucure??ti; Pentru geometrie roti Ilfov/Tunari: Sos. de Centur?? nr.
            27, Jud. Ilfov. Pentru geometrie roti camioane Bucuresti , geometrie
            roti camioane Ilfov/Tunari:Sos.de centura nr 27 ,Tunari,Ilfov
            -sistem de masura Josam -ultima tehnologie
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Serviciul de geometrie roti const?? ??n reglarea unghiurilor acestora
            astfel ??nc??t acestea s?? fie ??n conformitate cu specifica??iile ??i
            standardele stabilite de fiecare produc??tor de autovehicule ??n
            parte. Acest lucru asigur?? un rulaj corect ??i ??n siguran???? pe ??osea,
            dar ??i reducerea riscului de uzur?? neuniform?? a anvelopelor.
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
            E??ti ??n c??utarea unui service ce realizeaz?? reparatii turbosuflante
            ??n Bucuresti sau Ilfov? Timas este alegerea cea mai potrivit?? pentru
            ma??ina ta! Oferim servicii complete pentru toate m??rcile auto.
            Service-ul nostru ????i desf????oar?? activitatea ??n cele trei loca??ii
            din Fundeni, Militari ??i Tunari: Pentru reconditionare si reparatii
            turbosuflante sector 2/Fundeni: Sos. Fundeni nr.129, Bucure??ti;
            Pentru reconditionare si reparatii turbosuflante sector 6/Militari:
            Bd. Iuliu Maniu, nr 444, Bucure??ti; Pentru reconditionare si
            reparatii turbosuflante Ilfov/Tunari: Sos. de Centur?? nr. 27, Jud.
            Ilfov.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina ??ndepline??te rolul de a trimite cu putere
            aer, care intr?? ??n motor, folosind energia gazelor de e??apament
            emise de c??tre acesta. Astfel, debitul este mult mai mare dec??t ar
            primi motorul ??n mod natural. Turbosuflanta se poate ??nv??rti cu
            viteze foarte mari, ating??nd chiar 160.000 de rota??ii pe minut,
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
            E??ti ??n c??utarea unui service profesionist pentru servicii de
            incarcare freon auto? Vino cu ??ncredere la Timas! Echipa noastr?? de
            profesioni??ti are la dispozi??ie, ??n toate cele 3 loca??ii din
            Bucure??ti ??i Ilfov, aparatur?? de ultim?? genera??ie, cu care execut??
            orice tip de lucrare. De peste 27 de ani, satisfac??ia clien??ilor
            no??tri este pe primul loc! Po??i beneficia de serviciul de incarcare
            freon auto ??n oricare dintre loca??iile noastre. Te a??tept??m la
            urm??toarele adrese: Pentru incarcare freon auto sector 2/??nc??rcare
            freon Fundeni: Sos. Fundeni nr.129, Bucure??ti; Pentru incarcare
            freon auto sector 6/incarcare freon Militari: Bd. Iuliu Maniu, nr
            444, Bucure??ti; Pentru incarcare freon Ilfov/Tunari: Sos. de Centur??
            nr. 27, Jud. Ilfov.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina ??ndepline??te rolul de a trimite cu putere
            aer, care intr?? ??n motor, folosind energia gazelor de e??apament
            emise de c??tre acesta. Astfel, debitul este mult mai mare dec??t ar
            primi motorul ??n mod natural. Turbosuflanta se poate ??nv??rti cu
            viteze foarte mari, ating??nd chiar 160.000 de rota??ii pe minut,
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
            E??ti ??n c??utarea unui serviciu de schimbare ulei pentru
            autovehiculul t??u? Vino cu ??ncredere ??ntr-una dintre cele 3 loca??ii
            Timas din Militari, Fundeni sau Tunari! Personalul nostru calificat
            ????i va veni ??n ajutor ??n func??ie de nevoile pe care le ai!
            Schimbarea uleiurilor reprezint?? una dintre cele mai importante
            opera??iuni de ??ntre??inere a autovehiculelor. Aceast?? opera??iune este
            esen??ial?? pentru o bun?? func??ionare pe termen lung a motorului ??i a
            cutiei de viteze a ma??inii tale. De aceea, este esen??ial s?? ??tii,
            pentru ma??ina ta, care este intervalul de timp la care ar trebui s??
            faci schimbarea uleiului. Acest interval este determinat ??n func??ie
            de recomand??rile produc??torului autovehiculului t??u sau ??n func??ie
            de regimul de utilizare.
          </div>
          <div className={styles.Normal} style={{ marginTop: "10px" }}>
            Turbosuflanta sau turbina ??ndepline??te rolul de a trimite cu putere
            aer, care intr?? ??n motor, folosind energia gazelor de e??apament
            emise de c??tre acesta. Astfel, debitul este mult mai mare dec??t ar
            primi motorul ??n mod natural. Turbosuflanta se poate ??nv??rti cu
            viteze foarte mari, ating??nd chiar 160.000 de rota??ii pe minut,
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
