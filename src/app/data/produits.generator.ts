import { faker } from "@faker-js/faker";
import { simpleProduct } from "../interfaces/produits";

function createProduct(): simpleProduct {
  const hasPromo = faker.datatype.boolean();
  return {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.imageUrl(640, 400, 'technics', true),
  price:faker.commerce.price(),
  category:faker.commerce.department(),
  promo: hasPromo,
  promoval:hasPromo ? faker.datatype.number({min:10, max:60}) : undefined,    // le ? montre que l'element est optionel
};
}

export function createProducts(nbreprod: number=10): simpleProduct[]
{
  return faker.helpers.multiple(createProduct, {
    count: nbreprod
  })
}
