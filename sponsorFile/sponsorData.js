


    // we going to create a function that builds the card elements

    function createChildCard(image, childName) {


        // create Element
    const mainDiv = document.createElement("div")
    const childImage = document.createElement("img")
    const childFullName = document.createElement("P")

    // add the data 
    childImage.src = image
    childFullName.textContent = childName

    // add classes

    mainDiv.classList.add("child-card")
    childImage.classList.add("child-image")

    // append elements  together 

    mainDiv.appendChild(childImage)
    mainDiv.appendChild(childFullName)


    return mainDiv



    }


    const entary = document.querySelector(".entary")


    axios.get("https://phpstack-776148-3099296.cloudwaysapps.com/public/api/orphans")
    .then(response => {
    response.data.map(child => {

      

    const name = child.name
    const image = child.image_url 

    entary.appendChild(createChildCard(image,name))

    })

    })
    .catch(error =>{

    console.log(error)

    })