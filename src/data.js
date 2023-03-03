export function filterGender(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterAge (data, range) {
  const idades =   range.split("-")
  const min = Number(idades[0])
  const max = Number(idades[1])
  console.table(min,max)
  const grupo1 = data.filter(({ age }) => age  >= min && age <= max );
  return grupo1;
}

export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    else {
      return -1;
    }
  })
  return order;
}

export const descendingOrder = (data) => {
  return ascendingOrder(data).reverse()
}




