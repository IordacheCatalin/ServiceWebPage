import React from "react";
import styles from "./card.module.scss";
import card from "./card.json";

function cardProduct() {
  return (
    <div className={styles.Card}>
      {card &&
        card.map((card) => {
          return (
            <div className="card" style={{ width: "19rem" }} key={card.id}>
              <img src={card.image} alt="Product" />

              <div class="card-body">
                <h5 class="card-title">{card.title}</h5>
                <p class="card-text ">{card.description}</p>

                <h2>{card.price}</h2>
                <a href="/contact" class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x" style={{marginBottom:"2px"}}target="_blank">
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
