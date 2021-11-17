function OrderArray(props) {
  props.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  return props;
}

export default OrderArray;
