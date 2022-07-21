const data = {
  user: {
    id: 0,
    userInfos: {
      firstName: "",
      lastName: "",
      age: 0,
    },
    score: 0.12,
    keyData: {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
  },
  sessions: [
    { day: 1, sessionLength: 0 },
    { day: 2, sessionLength: 0 },
    { day: 3, sessionLength: 0 },
    { day: 4, sessionLength: 0 },
    { day: 5, sessionLength: 0 },
    { day: 6, sessionLength: 0 },
    { day: 7, sessionLength: 0 },
  ],
  activity: [
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
    { day: "2020-01-01", kilogram: 0, calories: 0 },
  ],
  kind: {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  },
  performance: [
    { value: 0, kind: 1 },
    { value: 0, kind: 2 },
    { value: 0, kind: 3 },
    { value: 0, kind: 4 },
    { value: 0, kind: 5 },
    { value: 0, kind: 6 },
  ],
};

export default data;
