import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = ({ look }) => {
  const { products } = useLoaderData();

  return (
    <div
      className={`${
        look === "grid" && "pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      } ${look === "list" && "mt-12 grid gap-y-8"}`}
    >
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className={`${
              look === "grid" &&
              "card w-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
            }
            ${
              look === "list" &&
              "p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out group"
            }
            `}
          >
            <figure
              className={`${look === "grid" && "pt-4 px-4"} ${
                look === "list" && "pt-0 px-0"
              }`}
            >
              <img
                src={image}
                alt={title}
                className={`${
                  look === "grid" &&
                  "rounded-xl h-64 md:h-48 w-full object-cover"
                } ${
                  look === "list" &&
                  "rounded-lg h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                }`}
              />
            </figure>
            {look === "grid" && (
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">
                  {title}
                </h2>
                <span className="text-secondary">{dollarsAmount}</span>
              </div>
            )}
            {look === "list" && (
              <>
                <div className="ml-0 sm:ml-16">
                  <h3 className="capitalize font-medium text-lg">{title}</h3>
                  <h4 className="capitalize text-md text-neutral-content">
                    {company}
                  </h4>
                </div>
                <p className="font-medium ml-0 sm:ml-auto text-lg">
                  {dollarsAmount}
                </p>
              </>
            )}
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
