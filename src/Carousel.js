import { useState } from "react";
import "./Carousel.css";
import photos from "./photos";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ pics = photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [isShown, setIsShown] = useState(false); // toggles hiding an element

  const currCard = pics[currCardIdx];
  const total = pics.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  };

  //Reduces currCardIdx state by 1
  const goBackward = () => {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx > 0 && (
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
          />          
        )}

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />

        {currCardIdx < total - 1 && (
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
          />
        )}

      </div>
    </div>
  );
}

export default Carousel;
