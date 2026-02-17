const role = localStorage.getItem("role");

if (!role) {
  window.location.href = "index.html";
}

document.getElementById("roleTitle").innerText =
  role.toUpperCase() + " DASHBOARD";

fetch(`http://localhost:3000/api/dashboard/${role}`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("data");

    Object.keys(data).forEach(key => {
      const card = document.createElement("div");
      card.className = "card";

      if (typeof data[key] === "object") {
        card.innerHTML = `<h3>${key}</h3><pre>${JSON.stringify(data[key], null, 2)}</pre>`;
      } else {
        card.innerHTML = `<h3>${key}</h3><p>${data[key]}</p>`;
      }

      container.appendChild(card);
    });
  });

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}
