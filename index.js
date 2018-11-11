var { useEffect, useRef } = require('react');

module.exports = function useRefEffect(fn, inputs) {
  var ref = useRef(null);

  useEffect(() => {
    ref.current = fn();
  }, inputs || null);

  return ref;
};
