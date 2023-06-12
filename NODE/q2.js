exports.add = (a,b) => {
    return a+b;
}

exports.sub = (a,b) => {
    return a-b;
}

exports.mult = (a,b) => {
    return a*b;
}

exports.div = (a,b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
    return a/b;
}
