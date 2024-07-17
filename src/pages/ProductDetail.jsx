import Input from "../components/Input";

const data = {
  id: 1,
  name: "Earthen Bottle",
  href: "#",
  price: "$48",
  size: [24, 35, 50],
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  imageAlt:
    "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
};

const ProductDetail = () => {
  return (
    <div className="flex justify-center items-center w-full h-3/4">
      <div className="bg-slate-500 flex w-3/6 rounded-md">
        <div className="image size-2/5 mr-3">
          <img
            className="w-screen rounded-md"
            src={data.imageSrc}
            alt={data.imageAlt}
          />
        </div>
        <div className="detail-info ml-3 py-3">
          <div className="name ml-2 text-5xl">
            <p>{data.name}</p>
          </div>
          <div className="price ml-2 my-3 text-2xl">
            <p>{data.price}</p>
          </div>
          <div className="size flex ml-2 mb-5">
            {data.size.map((item) => (
              <div
                key={item}
                className="cursor-pointer bg-white text-black hover:bg-gray-400 p-2 mr-2 mt-1"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="quatity  ml-2">
            <Input type="number" className="mb-5 w-16" />
          </div>
          <div className="button-cart  ml-2">
            <a className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
