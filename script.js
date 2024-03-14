let text = document.getElementById('text');
let treeleft = document.getElementById('tf');
let treeright = document.getElementById('tr');
let gateleft = document.getElementById('gtf');
let gateright = document.getElementById('gtr');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  tf.style.left = value * -1.5 + 'px';
  tr.style.left = value * 1.5 + 'px';
  gtf.style.left = value * 0.5 + 'px';
  gtr.style.left = value * -0.5 + 'px';
});