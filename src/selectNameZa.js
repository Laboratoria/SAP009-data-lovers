import { orderName } from "./data";

export function selectNameZa(characters) {
  return characters.sort(orderName).reverse();
}
