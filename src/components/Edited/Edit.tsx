// import React, { useState } from "react";

// interface Props {
//   name: string;
//   type: string;
//   price: number;
//   image: string;
// }

// function Edit() {
//   const [values, setValues] = useState(() => {
//     const data = JSON.parse(localStorage.getItem("data") || "{}");
//     return {
//       name: data.name || "",
//       type: data.type || "",
//       price: data.price || 0,
//       image: data.image || "",
//     };
//   });

//   return (
//     <div>
//       <div id="admin">
//         <div className="container">
//           <div className="admin">
//             <h1>ADD PRODUCT</h1>
//             <input
//               onChange={(e) => setValues({ ...values, name: e.target.value })}
//               placeholder="Name"
//               type="text"
//               value={values.name}
//             />
//             <input
//               onChange={(e) => setValues({ ...values, type: e.target.value })}
//               placeholder="Type"
//               type="text"
//               value={values.type}
//             />
//             <input
//               onChange={(e) =>
//                 setValues({ ...values, price: parseFloat(e.target.value) })
//               }
//               placeholder="Price"
//               type="text"
//               value={values.price}
//             />
//             <input
//               onChange={(e) => setValues({ ...values, image: e.target.value })}
//               placeholder="IMG url"
//               type="text"
//               value={values.image}
//             />
//             <button>CRAETE</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Edit;
