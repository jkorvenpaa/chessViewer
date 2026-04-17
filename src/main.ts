const app = document.getElementById("app");

if (!app) {
  throw new Error("App element not found");
}

app.textContent = "Hello chess viewer";