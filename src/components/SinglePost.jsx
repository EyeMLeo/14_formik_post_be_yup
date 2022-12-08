const dummyPost = {
  id: 1,
  image:
    'https://github.com/MariusCodeAcademy/posts-rest-json-server/blob/main/assets/html.jpg?raw=true',
  title: 'What is HTML?',
  body: 'HTML is a programming language that stands for Hypertext Markup Language.',
  archived: false,
  userId: 9,
  tags: ['front-end', 'web-development'],
  reactions: 2,
};
function SinglePost(props) {
  return (
    <article className='singlePost'>
      <img src='' alt='post image' />
      <h3>SinglePost title</h3>
      <p className='singleBody'>post text</p>
      <p className='reactions'>likes: 5</p>
      <ul>
        <li>front-end</li>
        <li>web-development</li>
      </ul>
    </article>
  );
}
export default SinglePost;
