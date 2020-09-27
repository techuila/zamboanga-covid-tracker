export default (arg, property) =>
  arg
    ? arg.reduce(
        (a, b) => ({
          [property]: parseInt(a[property] || 0) + parseInt(b[property] || 0)
        }),
        { [property]: 0 }
      )[property]
    : 0
