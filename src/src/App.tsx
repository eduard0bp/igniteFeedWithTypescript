import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './App.scss'

export const App = () => {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/eduard0bp.png',
        name: 'Eduardo Batista Pereira',
        role: 'Web Developer @ South System'
      },
      content: [
        { type: 'paragraph', content: 'Hello World 👋' },
        {
          type: 'paragraph',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae vero id atque totam fuga, nam nostrum quasi, ad dolore liquid in? Impedit, nesciunt nam. Velit molestiae atque impeditmollitia?'
        },
        { type: 'link', content: 'https://github.com/eduard0bp' }
      ],
      publishedAt: new Date('2023-01-27 19:27:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Hello World 👋' },
        {
          type: 'paragraph',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae vero id atque totam fuga, nam nostrum quasi, ad dolore liquid in? Impedit, nesciunt nam. Velit molestiae atque impeditmollitia?'
        },
        { type: 'link', content: 'https://github.com/eduard0bp' }
      ],
      publishedAt: new Date('2023-01-29 19:45:00')
    }
  ]

  return (
    <div>
      <Header />
      <div className="wrapper">
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
