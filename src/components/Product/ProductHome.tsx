import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  name: string;
  type: string;
  price: number;
  image: string;
  bull: boolean;
  id: number;
}

function ProductHome() {
  const [data, setData] = useState<Props[]>(
    JSON.parse(localStorage.getItem("sass") || "[]")
  );

  const [favorites, setFavorites] = useState<Props[]>(
    JSON.parse(localStorage.getItem("favor") || "[]")
  );

  function addFavorite(id: number) {
    const favAdd = favorites.some((product) => product.id === id);
    if (favAdd) {
      return;
    }
    const favProduct = data.find((product) => product.id === id);
    if (favProduct) {
      const upFavorites = [...favorites, favProduct];
      setFavorites(upFavorites);
      localStorage.setItem("favor", JSON.stringify(upFavorites));
    }
  }

  function deleteProduct(id: number) {
    const newData = data.filter((el) => el.id !== id);
    setData(newData);
    localStorage.setItem("sass", JSON.stringify(newData));
  }

  const [mode, setMode] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);

  const [values, setValues] = useState(() => {
    const editData = JSON.parse(localStorage.getItem("sass") as string);
    return {
      id: 0,
      name: editData.name || "",
      type: editData.type || "",
      price: editData.price || 0,
      image: editData.image || "",
    };
  });

  function createEdit(id: number) {
    const newData = data.map((el) => {
      if (el.id === id) {
        return { ...el, ...values };
      }
      return el;
    });
    setData(newData);
    localStorage.setItem("sass", JSON.stringify(newData));
    setMode(false);
  }

  function addLike(id: number) {
    const newLike = data.map((el) => {
      if (el.id === id) {
        return { ...el, bull: !el.bull };
      }
      return el;
    });
    setData(newLike);
    localStorage.setItem("sass", JSON.stringify(newLike));
  }

  function removeFavorite(id: number) {
    const upFavorite = favorites.filter((el) => el.id !== id)
    setFavorites(upFavorite)
    localStorage.setItem("favor" , JSON.stringify(upFavorite))
  }

  return (
    <div>
      <div id="home">
        <div className="container">
          <div
            style={{
              display: mode ? "flex" : "none",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="mode"
          >
            <div className="bac">
              <ReplyAllIcon
                sx={{
                  background: "black",
                  color: "white",
                  borderRadius: "100%",
                  width: "28px",
                }}
                onClick={() => setMode(false)}
              />
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                EDIT
              </h1>
              <CloseIcon
                sx={{
                  background: "black",
                  color: "white",
                  borderRadius: "100%",
                }}
                onClick={() => setMode(false)}
              />
            </div>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Name"
              type="text"
              value={values.name}
              id=""
            />
            <input
              onChange={(e) => setValues({ ...values, type: e.target.value })}
              placeholder="Type"
              type="text"
              value={values.type}
              id=""
            />
            <input
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              placeholder="Price"
              type="text"
              value={values.price}
              id=""
            />
            <input
              onChange={(e) => setValues({ ...values, image: e.target.value })}
              placeholder="IMG url"
              type="text"
              value={values.image}
              id=""
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "80px",
              }}
              className="mode-btn"
            >
              <button onClick={() => createEdit(values.id)}>CREATE</button>
            </div>
          </div>
          <div
            style={{ filter: mode ? "blur(5px)" : "blur(0px)" }}
            className="home"
          >
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
                    style={{ background: "none" }}
                    onClick={() => deleteProduct(el.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </button>
                  <button
                    onClick={() => {
                      setMode(true);
                      setValues(el);
                    }}
                    style={{ background: "none" }}
                  >
                    <EditNoteIcon sx={{ color: "green" }} />
                  </button>
                  <button
                    style={{ background: "none" }}
                    onClick={() => {
                      if (el.bull) {
                        removeFavorite(el.id)
                      } else {
                        addFavorite(el.id);
                      }
                      addLike(el.id);
                    }}
                  >
                    {el.bull ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: "white" }} />
                    )}
                  </button>
                  <AddShoppingCartIcon sx={{ color: "gold" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
