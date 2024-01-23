import { useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { modelImageSlider } from "../../atoms";

import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
const IMAGESm = [img1, img2, img3, img4];

// Thumbnail-img
import imgT1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgT2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgT3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgT4 from "../../assets/images/image-product-4-thumbnail.jpg";
const TIMAGESm = [imgT1, imgT2, imgT3, imgT4];

import previous from "../../assets/images/left-arrow.png";
import next from "../../assets/images/right-arrow.png";

export function ImageSliderComponent() {
  const [imageIndx, setImageIndx] = useState(0);

  function previousImg(e) {
    e.preventDefault();
    if (imageIndx === 0) {
      setImageIndx(IMAGESm.length - 1);
    } else {
      setImageIndx(imageIndx - 1);
    }
  }

  function nextImg(e) {
    e.preventDefault();
    if (imageIndx === IMAGESm.length - 1) {
      setImageIndx(0);
    } else {
      setImageIndx(imageIndx + 1);
    }
  }

  function changeImg(e) {
    const index = Number(e.currentTarget.dataset.id);
    setImageIndx(index);
  }

  // model img state
  const [modelState, setModelState] = useRecoilState(modelImageSlider);

  function closeModel() {
    setModelState(false);
  }

  return (
    <>
      <div
        className={`model-background ${
          modelState ? "model-background-display" : null
        }`}
        onClick={closeModel}
      ></div>
      <div
        className={`container model-container ${
          modelState ? "model-container-display" : null
        }`}
      >
        <button className="menu-close model-menu-close" onClick={closeModel}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              className="model-close-img"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="image-container model-img-container">
          <div className="slides">
            {IMAGESm.map((img) => {
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

          <a href="" className="previous model-previous">
            <img src={previous} alt="privious" onClick={previousImg} />
          </a>
          <a href="" className="next model-next">
            <img src={next} alt="privious" onClick={nextImg} />
          </a>
        </div>
        <div className="img-thumbnail-container">
          {TIMAGESm.map((img, i) => {
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
