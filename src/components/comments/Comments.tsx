import styles from './Comments.module.css';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../App';
import { Comment } from './components';
import { IProps, IParams } from './types';
import { ICommentsResponse, IComment } from '../../types';

const Comments: React.FC<IProps> = ({videoId}) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const url = new URL('https://content-youtube.googleapis.com/youtube/v3/commentThreads');

    const params: IParams = {
      key: API_KEY,
      part: "snippet",
      maxResults: "50",
      videoId: videoId,
      textFormat: "plainText",
    };

    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((resp) => resp.json())
      .then((data: ICommentsResponse) => {
        if (data.items) {
          setComments(data.items);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [videoId])

  return (
    <div className={styles.wrapper}>
      {comments.map(thread => <Comment key={thread.id} thread={thread}/>)}
    </div>
  )
}

export default Comments;
