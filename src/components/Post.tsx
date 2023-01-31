import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import './Post.scss'

export interface PostProps {
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  publishedAt: Date
  content: Content[]
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setComments] = useState(['Exemplo...'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    const invertComments = [...comments]
    invertComments.unshift(newCommentText)
    setComments(invertComments)
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="content">
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="comment-form">
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário."
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
