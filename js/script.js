/* jshint esversion: 6 */

const pages = [
  document.getElementById('about-me'),
  document.getElementById('work-experience'),
  document.getElementById('projects'),
  document.getElementById('contact')
];

window.addEventListener('scroll', function() {
  // reveal pages when scrolled over
  pages.forEach(page => {
    if (window.scrollY > page.offsetTop - 400) {
      page.classList.remove('hide');
    }
  });
  // display "scroll to top" button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scroll-top').style.display = "block";
  } else {
    document.getElementById('scroll-top').style.display = "none";
  }
});

// reveals tab when clicked on
function activateTab(name) {
  const tabs = [
    { name: 'mpac', element: document.getElementById('mpac-tab'), text: document.getElementById('mpac-text') },
    { name: 'utsc', element: document.getElementById('utsc-tab'), text: document.getElementById('utsc-text') },
  ];
  tabs.forEach(tab => {
    if (tab.element.classList.contains('active') && tab.name !== name) {
      tab.element.classList.remove('active');
      tab.text.setAttribute('hidden', true);
    }
    if (tab.name === name) {
      tab.element.classList.add('active');
      tab.text.removeAttribute('hidden');
    }
  });
}

// scrolls to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}