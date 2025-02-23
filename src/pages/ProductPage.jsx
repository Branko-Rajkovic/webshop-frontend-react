import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/headersAndNavigation/Header";
import { useContext } from "react";
import { CartContext } from "../store/cartContext";
import { motion } from "framer-motion";

export default function ProductPage() {
  const params = useParams();
  const { addItemToCart } = useContext(CartContext);

  const { data, error } = useFetchData(
    `https://fakestoreapi.com/products/${params.id}`
  );

  console.log(data);
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header />
        <div className="flex w-auto m-8">
          <div className="w-1/2 product">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="w-1/2 p-4 bg-[#6b5d4b] m-4 rounded-md">
            <div className="product-content">
              <h3>{data.category}</h3>
              <p>Rating: {data?.rating?.rate}</p>
              <p>Votes: {data?.rating?.count}</p>
              <div>
                <h3>{data.title}</h3>
                <p className="product-price">${data.price}</p>
              </div>
              <p>{data.description}</p>

              <p className="product-actions">
                <button
                  onClick={() =>
                    addItemToCart({
                      id: data.id,
                      image: data.image,
                      title: data.title,
                      price: data.price,
                      description: data.description,
                    })
                  }
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mx-4 text-xl font-semibold">Coments</h3>

          <ul></ul>
        </div>
      </div>
    </motion.div>
  );
}
