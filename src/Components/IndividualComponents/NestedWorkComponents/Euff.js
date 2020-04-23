import React, { useRef } from "react";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";
/* eslint-disable */
import Euff01 from "../../../Images/Euff/Euff-01-min.png";
import Euff02 from "../../../Images/Euff/Euff-02-min.png";
import Euff03 from "../../../Images/Euff/Euff-03-min.png";
import Euff04 from "../../../Images/Euff/Euff-04-min.png";
import Euff05 from "../../../Images/Euff/Euff-05-min.png";
import Euff06 from "../../../Images/Euff/Euff-06-min.png";
export const Euff = () => {
  const MyItem = ({ onClick, children, visible }) => (
    <div
      style={{
        cursor: visible ? "default" : "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const goToSnapItem = useScroll({ ref: snapList });

  return (
    <div className="Return-command-container">
      <div>
        <p>
          This was Chanakya’s first project during his internship at this place
          as cool as our Enterprise ship, Wishbox Studio. European Union Film
          Festival is organised annually by the EU Delegation of India. Chanakya
          was assigned to design and develop the website.
        </p>
        <br />
        <p>
          <q>
            It was my first internship, I was excited to learn and work on new
            things, which is exactly what I did, I got the opportunity and
            support to design prototypes, rework on them after taking reviews
            from the client, and developed the website.
          </q>
        </p>
        <a
          href="https://euffindia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="Visit-link">Visit the website</h1>
        </a>
      </div>
      <div className="carousel">
        <SnapList ref={snapList}>
          <SnapItem
            margin={{ left: "0vw", right: "var(--right-margin-carousel)" }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff01} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-tsundoku-carousel)",
              right: "var(--right-margin-tsundoku-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff02} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-tsundoku-carousel)",
              right: "var(--right-margin-tsundoku-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff03} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-tsundoku-carousel)",
              right: "var(--right-margin-tsundoku-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff04} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-tsundoku-carousel)",
              right: "var(--right-margin-tsundoku-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff06} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-tsundoku-carousel)",
              right: "5vw",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(5)} visible={visible === 5}>
              <div className="Euff-image-placeholder">
                <img className="Euff-image" src={Euff05} alt="Euff-image" />
              </div>
            </MyItem>
          </SnapItem>
        </SnapList>
      </div>
    </div>
  );
};
