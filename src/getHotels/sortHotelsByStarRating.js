const sortOrderToInt = (sortOrder) => {
  if (sortOrder === 'asc') return 1;
  return -1;
};

export default (sortOrder, h) => {
  const isAsc = sortOrderToInt(sortOrder);
  return h.slice().sort((l, r) => isAsc * (l.starRating - r.starRating));
};