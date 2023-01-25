import styles from "../Despre noi/despreNoi.module.scss";
import Logo from "../../Assets/ImageLogo/DepreNoiLogo.jpg";
import Footer from "../../Components/Footer/footer";

function DespreNoi() {
  return (
    <div>
      <div className={styles.Logo}>
        <img
          src={Logo}
          alt="BMW logo"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <div className={styles.Content}>
        <div className={styles.box1}>
          <div style={{ fontSize: "20px" }}>
            S.C. TIMAS S.R.L. este o societate cu capital integral romanesc,
            este infiintata in 1993 si are ca principale activitati: comert si
            servicii in domeniul auto,asigurari si telecomunicatii
          </div>
          <br></br>
          <h2>MISIUNE</h2>
          <br></br>
          <div style={{ fontSize: "20px" }}>
            Misiunea noastra este de a raspunde cu promtitudine si
            professionalism la toate nevoile clientilor nostrii si de a le
            propune solutiile cele mai convenabile pentru rezolvarea problemelor
            lor.
          </div>
          <br></br>
          <h2>VIZIUNE</h2>
          <br></br>
          <div style={{ fontSize: "20px" }}>
            Daca multumirea si aprecierea clientilor pentru produsele si
            serviciile noastre ne va aduce intr-o pozitie de lider pe
            piata,atunci vom putea spune ca viziunea noastra este corecta
          </div>
          <br></br>
          <h2>VALORILE COMPANIEI</h2>
          <br></br>
          <h3 style={{ fontSize: "24px" }}>CLIENTII</h3>

          <div style={{ fontSize: "20px" }}>
            Politica noastra este aceea de a pune clientul in centrul
            activitatii noastre din punct de vedere al importantei, tinta
            noastra fiind de a construi parteneriate solide, corecte si de
            durata cu clientii nostrii prin calitatea produselor si serviciilor
            oferite
          </div>
          <br></br>
          <h3 style={{ fontSize: "24px" }}>ECHIPA</h3>
          <div style={{ fontSize: "20px" }}>
            Resursele umane sunt deasemenea valori centrale ale companiei, lucru
            in echipa si dinamismul acesteia reprezinta punctul nostru forte in
            adaptarea la condittile pietei
          </div>
          <br></br>
          <h3 style={{ fontSize: "24px" }}>CALITATEA</h3>
          <div style={{ fontSize: "20px" }}>
            Deviza noastra este “TOTUL PENTRU SATISFACTIA CLIENTULUI” , accentul
            fiind pus pe calitatea produselor si serviciilor oferite. Pentru a
            respecta criteriile de calitate si a ridica stacheta in permanenta
            compania noastra a implementat sistemul de calitate ISO
            9001:2000,certificarea fiind facuta de catre prestigioasa firma DET
            NORSKE VERITAS,iar activitatea auto este auditata si autorizata de
            catre REGISTRU AUTO ROMAN . Serviciile si produsele oferite de
            compania TIMAS sunt la cele mai inalte standarde de calitate, acest
            lucru fiind permis datorita dotarilor cu utilaje, scule,
            echipamente, software de ultima generatie pentru diagnoza
            parametrilor masinilor, dar si datorita calificarii superioare a
            personalului care isi desfasoara activitatea la Timas.
          </div>
        </div>
        <div className={styles.box2}>
          <div>
            <div className={styles.title}>IULIU MANIU</div>
            <div className={styles.normal}>
              CHECKSTAR - MAGNETI MARELLI - Timas Bld. Iuliu Maniu , nr 444,
              sector 6, Bucuresti
            </div>
            <div className={styles.normal}>Tel: + 40 744 709 537</div>
            <div className={styles.normal}>Tel: + 40 (0)31 - 437 21 62</div>
            <div className={styles.normal}>Tel: + 40 (0)31 - 437 21 63</div>
            <div className={styles.normal}>Luni-Vineri: 09:00-18:00</div>
            <div className={styles.normal}>Sambata: 09:00-13:00</div>
            <div className={styles.normal}>Duminica: Inchis</div>
          </div>
          <br></br>
          <div>
            <div className={styles.title}>FUNDENI</div>
            <div className={styles.normal}>
              Sos. Fundeni nr.129 Sect.2, Bucuresti, Romania
            </div>
            <div className={styles.normal}>Tel: + 40 (0)21 - 240 70 21</div>
            <div className={styles.normal}>Tel: + 40 (0)21 - 241 51 86</div>
            <div className={styles.normal}>Tel: + 40 (0)31 - 405 40 57</div>
            <div className={styles.normal}>Luni-Vineri: 09:00-18:00</div>
            <div className={styles.normal}>Sambata: 09:00-13:00</div>
            <div className={styles.normal}>Duminica: Inchis</div>
          </div>
          <br></br>
          <div>
            <div className={styles.title}>TUNARI</div>
            <div className={styles.normal}>
              Soseaua de Centura nr. 27, Tunari, Jud Ilfov
            </div>
            <div className={styles.normal}>Tel: + 40 744 326 484</div>
            <div className={styles.normal}>Tel: + 40 751 077 084</div>
            <div className={styles.normal}>Tel: + 40 (0)31 - 225 42 47</div>
            <div className={styles.normal}>Luni-Vineri: 09:00-18:00</div>
            <div className={styles.normal}>Sambata: 09:00-13:00</div>
            <div className={styles.normal}>Duminica: Inchis</div>
          </div>
          <br></br>
          <div>
            <div className={styles.title}>SERVICII SEVICE AUTO</div>
            <h3 className={styles.bold}>Service Auto Opel</h3>
            <h3 className={styles.bold}>Service Auto Dacia</h3>
            <h3 className={styles.bold}>Service Auto Volkswagen</h3>
            <h3 className={styles.bold}>Service Auto Audi</h3>
            <h3 className={styles.bold}>Service Auto Ford</h3>
            <h3 className={styles.bold}>Service Auto BMW</h3>
            <h3 className={styles.bold}>Service Auto Mercedes</h3>
            <h3 className={styles.bold}>Service Auto Renault</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DespreNoi;
