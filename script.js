//your JS code here. If required.
let body = document.querySelector("body");
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

btn.addEventListener("click", ()=>{
    output.innerHTML = `<div id="loading">Loading</div>`;

    const images = [
      { url: "https://picsum.photos/id/237/200/300" },
      { url: "https://picsum.photos/id/238/200/300" },
      { url: "https://picsum.photos/id/239/200/300" },
    ];

    let p1 = new Promise((resolve, reject) => {
        const image = new Image()
        image.src = images[0].url;
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("Couldn't load image"))
    });
    let p2 = new Promise((resolve, reject) => {
         const image = new Image();
         image.src = images[1].url;
         image.onload = () => resolve(image);
         image.onerror = () => reject(new Error("Couldn't load image"));
    //   return resolve(images[1]);
    });
    let p3 = new Promise((resolve, reject) => {
         const image = new Image();
         image.src = images[2].url;
         image.onload = () => resolve(image);
         image.onerror = () => reject(new Error("Couldn't load image"));
    //   resolve(images[2]);
    });

    let Promises = [p1, p2, p3];

    Promise.all(Promises)
      .then((res) => {
        output.innerHTML = "";
        res.forEach((image) => {
          output.appendChild(image);
        });
        
      })
      .catch(() => {
        // output.innerHTML = "";
        output.innerHTML = `<div id="error">Images has not downloaded </div>`;
      });
})

// body.appendChild(`<buttton id="download-images-button">Submit</buttton>`) 
// output.innerHTML = `<div id="loading">Loading</div>`


