document.addEventListener("DOMContentLoaded", () => {
  async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");
    const userList = document.createElement("ul");

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const users = await response.json();
      console.log(users);

      dataContainer.innerHTML = "";

      users.forEach(function (user) {
        const list = document.createElement("li");
        list.textContent = user.name;
        userList.appendChild(list);
      });

      dataContainer.appendChild(userList);
    } catch (e) {
      dataContainer.innerHTML = "Failed to load user data.";
      console.error("Error: ", e);
    }
  }

  fetchUserData();
});
