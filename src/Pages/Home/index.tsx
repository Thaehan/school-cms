import { useNavigate } from "react-router-dom";

const renderBody = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(<div className="container">Dat do da den day</div>);
  }
  return arr;
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/help")}>Help</button>
      {renderBody().map((item) => {
        return item;
      })}
    </div>
  );
}
