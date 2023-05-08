let main = document.getElementsByClassName('biggi');
let small = document.getElementsByClassName('small')
let img = document.body.children[1].getElementsByTagName ('img');
console.log (img)
let text = document.body.children[1].p;
for (let m of main) {
   m.style.display = 'flex';
   m.style.justifyContent = 'space-around'
}
for (let q of small) {
   q.style.width = '150px';
   q.style.padding = '15px';
   q.style.margin = '13px';
}
for (let i of img) {
    i.style.width = '100px'
    i.style.height = '66px'
}
for (let t of text) {
    t.style.fontSize = '18px';
    t.style.fontFamily = 'sans-serif';
}
