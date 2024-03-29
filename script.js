'use strict';

// DATA
// ==================================================================

const sliderItems = [
  {
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    bio: `“ I’ve been interested in coding for a while but never taken the
    jump, until now. I couldn’t recommend this course enough. I’m now
    in the job of my dreams and so excited about the future. ”`,
    avatar: 'image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    bio: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    avatar: 'image-john.jpg',
  },
];

// ELEMENTS
// =====================================================================
const aboutEl = document.querySelector('.about-wrap');
const imageWrapper = document.querySelector('.picture');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const createAboutEl = current => {
  return `
    <div class="about-content">
      <blockquote>${current.bio}</blockquote>
      <strong>${current.name} <span>${current.job}</span></strong>
    </div>`;
};

const createImageEl = current => {
  return `<img src="./images/${current.avatar}" alt="${current.name}" />`;
};

const changeSlider = current => {
  const about = createAboutEl(current);
  const image = createImageEl(current);

  const oldAbout = Array.from(aboutEl.childNodes).at(1);
  const oldImage = imageWrapper.querySelector('img');

  oldAbout.classList.toggle('out');
  oldImage.classList.toggle('out');

  setTimeout(() => {
    aboutEl.innerHTML = about;
    imageWrapper.innerHTML = image;
  }, 740);
};

let currentItem = sliderItems[0];
btnNext.addEventListener('click', () => {
  const index = sliderItems.indexOf(currentItem);

  currentItem =
    index < sliderItems.length - 1 ? sliderItems[index + 1] : sliderItems[0];

  changeSlider(currentItem);
});

btnPrev.addEventListener('click', () => {
  const index = sliderItems.indexOf(currentItem);

  currentItem = index > 0 ? sliderItems[index - 1] : sliderItems.at(-1);

  changeSlider(currentItem);
});
