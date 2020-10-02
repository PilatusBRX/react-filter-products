import React from "react";
import Product from "./Product";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const Products = ({ products }) => {
  return (
    <div className='container '>
      {products.map((item) =>
        item.filtered === true ? <Product item={item} key={item.id} /> : ""
      )}
    </div>
  );
};

export default Products;

// import React from "react";
// import Product from "./Product";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// const Products = ({ products }) => {
//   return (
//     <TransitionGroup className='container'>
//       {products.map((item) =>
//         item.filtered === true ? (
//           <CSSTransition key={item.id} timeout={400} classNames='item'>
//             <Product item={item} />
//           </CSSTransition>
//         ) : (
//           ""
//         )
//       )}
//     </TransitionGroup>
//   );
// };

// export default Products;
