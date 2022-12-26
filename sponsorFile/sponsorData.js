


    // we going to create a function that builds the card elements

    function createChildCard(image, childName, age ) {


        // create Element
    const mainDiv = document.createElement("div")
    const childImage = document.createElement("img")
    const childFullName = document.createElement("h2")
    const description = document.createElement("p")
    const buttonNode = document.createElement("button")

    // add the data 
    childImage.src = image
    childFullName.textContent = childName
    description.textContent = "Age:" +  age
    buttonNode.textContent = "Sponsor Now"


    // add classes

    mainDiv.classList.add("child-card")
    childImage.classList.add("child-image")
    buttonNode.classList.add("button-node")
    description.classList.add("child-age")

    // append elements  together

    mainDiv.appendChild(childImage)
    mainDiv.appendChild(childFullName)
    mainDiv.appendChild(description)
    mainDiv.appendChild(buttonNode) 

    return mainDiv



    }


    const entary = document.querySelector(".entary")


    axios.get("https://phpstack-776148-3099296.cloudwaysapps.com/public/api/orphans")
    .then(response => {
    response.data.map(child => {

      console.log(response.data)

    const name = child.name
    const image = child.image_url 
    const age = child.age

    entary.appendChild(createChildCard(image,name, age))

    })

    })
    .catch(error =>{

    console.log(error)

    })