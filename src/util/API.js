import axios from 'axios';

// const requestHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json",
// };

const request = async (endpoint, body) => {
  let url = `http://127.0.0.1:8000/api/${endpoint}/pullups`;
  let pullups = {

    gender: body.gender,
    age: body.age,
    reps: body.pullups,
    score: "0"
  }
  let response = await axios.post(url, pullups);
  return response.data;
};

export const getPFTScores = async (scores) => {
  let eventScores = {};
  eventScores[scores.firstEvent] = scores.firstEventCount;
  eventScores[scores.secondEvent] = scores.secondEventCount;
  eventScores[scores.thirdEvent] = scores.thirdEventCount;
  eventScores["age"] = scores.age;
  eventScores["high_alt"] = scores.high_alt;
  eventScores["gender"] = scores.gender;
  const body = eventScores;
  console.log(body)
  let response = await request("pft", "POST", body);

  return response;
};

export const getCFTScores = async (scores) => {
  const body = JSON.stringify({
    mtc: scores.mtc,
    muf: scores.muf,
    ammo: scores.ammo,
    age: scores.age,
    high_alt: scores.high_alt,
    gender: scores.gender,
  });
  let response = await request("cft", "POST", body);
  return response;
};
