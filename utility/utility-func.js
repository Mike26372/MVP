
module.exports = {
  sortByCompleteComparator: function(a, b) {
    if (a.completed === b.completed) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a.completed) {
        return 1;
      } else {
        return -1;
      }
    } 
  }
}
