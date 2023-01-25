import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Contact/contact.module.scss";
import Iframe from "react-iframe";
import Footer from "../../Components/Footer/footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhehu0g",
        "template_elpjxxd",
        form.current,
        "IyE2K0EVX7mtrRSs6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.input}>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <Form.Group>
                <Form.Label>Nume si prenume:</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Numele dvs"
                />
              </Form.Group>
            </div>

            <div>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Completati adresa dvs de email"
                />
              </Form.Group>
            </div>

            <div>
              <Form.Group>
                <Form.Label>Mesaj:</Form.Label>
                <Form.Control
                  style={{ minHeight: "250px" }}
                  as="textarea"
                  name="message"
                  placeholder="Ne bucuram sa va citim mesajul !"
                />
              </Form.Group>
            </div>
            
            <Button
              style={{ width: "150px", marginTop: "16px" }}
              type="submit"
              value="Send"
            >
              Trimite mesaj
            </Button>
           
          </form>
        </div>

        <div className={styles.responsive}>
          <Iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11395.714948107941!2d25.991783!3d44.434624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200e2da4d28cd%3A0xbd8dc05cfadb7c8a!2sBulevardul%20Iuliu%20Maniu%20444%2C%20Bucure%C8%99ti%20061127!5e0!3m2!1sen!2sro!4v1666968157183!5m2!1sen!2sro"
            width="996"
            height="500"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
      
      <br></br>
      
      <div>
        <h2>Contactati-ne</h2>
      </div>
      <div className={styles.Data}>
        <div>
          <div>
            <b>Email:</b>
          </div>
          <div>
            <b>office@timas.ro</b>
          </div>
        </div>
        <div>
          <div>
            <b>Adresa: </b>
          </div>
          <div>
            <b>Sos. Fundeni nr.129 Sect.2, Bucuresti, Romania.</b>
          </div>
        </div>

        <div>
          <div>
            <b>Adresa: </b>
          </div>
          <div>
            <b>Soseaua de Centura nr. 27, Tunari, Jud Ilfov.</b>
          </div>
        </div>
        <div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
        </div>
        <div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
          <div>
            <b>Telefon: + 40 744 326 484</b>
          </div>
        </div>
      </div>
      <br></br>
      <Footer></Footer>
    </>
  );
};

export default Contact;
