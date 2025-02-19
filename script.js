//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

output.innerHTML = `<div id="loading">Loading</div>`

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let p1 = new Promise((resolve, reject) => { 
   return resolve(images[0]);
})
let p2 = new Promise((resolve, reject) => { 
   return resolve(images[1]);
})
let p3 = new Promise((resolve, reject) => { 
    resolve(images[2]);
})

let Promises = [p1, p2, p3];

Promise.all(Promises).then(() => {
    output.innerHTML = "";
    output.innerHTML = "All images downloaded successfully!";
}).catch(() => {
    output.innerHTML = "";
    output.innerText = "Images has not downloaded";
    
})
