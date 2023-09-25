import { AiOutlineArrowUp } from "react-icons/ai";
import "./goback.css";

const GoBack = () => {
  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sticky__button" onClick={goUp}>
      <AiOutlineArrowUp size={20} />
    </div>
  );
};

export default GoBack;
