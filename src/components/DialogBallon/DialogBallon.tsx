import React, { useCallback, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Arrow from "../icons/Arrow";
import style from "./DialogBallon.module.scss";

interface Props {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  width?: string;
  height?: string;
  words: string[];
  onLoopDone?: () => void;
  onClick?: () => void;
  visible?: boolean;
}
const DialogBallon: React.FC<Props> = ({
  type,
  width,
  height,
  words,
  onLoopDone = () => {},
  onClick = () => {},
  visible = true,
}) => {
  const Element = type;
  const [showArrow, setShowArrow] = useState(false);
  const [dialoghasEnded, setDialoghasEnded] = useState(false);

  const handleLoopDone = useCallback(() => {
    setShowArrow(true);
    setDialoghasEnded(true);
    onLoopDone();
  }, [onLoopDone]);

  const handleClick = useCallback(() => {
    if (dialoghasEnded) {
      onClick();
    }
  }, [dialoghasEnded, onClick]);

  return (
    <>
      {visible && (
        <div
          className={`nes-container is-rounded ${style.ballon}`}
          style={{
            width,
            height,
          }}
          onClick={handleClick}
        >
          <Element>
            <Typewriter
              words={words}
              loop={1}
              cursor={false}
              deleteSpeed={0}
              onLoopDone={handleLoopDone}
              typeSpeed={50}
            />
          </Element>
          <div className={`${style.arrow} ${showArrow ? style.showing : ""}`}>
            <Arrow size={30} rotate={90} />
          </div>
        </div>
      )}
    </>
  );
};

export default DialogBallon;
