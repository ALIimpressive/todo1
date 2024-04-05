import React, { useState } from "react";
import "./product.css";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  name: string;
  type: string;
  price: 0;
  image: string;
  id: 0;
}

function ProductFavor() {
  const [data, setData] = useState<Props[]>(
    JSON.parse(localStorage.getItem("favor") || "[]")
  );

  function addDelete(id: number) {
    let newData = data.filter((el) => el.id !== id);
    setData(newData)
    localStorage.setItem("favor", JSON.stringify(newData));
  }

  return (
    <div>
      <div className="favor">
        <div className="container">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px ",
            }}
          >
            FAVORITE
          </h1>
          <div className="favor">
            {data.map((el) => (
              <div className="card" key={el.id}>
                <img
                  style={{ width: "300px", borderRadius: "10px" }}
                  src={el.image}
                  alt=""
                />
                <div className="card-text">
                  <h1>{el.name}</h1>
                  <h3 style={{ color: "#345678" }}>{`${el.price}$`}</h3>
                  <h3>{el.type}</h3>
                </div>
                <div className="crud">
                  <button
                    onClick={() => addDelete(el.id)}
                    style={{
                      background: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "red",
                      width: "90px",
                      height: "30px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    <DeleteIcon sx={{ color: "white" }} />
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFavor;
