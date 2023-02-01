import { linkApi, gameID } from './api.js';

const setScore = async (gamerScore) => {
  try {
    const res = await fetch(`${linkApi + gameID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(gamerScore),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default setScore;