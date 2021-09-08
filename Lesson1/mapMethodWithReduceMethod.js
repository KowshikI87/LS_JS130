function map(array, callback) {
  return array.reduce((accum, curntVal) => {
    accum.push(callback(curntVal));
    return accum;
  }, []);
}