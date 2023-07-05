import React from "react";
import styles from "./card.module.scss";
import card from "./card.json";

function cardProduct() {
  return (
    <div className={styles.Card}>
      {card &&
        card.map((card) => {
          const { image, title, id, description, price } = card;
          return (
            <div className="card" style={{ width: "19rem" }} key={id}>
              <img src={image} alt="Product" />

              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text ">{description}</p>

                <h2>{price}</h2>
                <a
                  href="/contact"
                  class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x"
                  style={{ marginBottom: "2px" }}
                  target="_blank"
                >
                  Formular contact
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default cardProduct;
