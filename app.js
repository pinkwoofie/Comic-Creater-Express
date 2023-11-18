async function query(data) {
  // try {
  const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
          headers: {
              "Accept": "image/png",
              "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
              "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data),
      }
  );
  const result = await response.blob();
  return result;
  // }
  // catch (error) {
  //     let errorMessage = document.createElement("p");
  //     errorMessage.textContent = "Error";
  //     container.appendChild(errorMessage);
  //     container.style.display = 'flex';
  //     container.style.alignItems = 'center';
  //     container.style.justifyContent = 'center';
  //     console.error("Error:", error.message);
  // }
}
let input;
const container = document.getElementById("image-container");
let search = document.querySelector(".mybtn2");
let h1 = document.querySelector('h1');
search.addEventListener("click", function () {
  container.innerHTML = " ";
  input = document.querySelector("#msg").value;
  console.log(input);
  let temp = document.querySelector("#msg");
  for (let i = 0; i < 10; i++) {

      query({ "inputs": input }).then((blob) => {
          let imageUrl = URL.createObjectURL(blob);
          let imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          container.appendChild(imageElement);
      })

      // catch (error) {
      //     let errorMessage = document.createElement("p");
      //     errorMessage.textContent = "Error loading image. Please try again later.";
      //     container.appendChild(errorMessage);
      //     console.error("Error:", error.message);
      //     // Handle the error, e.g., show a user-friendly message to the user
      // }
  }
  // let imageElement = document.createElement("img");
  // imageElement.src = "https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-iron-man-logo-png-iron-man-wallpaper-9.png";
  // container.appendChild(imageElement);
}

);

const themeToggleBtn = document.getElementById("topRightButton");
const body = document.body;
const searchbar = document.querySelector('#msg');
const submit = document.querySelector('#button-addon2');
themeToggleBtn.addEventListener("click", function () {
  if (themeToggleBtn.classList.contains("dark-theme")) {
      disableDarkMode();
  } else {
      enableDarkMode();
  }
});
function enableDarkMode() {
  body.classList.add("dark-theme");
  searchbar.classList.add("dark-theme");
  submit.classList.add("dark-theme");
  themeToggleBtn.classList.add("dark-theme");
  h1.classList.add("dark-theme");
  themeToggleBtn.innerHTML = "LIGHT";

}
function disableDarkMode() {
  body.classList.remove("dark-theme");
  searchbar.classList.remove("dark-theme");
  submit.classList.remove("dark-theme");
  themeToggleBtn.classList.remove("dark-theme");
  h1.classList.remove("dark-theme");
  themeToggleBtn.innerHTML = "DARK";
}

