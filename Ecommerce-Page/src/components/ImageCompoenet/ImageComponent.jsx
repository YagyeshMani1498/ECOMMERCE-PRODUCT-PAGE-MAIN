import { useState } from "react";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
const IMAGES = [img1, img2, img3, img4];

// Thumbnail-img
import imgT1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgT2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgT3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgT4 from "../../assets/images/image-product-4-thumbnail.jpg";
const TIMAGES = [imgT1, imgT2, imgT3, imgT4];

import previous from "../../assets/images/left-arrow.png";
import next from "../../assets/images/right-arrow.png";

export function ImageComponent() {
  const [imageIndx, setImageIndx] = useState(0);

  function previousImg(e) {
    e.preventDefault();
    if (imageIndx === 0) {
      setImageIndx(IMAGES.length - 1);
    } else {
      setImageIndx(imageIndx - 1);
    }
  }

  function nextImg(e) {
    e.preventDefault();
    if (imageIndx === IMAGES.length - 1) {
      setImageIndx(0);
    } else {
      setImageIndx(imageIndx + 1);
    }
  }

  function changeImg(e) {
    const index = Number(e.currentTarget.dataset.id);
    setImageIndx(index);
  }

  return (
    <>
      <div className="container">
        <div className="image-container">
          <div className="slides">
            {IMAGES.map((img) => {
              return (
                <img
                  key={img}
                  src={img}
                  className="slide-img"
                  style={{
                    transform: `translateX(${-100 * imageIndx}%)`,
                    transition: `transform 300ms ease-in-out`,
                  }}
                />
              );
            })}
          </div>

          <a href="" className="previous">
            <img src={previous} alt="privious" onClick={previousImg} />
          </a>
          <a href="" className="next">
            <img src={next} alt="privious" onClick={nextImg} />
          </a>
        </div>
        <div className="img-thumbnail-container">
          {TIMAGES.map((img, i) => {
            return (
              <button
                key={i + 1}
                className={`thumbnail-button ${
                  i === imageIndx ? "thumbnail-border" : null
                }`}
                data-id={i}
                onClick={changeImg}
              >
                <img
                  src={img}
                  alt="thumbnail-img"
                  className={`${i === imageIndx ? "thumbnail-img" : null}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
