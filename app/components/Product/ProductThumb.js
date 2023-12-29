"use client";

import { productAddToCart } from "@/app/store/CartSlice/CartThunks";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";

export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ProductThumb({ product }) {
  const dispatch = useDispatch();
  const { selling_price, name, picture, id } = product;

  const handleAddToCart = (id) => () => {
    console.log("handleAddToCart");
    const user = localStorage.getItem("user");
    let user_id = user ? user.id : uuid();
    localStorage.setItem("user", JSON.stringify({ id }));

    dispatch(
      productAddToCart({
        product_id: id,
        user_id,
      })
    );
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={picture || "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"}
          alt={name}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            {USDollar.format(selling_price)}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={handleAddToCart(id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
