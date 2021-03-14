const imageVertical = [{img:"./img/Photos/imgv1.jpg"
},{img: "./img/Photos/imgv2.jpg"
},{img: "./img/Photos/imgv3.jpg"
},{img: "./img/Photos/imgv4.jpg"
},{img: "./img/Photos/imgv5.jpg"
},{img: "./img/Photos/imgv6.jpg"
},{img: "./img/Photos/imgv7.jpg"
},{img: "./img/Photos/imgv8.jpg"
},{img: "./img/Photos/imgv9.jpg"
},{img: "./img/Photos/imgv10.jpg"
},{img: "./img/Photos/imgv11.jpg"
},{img: "./img/Photos/imgv12.jpg"
},{img: "./img/Photos/imgv13.jpg"
},{img: "./img/Photos/imgv14.jpg"
},{img: "./img/Photos/imgv15.jpg"
},{img: "./img/Photos/imgv16.jpg"
} ];


const image = [{img:"./img/Photos/img1.jpg"
},{img:"./img/Photos/img2.jpg"
},{img:"./img/Photos/img3.jpg"
},{img:"./img/Photos/img4.jpg"
},{img:"./img/Photos/img5.jpg"
},{img:"./img/Photos/img6.jpg"
}];


document.getElementById("photo").addEventListener("click",function (){

    
    for (let i = 0; i < image.length; i++) {
        const element = imageVertical[i];
        const packageDiv = document.getElementById("package-div")
        packageDiv.classList.add("display-package-div")
        const imageDiv = document.getElementById("image-div")
       const newDiv = document.createElement("div")
       newDiv.className = "display-image col-md-4"
       newDiv.innerHTML= `
       <img src="${element.img}" alt="">
       `
       
       imageDiv.appendChild(newDiv);
       
    }
})

document.getElementById("photo").addEventListener("click",function (){

    
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        const packageDiv = document.getElementById("package-div")
        packageDiv.classList.add("display-package-div")
        const imageDiv = document.getElementById("image-div")
       const newDiv = document.createElement("div")
       newDiv.className = "display-h-image col-md-4"
       newDiv.innerHTML= `
       <img src="${element.img}" alt="">
       `
       imageDiv.appendChild(newDiv)
       
    }
})
    

