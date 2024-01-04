import { format, formatDistance, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';


export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState(
        [
            'Bom conteúdo',
        ]
    )

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format( publishedAt ,  "'Publicado em' d 'de' MMMM 'às' HH:mm'h'" ,
    {
        locale: ptBR,
    })
    
    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function actionCreateNewComment(){
        event.preventDefault();

        const newCommentText = event.target.comment.value
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function actionNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function actionNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }


    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        
        
        
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;


    return (
    <article className={styles.post}>
        <header>
           <div className={styles.author}>
           <Avatar src={author.avatarUrl} />
           <div className={styles.authorInfo}>            
            <strong>{author.name}</strong>
            <span>{author.role}</span>
            </div>
           </div>

           <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
           </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content} >{line.content}</p>;
                } else if (line.type == 'link'){
                    return <p key={line.content} > <a href="#">{line.content}</a></p>;
                }
            })}
        </div>

        <form onSubmit={actionCreateNewComment} className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>

            <textarea 
            name='comment'
            placeholder="Deixe o um comentário"
            value={newCommentText}
            onChange={actionNewCommentChange}
            onInvalid={actionNewCommentInvalid}
            required
            />
            <footer>
                <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
            </footer>
            
        </form>

        <div className={styles.commentList}>
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