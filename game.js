const button = document.querySelector('button');
const music = document.querySelector('#music');
const disdonc = document.querySelector('#disdonc');
const pageTitle = document.querySelector('#pagetitle');
const pageSummary = document.querySelector('#pagesummary');
const tressimple = document.querySelector('#showsummary');

window.addEventListener('load', () => {
  music.play();
});

tressimple.addEventListener('click', () => {
  pageSummary.style.display = 'block';
});

const doTheThing = () => {
  fetch('http://fr.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json&origin=*')
    .then(res => res.json())
    .then(data => {
      const { title, extract } = Object.values(data.query.pages)[0];
      const titleSpeech = new SpeechSynthesisUtterance(`C'est quoi ${title}?`);
            titleSpeech.lang = 'fr-fr';
      
      pageSummary.style.display = 'none';
      
      disdonc.addEventListener('ended', () => {
        window.speechSynthesis.speak(titleSpeech);
        pagetitle.innerText = title;
        pageSummary.innerHTML = extract;
      });

      music.pause();
      disdonc.play();
    });
}

button.addEventListener('click', doTheThing, false);
