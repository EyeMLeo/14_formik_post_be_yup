import SinglePost from '../components/SinglePost';

function PostsPage(props) {
  // 3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.

  // sukurti statee
  // aprasyti useEffekta kurispasileidzia tik viena kartu sukurus komponenta ([])
  // getPosts();

  return (
    <div>
      <h1>PostsPage</h1>

      <p>cia generuosim single card</p>
      <div className='grid'>
        <SinglePost />
      </div>
    </div>
  );
}
export default PostsPage;
