import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import './Sidebar.scss'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className="profile">
        <Avatar src="https://github.com/eduard0bp.png" />
        <strong>Eduardo Batista</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
