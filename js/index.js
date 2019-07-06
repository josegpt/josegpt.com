/* Base */
const elements = {
  projects: document.querySelector(".section__main")
}

/* Global State */

const state = {}

/* Model */
class Repository {
  async getProjects() {
    try {
      const res = await fetch("https://api.github.com/users/josegpt/repos?sort=updated")
      const data = await res.json()
      this.projects = data
    } catch (err) {
      console.log(err)
      alert("Something is not working :/")
    }
  }
}

/* View */
const repositoryView = {
  renderProject({ name, html_url, body, ...rest }) {
    const markup = `
      <article class="card">
        <header class="card__header">
          <img src="https://makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg" alt="Image" class="card__img">
        </header>
        <main class="card__main">
          <h2 class="heading-secondary card__title">${name}</h2>
          <a href="${html_url}" class="btn">See Project</a>
        </main>
      </article>
    `
    elements.projects.insertAdjacentHTML("beforeend", markup)
  },
  renderProjects(projects) {
    projects.forEach(this.renderProject)
  }
}

/* Controller */
;(async () => {
  state.repository = new Repository()

  try {
    await state.repository.getProjects()
    repositoryView.renderProjects(state.repository.projects)
  } catch (err) {
    console.log(err)
    alert("Something is not working :/")
  }
})()
