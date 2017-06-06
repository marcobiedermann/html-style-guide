import hljs        from 'highlight.js/lib/highlight.js';
import css         from 'highlight.js/lib/languages/css';
import javascript  from 'highlight.js/lib/languages/javascript';
import xml         from 'highlight.js/lib/languages/xml';

window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments)
};

ga.l = +new Date;

ga('create', 'UA-46884111-5', 'auto');
ga('send', 'pageview');

hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.initHighlightingOnLoad();

const easing = {
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};

const $$sections = document.querySelectorAll('.js-section');
const sections   = {};

function scrollTo(Y, duration, easingFunction, callback) {
  const start   = performance.now();
  const element = document.documentElement.scrollTop ? document.documentElement : document.body;
  const from    = element.scrollTop;

  if (from === Y) {
    callback();

    return;
  }

  function min(a, b) {
    return a < b ? a : b;
  }

  function scroll(timestamp) {
    const currentTime = performance.now();
    const time        = min(1, ((currentTime - start) / duration));
    const easedT      = easingFunction(time);

    element.scrollTop = (easedT * (Y - from)) + from;

    if (time < 1) {
      requestAnimationFrame(scroll);
    } else {

      if (callback) {
        callback();
      }

    }
  }

  requestAnimationFrame(scroll);
}

$$sections.forEach(section => {
  sections[section.id] = section.offsetTop;
});

window.addEventListener('scroll', function() {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  for (let i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector('.is-active').classList.remove('is-active');
      document.querySelector(`a[href="#${i}"]`).classList.add('is-active');
    }
  }
})

document.querySelectorAll('.js-scroll-to').forEach(element => {
  element.addEventListener('click', () => {
    scrollTo(document.getElementById(element.href.split('#')[1]).offsetTop, 600, easing.easeInOutCubic);
  });
});
