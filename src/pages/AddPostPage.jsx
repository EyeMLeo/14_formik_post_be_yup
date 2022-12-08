import AddPostForm from '../components/AddPostForm';

function AddPostPage(props) {
  // kai sekmingai nusiusta mes norim naviguoti i PostsPage su react-router is AddPostsPage

  return (
    <div>
      <h1>AddPostPage</h1>
      <p>this should be a form</p>
      <AddPostForm />
    </div>
  );
}
export default AddPostPage;
