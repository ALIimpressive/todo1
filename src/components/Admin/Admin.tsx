import React, { useState } from "react";
import "./admin.css";

interface Props {
  name: string;
  type: string;
  price: number;
  image: string;
  bull:boolean
}

function Admin() {
  const [values, setValues] = useState<Props>({
    name: "",
    type: "",
    price: 0,
    image: "",
    bull:false
  });
  function addPoduct() {
    let data = JSON.parse(localStorage.getItem("sass") || "[]");
    data.push({ ...values, id: Date.now() });
    localStorage.setItem("sass", JSON.stringify(data));
  }
  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h1>ADD PRODUCT</h1>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Name"
              type="text"
              name=""
              id=""
            />
            <input
              onChange={(e) => setValues({ ...values, type: e.target.value })}
              placeholder="Type"
              type="text"
              name=""
              id=""
            />
            <input
              onChange={(e) =>
                setValues({ ...values, price: parseFloat(e.target.value) })
              }
              placeholder="Price"
              type="text"
              name=""
              id=""
            />
            <input
              onChange={(e) => setValues({ ...values, image: e.target.value })}
              placeholder="IMG url"
              type="text"
              name=""
              id=""
            />
            <button onClick={addPoduct}>CRAETE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
