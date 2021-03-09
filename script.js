const image = [{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/390px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
}, {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Shakib_Al_Hasan_%284%29_%28cropped%29.jpg/390px-Shakib_Al_Hasan_%284%29_%28cropped%29.jpg"
} ]
document.getElementById("photo").addEventListener("click",function (){

    
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        const imageDiv = document.getElementById("image-div")
       const newDiv = document.createElement("div")
       newDiv.innerHTML= `<img src="${element.img}" alt="">`
       imageDiv.appendChild(newDiv)
       console.log(element.img)
    }
})

    

