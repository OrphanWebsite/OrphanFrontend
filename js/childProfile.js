// we going to create a function that builds the card elements

{/* <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp">
<h3>Ishmam Ahasan Samin</h3> */}

function createImage(image, name) {
  // create Element
    const mainDiv = document.createElement("div");
    const childImage = document.createElement("img");
    const childName = document.createElement("h3");
    // add the data
    childImage.src = image;
    childName.textContent = name;

    // add classes

    childImage.classList.add("profile_img");

    // append elements  together

    mainDiv.appendChild(childImage);
    mainDiv.appendChild(childName);


    return mainDiv;
}


{/* <div class="card-body">
<p class="mb-0">Age: 321000001</p>
<p class="mb-0">Class: 4</p>
<p class="mb-0">Section: A</p>
</div> */}


function createChildCardBody(age) {
    const mainDiv = document.createElement("div");
    const childAge = document.createElement("p");

    // add the data
    childAge.textContent = "Age:" + age;

    // add classes

    mainDiv.classList.add("card-body");
    childAge.classList.add("mb-0");

    // append elements  together

    mainDiv.appendChild(childAge);

    return mainDiv;
    
}

function createChildBio(bio) {
  const bioText = document.createElement("p");

    bioText.textContent = bio;

   return bioText;
}

const imageEntry = document.querySelector("#imageDiv");
const bioEntry = document.querySelector("#childBio");
const cardBody = document.querySelector("#cardBody");

axios
  .get("https://phpstack-776148-3099296.cloudwaysapps.com/public/api/orphans")
  .then((response) => {
    response.data.map((child) => {
      const name = child.name;
      const image = child.image_url;
      const age = child.age;
      const id = child.id;

      // Get "childId" from local storage
    const childId = localStorage.getItem("childId");
    if (id == childId) {
      imageEntry.appendChild(createImage(image, name));
        bioEntry.appendChild(createChildBio(child.bio));
        cardBody.appendChild(createChildCardBody(age));
    }
    });
  })
  .catch((error) => {
    console.log(error);
  });
