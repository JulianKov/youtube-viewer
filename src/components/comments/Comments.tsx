import styles from './Comments.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { Comment } from './components';
import { IProps } from './types';
import { ICommentsResponse, IComment } from '../../types';
import { fetchComments } from '../../api';

const Comments: React.FC<IProps> = ({videoId}) => {
  const [comments, setComments] = useState<IComment[]>([]);
  
  const pageTokenRef = useRef("");
  
  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document?.scrollingElement?.scrollHeight && pageTokenRef.current) {
      getComments({videoId, pageToken: pageTokenRef.current}, false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', loadMore);
    
    return () => {
      window.removeEventListener('scroll', loadMore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const getComments = async (params: Record<string, string>, isNew: boolean) => {
    const data = await fetchComments<ICommentsResponse>(params);
  
    if (data.items) {
      setComments(prevState => isNew ? data.items : [...prevState, ...data.items]);
    }
    if (data.nextPageToken) {
      pageTokenRef.current = data.nextPageToken;
    } else {
      pageTokenRef.current = "";
    }
  }

  useEffect(() => {
    getComments({ videoId }, true);
  }, [videoId])

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Comments</p>
      {comments.map(thread => <Comment key={thread.id} thread={thread}/>)}
    </div>
  )
}

export default Comments;
