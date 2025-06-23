type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <>
      <h1>{params.slug ? "Detail Product Page" : "Products Page"}</h1>
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
