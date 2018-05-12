const baseURL = "https://api.github.com"

function getRepositories() {
  const name = document.getElementById("username").value
  const url = baseURL + "/users" + name + "/repos"
  const xml = new XMLHttpRequest()
  xml.addEventListener("load", displayRepositories)
  xml.open("GET", url)
  xml.send()
}
