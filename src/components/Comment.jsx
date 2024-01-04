import styles from './Comment.module.css'
import {Trash} from'@phosphor-icons/react'
import {ThumbsUp} from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import { startOfWeek } from 'date-fns'

export function Comment({ content, onDeleteComment }){

    const [likeCount, setLikeCount] = useState(0);
    
    function actionDeleteComment(){

        onDeleteComment(content);

    }
    

    function actionLikeComment(){

        setLikeCount((state) => {
            return state + 1;
        });

    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lipetk.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                    <div className={styles.authorAndTime}>
                        <strong>LipeTK</strong>
                        <time title='22 de dezembro de 2023' dateTime='2023-12-22 16:03:49'>Cerca de 1h atrás</time>
                    </div>   

                    <button onClick={actionDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                    </header> 
                    
                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={actionLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span> 
                    </button>
                </footer>
            </div>
        </div>
    )
}