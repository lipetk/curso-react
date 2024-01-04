import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from './App.module.css'




const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/aglayrton.png',
      name: 'Zulão',
      role: 'Dev fullstack',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa',},
      {type: 'link', content: ' jane.design/doctorcare ',},
    ],
    publishedAt: new Date('2023-12-26 14:58:40'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kpsantiago.png',
      name: 'Kachaça',
      role: 'Dev frontend',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa',},
      {type: 'link', content: ' jane.design/doctorcare ',},
    ],
    publishedAt: new Date('2023-12-26 15:01:48'),
  },
];

export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
    <Sidebar />
     <main>
     {posts.map(post => {
      return (
        <Post
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        />
      )
     })}
     </main> 
    </div>
    </div>
)
  
}


