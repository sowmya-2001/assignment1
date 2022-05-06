import { Link, useLocation } from "react-router-dom";

const SecondScreen = () => {
  const data: any = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Country {data.state[0]["name"]["common"]} </h2>
      <h4>Population : {data.state[0]["population"]}</h4>
      <h4>Latitude : {data.state[0]["latlng"][0]}</h4>
      <h4>Longitude : {data.state[0]["latlng"][1]}</h4>
      <h4>Flag:</h4>
      <img
        src={data.state[0]["flags"]["png"]}
        style={{ border: "1px solid black", margin: "8px" }}
      />

      <Link
        style={{
          borderRadius: "8px",
          padding: "5px 10px",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "14px",
          margin: "6px 10px",
          background: "grey",
        }}
        to={`third-screen`}
        state={data.state[0]["capital"][0]}
      >
        {data.state[0]["capital"][0]}
      </Link>
    </div>
  );
};

export default SecondScreen;
