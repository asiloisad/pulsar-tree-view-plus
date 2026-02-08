module.exports =
class AddProjectView {
  constructor () {
    this.element = document.createElement('div')
    this.element.id = 'add-projects-view'

    this.icon = document.createElement('div')
    this.icon.classList.add('icon', 'icon-large', 'icon-telescope')
    this.element.appendChild(this.icon)

    this.description = document.createElement('div')
    this.description.classList.add('description')
    this.description.innerText = 'Your project is currently empty'
    this.element.appendChild(this.description)

    this.addProjectsButton = document.createElement('button')
    this.addProjectsButton.classList.add('btn', 'btn-primary')
    this.addProjectsButton.innerText = 'Add folders'
    this.addProjectsButton.addEventListener('click', () => {
      atom.pickFolder(paths => {
        if (paths) {
          atom.project.setPaths(paths)
        }
      })
    })
    this.element.appendChild(this.addProjectsButton)

    this.reopenProjectButton = document.createElement('button')
    this.reopenProjectButton.classList.add('btn')
    this.reopenProjectButton.innerText = 'Reopen a project'
    this.reopenProjectButton.addEventListener('click', () => {
      if (this.projectList) {
        atom.commands.dispatch(this.element, 'project-list:recent')
      } else {
        atom.commands.dispatch(this.element, 'application:reopen-project')
      }
    })
    this.element.appendChild(this.reopenProjectButton)

    this.listProjectsButton = document.createElement('button')
    this.listProjectsButton.classList.add('btn')
    this.listProjectsButton.innerText = 'List projects'
    this.listProjectsButton.style.display = 'none'
    this.listProjectsButton.addEventListener('click', () => {
      atom.commands.dispatch(this.element, 'project-list:toggle')
    })
    this.element.appendChild(this.listProjectsButton)
  }

  setProjectList (projectList) {
    this.projectList = projectList
    this.listProjectsButton.style.display = projectList ? '' : 'none'
  }
}
