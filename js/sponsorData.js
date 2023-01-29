// we going to create a function that builds the card elements

function createChildCard(image, childName, age, id) {
  // create Element
  const mainDiv = document.createElement("div");
  const childImage = document.createElement("img");
  const childFullName = document.createElement("h2");
  const description = document.createElement("p");
  const buttonNode = document.createElement("button");

  // add the data
  childImage.src = image;
  childFullName.textContent = childName;
  description.textContent = "Age:" + age;
  buttonNode.textContent = "Sponsor Now";

  // add classes

  mainDiv.classList.add("child-card");
  childImage.classList.add("child-image");
  buttonNode.classList.add("button-node");
  description.classList.add("child-age");

  // append elements  together

  mainDiv.appendChild(childImage);
  mainDiv.appendChild(childFullName);
  mainDiv.appendChild(description);
  mainDiv.appendChild(buttonNode);

  buttonNode.addEventListener("click", (e) => {
    // window.open(`/child_profile.html?id=${id}`);
    // when the button is clicked, save the id in the local storage with name "childId"
    localStorage.setItem("childId", id);
    window.location.href = "/child_profile.html";


  });

  return mainDiv;
}

const entary = document.querySelector(".entary");

axios
  .get("https://phpstack-776148-3099296.cloudwaysapps.com/public/api/orphans")
  .then((response) => {
    response.data.map((child) => {
      const name = child.name;
      const image = child.image_url;
      const age = child.age;
      const id = child.id;

      entary.appendChild(createChildCard(image, name, age, id));
    });
  })
  .catch((error) => {
    console.log(error);
  });
