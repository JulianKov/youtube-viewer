import styles from './Comments.module.css';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../App';
import { Comment } from './components';

const Comments = ({videoId}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = new URL('https://content-youtube.googleapis.com/youtube/v3/commentThreads');

    const params = {
      key: API_KEY,
      part: "snippet",
      maxResults: 50,
      videoId: videoId,
      textFormat: "plainText",
    };

    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
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
      {comments.map(thread => <Comment thread={thread}/>)}
    </div>
  )
}

export default Comments;
