import coursesDB from "./coursesDB.js";

const uneFonctionQuiLit = async () => {
  const data = await coursesDB.get();
  console.log(data);
};

const uneFonctionQuiEcrit = async (courses) => {
  const data = await coursesDB.set([
    {
      id: 2,
      nom: "kayak",
    },
  ]);
};
