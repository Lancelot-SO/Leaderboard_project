import getScore from './getScore.js';

const showScore = async () => {
  const res = await getScore();
  const scoreslist = document.querySelector('.scoreslist');
  scoreslist.innerHTML = '';
  res.forEach((score) => {
    scoreslist.innerHTML += `<li>
    ${score.user}:${score.score} 
   </li>`;
  });
};

export default showScore;