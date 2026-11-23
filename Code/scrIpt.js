const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");
const box = document.getElementById("box");

document.getElementById("greetBtn").addEventListener("click", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    output.textContent = "Please enter your name first.";
    box.classList.remove("success");
  } else {
    output.textContent = "Hello, " + name + "! JavaScript is working.";
    box.classList.add("success");
  }
});
