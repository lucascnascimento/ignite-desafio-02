import { rest } from "msw";

const PRODUCTS_LIST = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/expresso.svg",
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/americano.svg",
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/expresso-cremoso.svg",
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", "Gelado"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/cafe-gelado.svg",
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/cafe-com-leite.svg",
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/latte.svg",
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/capuccino.svg",
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/macchiato.svg",
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/mocaccino.svg",
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", "Com Leite"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/chocolate-quente.svg",
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", "Alcoólico", "Gelado"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/cubano.svg",
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/havaiano.svg",
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/arabe.svg",
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", "Alcoólico"],
    valueCents: 990,
    isAvailable: true,
    imgSrc: "src/assets/images/products/irlandes.svg",
  },
];

const getProducts = rest.get(
  "https://coffee-delivery.com/api/products",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: PRODUCTS_LIST,
      })
    );
  }
);

const postPurchase = rest.post(
  "https://coffee-delivery.com/api/checkout",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        purchaseId: 1321312,
      })
    );
  }
);

export const productHandlers = [getProducts, postPurchase];
