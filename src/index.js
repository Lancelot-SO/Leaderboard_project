import './style.css';
import setScore from './module/setScore.js';
import getScore from './module/getScore.js';
import showScore from './module/showScore.js';

const userScore = document.getElementById('user');
const score = document.getElementById('score');
const submitScore = document.getElementById('submitscore');
const refresh = document.getElementById('refresh');

// setscore
submitScore.addEventListener('click', async (e) => {
  if (userScore.value.trim() !== '' && +score.value.trim() !== '') {
    await setScore({ user: userScore.value.trim(), score: +score.value.trim() });
    userScore.value = '';
    score.value = '';
  } else {
    e.preventDefault();
  }
});

// refresh
refresh.addEventListener('click', async () => {
  window.location.reload();
  await getScore();
  showScore();
});

// showscore
window.addEventListener('DOMContentLoaded', () => {
  showScore();
});