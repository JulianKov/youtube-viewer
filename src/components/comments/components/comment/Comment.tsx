import styles from './Comments.module.css';
import { IComment } from '../../../../types';
import React from 'react';

interface IProps {
  thread: IComment
}

const Comment: React.FC<IProps> = ({thread}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userIcon}>
        { thread?.snippet?.topLevelComment?.snippet?.authorDisplayName?.toUpperCase()?.[0] || "" }
      </div>
      <div className={styles.comment}>
        <div className={styles.row}>
          <span className={styles.userName}>
            { thread?.snippet?.topLevelComment?.snippet?.authorDisplayName || "" }
          </span>
          <span className={styles.commentDate}>
            { (new Date(thread?.snippet?.topLevelComment?.snippet?.updatedAt)).toISOString().substring(0, 10)  || "" }
          </span>
          {thread?.snippet?.topLevelComment?.snippet?.likeCount ? <span>👍 {thread?.snippet?.topLevelComment?.snippet?.likeCount}</span> : null }

        </div>
        <p>
          { thread?.snippet?.topLevelComment?.snippet?.textOriginal || "" }
        </p>

      </div>
    </div>
  )
}

export default Comment;
