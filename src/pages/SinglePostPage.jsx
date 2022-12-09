import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePost from '../components/SinglePost';
import { getPosts } from '../helper/helper';

function SinglePostPage(props) {
  // function getParams() {
  //   let { postId } = useParams();
  //   console.log('id ===', postId);
  // }

  let { postId } = useParams();
  console.log('id ===', postId);

  const [singlePost, setSinglePost] = useState([]);

  // SinglePostPage
  // pasiimti dinamini route parametra :postId
  // susikurti state
  // useEffecte parsisiusti vieno posto duomenis is be/posts/id
  // nupiesti single posta

  useEffect(() => {
    // getParams();

    console.log('getPosts() ===', getPosts());
    getPosts().then((datainJs) => {
      console.log('datainJs ===', datainJs);
      setSinglePost(() => datainJs.filter((oneObj) => oneObj.id == postId));
    });

    console.log('singlePost0 ===', singlePost[0]);
    console.log('singlePost ===', typeof singlePost);
  }, []);

  let p = singlePost[0];
  console.log('p', p);
  return (
    <div>
      <h1>SinglePostPage</h1>
      {/* <SinglePost /> */}

      <article className="singlePost">
        {p.image && <img src={p.image} alt="post image" />}
        {!p.image && <img src="https://placehold.co/400" alt="no image" />}
        <h3>{p.title}</h3>
        <p className="singleBody">{p.body}</p>
        <p className="reactions">likes: {p.reactions}</p>
        {/* <ul>
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* nuoroda i singlePostPage */}
        <br />
        <button>Delete post X</button>
      </article>
    </div>
  );
}
export default SinglePostPage;
