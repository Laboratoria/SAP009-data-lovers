// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterTags = (data,typeData, condition) => data.filter((tag) => {
  return (tag[typeData] === condition);
})

export function filterData(dataArray, key, value) {  return dataArray.filter(item => item[key] === value);}
