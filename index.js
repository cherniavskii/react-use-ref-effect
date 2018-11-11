var { useEffect, useRef } = require('react');

module.exports = function useRefEffect(fn, inputs) {
  var ref = useRef(null);
  useEffect(fn, inputs);
  return ref;
};
