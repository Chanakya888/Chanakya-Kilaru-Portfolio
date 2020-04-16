import React, { useRef } from "react";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";

export const Tedx = () => {
  const MyItem = ({ onClick, children, visible }) => (
    <div
      style={{
        width: "60vw",
        height: 200,
        background: visible ? "#bce6fe" : "#cccccc",
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
          Chanakya is the president of Club Sierra, which organises TEDxBMU and
          MUNs. Chanakya worked as a video editor for TEDxBMU in 2017 and 2018.
        </p>
        <br />
        <p>
          “I am personally very attached to TEDxBMU, TEDxBMU was the first event
          that I participated after joining the university back in 2017. I
          worked as a video editor for the first two TEDxBMUs, after which I
          worked with my seniors in organising the annual TEDx in 2019. I learnt
          professional video editing using Final Cut Pro X and making animations
          for promotions and intro for the videos, I was exposed to all the
          rigorous work that goes into editing a video, watching the video
          multiple times, syncing two cameras and an external audio.“
        </p>
      </div>
      <div className="carousel">
        <SnapList ref={snapList}>
          <SnapItem
            margin={{ left: "10vw", right: "var(--right-margin-carousel)" }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
              Item 0
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
              Item 1
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
              Item 2
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
              Item 3
            </MyItem>
          </SnapItem>
          <SnapItem
            margin={{ left: "var(--left-margin-carousel)", right: "20vw" }}
            snapAlign="center"
          >
            <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
              Item 4
            </MyItem>
          </SnapItem>
        </SnapList>
      </div>
    </div>
  );
};
