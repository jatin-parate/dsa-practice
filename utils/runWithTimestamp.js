module.exports = (fn, callback = console.log, label = "start") => {
  console.time(label);
  const result = fn();
  console.timeEnd(label);
  if (callback) {
    callback(result);
  }
};
