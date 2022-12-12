import { useEffect } from 'react';
import { useState } from 'react';
import SinglePost from '../components/SinglePost';
import { getPosts, sendDelete, sendDeletePatch } from './../helper/helper';

function PostsPage(props) {
  // 3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.
  // sukurti statee
  const [postsArr, setPostsArr] = useState([]);

  // aprasyti useEffekta kurispasileidzia tik viena kartu sukurus komponenta ([])
  useEffect(() => {
    getLatestPosts();
  }, []);

  function getLatestPosts() {
    getPosts().then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      setPostsArr(dataInJs);
    });
  }

  // PostsPage sukurti deletePostHandler fn kuri argumentu gauna id to post kuri norima istrinti
  function deletePostHandler(idOfPostToBeDeleted) {
    console.log('deletePostHandler called ', idOfPostToBeDeleted);
    sendDeletePatch(idOfPostToBeDeleted).then((deleteResult) => {
      console.log('deleteResult ===', deleteResult);
      if (deleteResult === true) {
        // parisiiusti postus is naujo
        getLatestPosts();
      }
    });
  }
  // iskonsolinti id posto kuri norim istrinti.
  // turedami id mes siunciam DELETE requesta i /posts/{postId}
  // jei gaunam sekminga atsakyma parsisiunciam naujausia postu masyvo versija is back end

  return (
    <div>
      <h1>PostsPage</h1>

      <div className='grid'>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.id} post={pObj} onDelete={deletePostHandler} />
        ))}
      </div>
    </div>
  );
}
export default PostsPage;
