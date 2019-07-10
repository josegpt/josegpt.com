/* Base */
const elements = {
  projects: document.querySelector(".section__main"),
  toTopButton: document.querySelector(".to-top")
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
          <img src="img/default-project.jpg" alt="Image" class="card__img">
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

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    toTopButton.style.visibility = "visible"
    toTopButton.style.opacity = 1
  } else {
    toTopButton.style.visibility = "hidden"
    toTopButton.style.opacity = 0
  }
})

elements.toTopButton.addEventListener("click", scrollToTop)
