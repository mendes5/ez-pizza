const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const { REACT_APP_SERVER_PORT } = require("./utils/env");
const {
  isRecommendation,
  OPTIONS,
  getRandomRecommendation,
} = require("./utils/model");
const { getRandomPointCount } = require("./utils/random");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), 'build')));

const serverState = {
  userPoints: getRandomPointCount(),
  currentPointsToEarn: getRandomPointCount(),
  currentRecommendation: getRandomRecommendation(),
};

app.get("/user/point-count", (_, response) => {
  response.status(200).json(serverState.userPoints);
});

app.get("/pizza/options", (_, response) => {
  response.status(200).send(OPTIONS);
});

app.get("/pizza/recommendation", (_, response) => {
  response.status(200).send({
    points: serverState.currentPointsToEarn,
    pizza: serverState.currentRecommendation,
  });
});

app.post("/pizza", (request, response) => {
  const recommendationAccepted = isRecommendation(
    request.body,
    serverState.currentRecommendation
  );

  let pointsEarned = 0;

  if (recommendationAccepted) {
    pointsEarned = serverState.currentPointsToEarn;
    serverState.userPoints += serverState.currentPointsToEarn;
    serverState.currentPointsToEarn = getRandomPointCount();
    serverState.currentRecommendation = getRandomRecommendation();
  }

  response.status(201);
  response.json({
    recommendationAccepted,
    pointsEarned,
  });
  response.end();
});

app.listen(REACT_APP_SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${REACT_APP_SERVER_PORT}`);
});
