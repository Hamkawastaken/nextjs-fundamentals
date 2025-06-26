import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sapatu Nike",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 2,
    title: "Sapatu Puma",
    price: 1500000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 3,
    title: "Sapatu Adidas",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 4,
    title: "Sapatu Reebok",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 5,
    title: "Sapatu Reebok",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 6,
    title: "Sapatu Reebok",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 7,
    title: "Sapatu Reebok",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 8,
    title: "Sapatu Reebok",
    price: 1200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b42ca8-ba29-4f2c-9c1b-7747badc43bc/NIKE+DUNK+LOW+RETRO.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }
  return NextResponse.json({ status: "200", message: "succes", data });
}
