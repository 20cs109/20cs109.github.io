// const login = async (username, password) => {
//   if (!username || !password) throw "Missing";
//   if (password === "hello") return "Welcome";
//   throw "Invalid password";
// };

// login("asdsad", "hello")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const catImg = document.getElementById("cat");
const genButton = document.getElementById("gen");

genButton.addEventListener("click", () => {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search",
    type: "GET",
    success: function (res) {
      console.log(res[0].url);
      catImg.src = res[0].url;
    },
  });
});
