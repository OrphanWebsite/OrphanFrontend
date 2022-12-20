

// we going to create a function that builds the card elements

function createChildCard(image, childName) {


    // create Element
const mainDiv = document.createElement("div")
const childImage = document.createlement("img")
const childFullName = document.createElement("P")

// add the data 
childImage.src = image
childFullName.textContent = childName

// append elements  together 

mainDiv.appendChild("childImage")
mainDiv.appendChild("childfulName")


return mainDiv




}


const entary = document.querySelector(".entary")


axios.get("https://phpstack-776148-3099296.cloudwaysapps.com/public/api/orphans")
.than(response => {
 response.data.foreac(child =>{
 const name = child.name
 const image = child.image.url 

 entary.appendChild(createChildCard(image, childName))

 })

})
.catch(error =>{

console.log(error)

})