const baseURL = "https://api.github.com"

function getRepositories() {
  const name = document.getElementById("username").value
  const url = baseURL + "/users" + name + "/repos"
  const xml = new XMLHttpRequest()
  xml.addEventListener("load", displayRepositories)
  xml.open("GET", url)
  xml.send()
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = "<ul>" + repos.map(repo => {
    const dataUserName = 'data-username="' + repo.owner.login + '"'
    const dataRepoName = 'data-repository="' + repo.name + '"'
    return(`
      <li>
        <h2>${repo.name}</h2>
        <a href="${repo.html_url}">${repo.html_url}</a><br>
          <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
          <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a></li>
        </li>`
      )
  }).join("") + "</ul>"
  document.getElementById("repositores").innerHTML = repoList
}
