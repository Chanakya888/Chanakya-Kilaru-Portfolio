import React, { useRef } from "react";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";
import Donut01 from "../../../Images/Donut/Donut-1.png";
import Donut02 from "../../../Images/Donut/Donut-2.png";
import Donut03 from "../../../Images/Donut/Donut-3.png";
import Donut04 from "../../../Images/Donut/Donut-4.png";
import Donut05 from "../../../Images/Donut/Donut-5.png";

export const Donut = () => {
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
          Donut is a food delivery application where the students of the BML
          Munjal University can order and the students who are outside that day
          can opt to deliver the food. Chanakya and his senior, Kushagra Dhawan
          designed this application. Fun fact: Kushagra worked hard to get into
          Star Trek but never go through our rigorous tests.
        </p>
        <br />
        <p>
          “Spending time in a university, it’s pretty commonplace to feel
          alienated from the outside world. the worst part is not being able to
          have good food reminiscent of home; and that’s how we came up with
          Donut. Donut was our attempt at making a self- managed platform for
          procuring and satisfying the food cravings at BMU. Its an app much
          like other food delivery system. The delivery man who are the students
          of the university receives a bit of compensation as per his/her own
          demand, providing him a chance to earn a quick buck and satisfy the
          food craving of the students back at the university.”
        </p>
        <br />
        <p>
          “I learnt to build low fidelity and high fidelity prototypes for the
          first time, I had an amazing time putting in thoughts, ideas, thinking
          what would be this a better experience to use and testing the
          prototypes.”
        </p>
      </div>
      <div className="carousel">
        <SnapList ref={snapList}>
          <SnapItem
            margin={{ left: "10vw", right: "var(--right-margin-carousel)" }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
              {" "}
              <div className="Donut-image-placeholder">
                <img className="Donut-image" src={Donut01} alt="Donut01" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-carousel)",
              right: "var(--right-margin-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}>
              <div className="Donut-image-placeholder">
                <img className="Donut-image" src={Donut02} alt="Donut01" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-carousel)",
              right: "var(--right-margin-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
              <div className="Donut-image-placeholder">
                <img className="Donut-image" src={Donut03} alt="Donut01" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{
              left: "var(--left-margin-carousel)",
              right: "var(--right-margin-carousel)",
            }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}>
              <div className="Donut-image-placeholder">
                <img className="Donut-image" src={Donut04} alt="Donut01" />
              </div>
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{ left: "var(--left-margin-carousel)", right: "5vw" }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
              <div className="Donut-image-placeholder">
                <img className="Donut-image" src={Donut05} alt="Donut01" />
              </div>
            </MyItem>
          </SnapItem>
        </SnapList>
      </div>
    </div>
  );
};
