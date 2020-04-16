import React, { useRef } from "react";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";
import Tsundoku01 from "../../../Images/Tsundoku/Tsundoku-01.png";
import Tsundoku02 from "../../../Images/Tsundoku/Tsundoku-02.png";
import Tsundoku03 from "../../../Images/Tsundoku/Tsundoku-03.png";
import Tsundoku04 from "../../../Images/Tsundoku/Tsundoku-04.png";
import Tsundoku05 from "../../../Images/Tsundoku/Tsundoku-05.png";

export const Tsundoku = () => {
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
          Tsundoku (Japanese: 積ん読) means acquiring reading materials but
          letting them pile up in one’s home without reading them. It is the
          name of the University Magazine of BMU. It is an initiative by the
          Literary, Quizzing and Debating Club, called LiQuiD.
        </p>
        <br />
        <p>
          Tsundoku is the culmination of student’s thoughts, writings, how the
          university clubs contributed to the campus life and lastly,
          pop-culture reviews. Tsundoku brings people of varying interests on a
          common platform.
        </p>
        <br />
        <p>
          “I designed the third edition of this magazine in 2019, I learnt what
          changes are to be put in mind while designing a magazine that is going
          to printed and how different it is from the RGB world.”
        </p>
      </div>
      <div className="carousel">
        <SnapList ref={snapList}>
          <SnapItem
            margin={{
              left: "0vw",
              right: "var(--right-margin-tsundoku-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
              <div className="Tsundoku-image-placeholder">
                <img
                  className="Tsundoku-image"
                  src={Tsundoku02}
                  alt="Tsundoku02"
                />
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
              <div className="Tsundoku-image-placeholder">
                <img
                  className="Tsundoku-image"
                  src={Tsundoku03}
                  alt="Tsundoku03"
                />
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
              <div className="Tsundoku-image-placeholder">
                <img
                  className="Tsundoku-image"
                  src={Tsundoku05}
                  alt="Tsundoku05"
                />
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
              <div className="Tsundoku-image-placeholder">
                <img
                  className="Tsundoku-image"
                  src={Tsundoku04}
                  alt="Tsundoku04"
                />
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
            <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
              <div className="Tsundoku-image-placeholder">
                <img
                  className="Tsundoku-image"
                  src={Tsundoku01}
                  alt="Tsundoku01"
                />
              </div>
            </MyItem>
          </SnapItem>
        </SnapList>
      </div>
    </div>
  );
};
