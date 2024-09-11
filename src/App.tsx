// import { useState } from 'react'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'

const user = {
  name: 'Dev Panter',
  role: 'Web Developer',
  dateInto: new Date('2024-06-03 20:30:00')
}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png ',
      name: 'Sandiego Fernandez',
      role: 'Diretor @delacruz'
    },
    content: [
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio' },
      { type : 'paragraph', content: 'Fala rapaziada'},
      { type : 'link', content: 'github/projeto'}     
    ],
    publishedAt: new Date('2024-05-03 20:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrieldev4.png ',
      name: 'Duck',
      role: 'Designer'
    },
    content: [
      { type : 'paragraph', content: 'Qual o segredo para a felicidade?' },
      { type : 'paragraph', content: 'Quero ver os comentários'},
      { type : 'link', content: '#perguntas'}     
    ],
    publishedAt: new Date('2024-05-09 20:20:00')
  }
]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        < Sidebar
          name={user.name}
          lastView={user.dateInto}
          role={user.role}
        />
        <main>
          {posts.map(post=>{
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}

export default App
