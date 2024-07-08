/* eslint-disable react/prop-types */
const Product = (props) => {
  return (
    <>
      <a key={props.item.id} href={props.item.href} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={props.item.imageAlt}
            src={props.item.imageSrc}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-white-700">{props.item.name}</h3>
        <p className="mt-1 text-lg font-medium text-slate-200">
          {props.item.price}
        </p>
      </a>
    </>
  );
};

export default Product;
