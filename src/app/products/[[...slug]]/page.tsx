type ProductPageProps = { params: { slug: string[] } };
type Products = {
  id: number;
  title: string;
  image: string;
  price: number;
};

async function getData() {
  // const response = await fetch("https://fakestoreapi.com/products");
  const response = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",
    next: {
      tags: ["products"],
      // revalidate: 30,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData();
  console.log(products);
  return (
    <>
      <h1 className="text-2xl text-center font-bold my-4">
        {params.slug ? "Detail Product Page" : "Products Page"}
      </h1>
      <div className="grid grid-cols-4 gap-6 px-5">
        {products.data.length > 0 &&
          products.data.map((product: Products) => {
            return (
              <div
                key={product.id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg object-cover h-96 w-full"
                    src={product.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $ {product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {params.slug && (
        <>
          <p>Category : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>Brand : {params.slug[2]}</p>
        </>
      )}
    </>
  );
}
