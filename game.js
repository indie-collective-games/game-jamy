const button = document.querySelector('button');
const music = document.querySelector('#music');
const disdonc = document.querySelector('#disdonc');

window.addEventListener('load', () => {
  music.play();
});

const doTheThing = () => {
  fetch('http://fr.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json&origin=*')
    .then(res => res.json())
    .then(data => {
      const { title, extract } = Object.values(data.query.pages)[0];
      const titleSpeech = new SpeechSynthesisUtterance(`Dis-donc Jamy, c'est quoi ${title}?`);
            titleSpeech.lang = 'fr-fr';
      
            music.pause()
      window.speechSynthesis.speak(titleSpeech);
    });
}

button.addEventListener('click', doTheThing, false);
