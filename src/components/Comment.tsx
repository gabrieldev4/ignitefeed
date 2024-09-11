import { Trash } from '@phosphor-icons/react/dist/ssr'
import { ThumbsUp } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string,
    onDeleteComment: (comment: string)=> void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount,setLikeCount] = useState(0)

    function handleAddLike(){
        setLikeCount(a => a+1)
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrieldev4.png" alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title='19 de agosto às 8h' dateTime="2022-08-19 08:12:20">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                    <footer>
                        <button onClick={handleAddLike}>
                            <ThumbsUp/>
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}