import React from "react";
import "./card.css";
import CardImage from "../assets/images/illustration-article.svg";
import Avatar from "../assets/images/image-avatar.webp";

function Card() {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={CardImage} alt="CardImage" />
      </div>
      <div className="card__info">
        <div className="card__info_type">
          <p>Learning</p>
        </div>
        <div className="card__info_date">
          <p>Published 21 Dec 2023</p>
        </div>
        <div className="card__info_code">
          <p>HTML & CSS foundations</p>
        </div>
        <div className="card__info_text">
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="card__info_avatar">
          <img src={Avatar} alt="avatar" />
          <p>Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
