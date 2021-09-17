import { useEffect, useState } from "react";
import { useInterval } from "react-use";
import styled, { keyframes } from "styled-components";

const REACT_VAL = "REACT".split("");
const NEXT_VAL = "NODEJS".split("");

const TextAnimation = () => {
  const [count, setCount] = useState(0);
  const [charVal, setCharVal] = useState(REACT_VAL);
  const [play, setPlay] = useState(false);

  useInterval(
    () => {
      setCharVal(REACT_VAL);
      setCount(count + 1);

      if (count === 1) {
        setCount(0);
        setCharVal(NEXT_VAL);
      }
    },
    play ? 6000 : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCharVal(NEXT_VAL);
      setPlay(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Wrapper>
      {charVal.map((key) => {
        return <span key={key}>{key}</span>;
      })}
    </Wrapper>
  );
};

export default TextAnimation;
const animation = keyframes`
    0% {opacity:0;transform:translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);filter:blur(5px);}
    25% {opacity:1;transform:translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);filter:blur(0px);}
    75% {opacity:1;transform:translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);filter:blur(0px);}
    100% {opacity:0;transform:translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);filter:blur(5px);}
    `;
const Wrapper = styled.span`
  display: inline-block;
  color: #0ff;
  font-weight: bold;
  span {
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-child(1) {
    animation-delay: 0.3s;
  }
  span:nth-child(2) {
    animation-delay: 0.6s;
  }
  span:nth-child(3) {
    animation-delay: 0.9s;
  }
  span:nth-child(4) {
    animation-delay: 1.2s;
  }
  span:nth-child(5) {
    animation-delay: 1.5s;
  }
`;
