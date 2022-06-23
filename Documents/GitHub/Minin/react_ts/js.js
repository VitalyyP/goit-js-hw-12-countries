const data = [
  {
    title: "title1",
    id: 1,
    completed: true,
  },
  {
    title: "title2",
    id: 2,
    completed: true,
  },
  {
    title: "title3",
    id: 3,
    completed: true,
  },
];

const toggleCompleted = (arr, id) =>
  arr.map((obj) => {
    if (obj.id === id) {
      obj.completed = !obj.completed;
    }
    return obj;
  });
console.log(toggleCompleted(data, 3));
