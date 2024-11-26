import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    text?: string;
    link?: string;
    content?: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {

    const [comments, setComments] = useState([
        'Post incrível, meu amigo!',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const pubishedFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Seu comentário não pode estar vazio!');
    }

    function deleteComment(commentToDelete: string) {
        const CommentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(CommentsWithoutDeletedOne);
    }

    const isNewCommentTextEmpty = newCommentText.trim() === '';

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}

                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={pubishedFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(content => {
                    if (content.text) {
                        return <p key={content.text}>{content.text}</p>
                    }
                    if (content.link) {
                        return <a key={content.link} href="#">{content.link}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário!'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentTextEmpty}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            onDeleteComment={deleteComment}
                            key={comment}
                            content={comment} />
                    );
                })}
            </div>

        </article>
    );
}