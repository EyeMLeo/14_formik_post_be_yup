import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from './InputError';
import { sendFetch, stringTagsToArr } from './../helper/helper';
import { useHistory } from 'react-router-dom';

function AddPostForm(props) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      image: 'https://picsum.photos/id/17/200/300',
      title: 'The main road',
      body: 'Post about the main road',
      reactions: 4,
      tagsStringInput: '',
      tags: [],
      userId: 1,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string()
        .trim()
        .min(5, 'Ne maziau nei 5 simboliai')
        .max(120)
        .required('Privalomas laukas'),
      title: Yup.string().min(4).max(20).required(),
      body: Yup.string().min(10).required(), // string, min 10 simboliu, privalomas laukas
      reactions: Yup.number().positive().integer().required().max(15), // skaicius, teigiamas, sveikasis skaicius, max 15 privalomas
      tagsStringInput: Yup.string().min(3),
      userId: Yup.number().positive().max(5).required(), // skaicius, teigiamas, nuo 1 iki 5 privalomas
    }),
    onSubmit: (values) => {
      console.log('values ===', values);

      // alert(JSON.stringify(values, null, 2));

      // sutvarkyti tags
      values.tags = stringTagsToArr(values.tagsStringInput);

      // siusti duomenis su fetch
      sendFetch(values).then((dataInJs) => {
        console.log('dataInJs ===', dataInJs);
        // jei sekmingai sukurem tai status 201 ir dataInJs tures id
        if (dataInJs.id) {
          // sekmingai sukurem post
          confirm('postas sukurtas sekmingai');
          // redirect to /posts kai sekmingai sukurta
          history.push('/posts');
        }
      });

      // data visada bus promise jei be then ir/ar async await
      // const data = sendFetch(values);
      // console.log('data ===', data);

      // sendDataFetch(values)
      // jei sekmingai nusiuntem tai console log sekme
      // mes norim naviguoti i PostsPage su react-router is AddPostsPage
      // jei ne tai nesekme
    },
  });
  /*
  reikalingi input
  "image" text
  "title" text
  "body" textarea
  "reactions" number 0
  "userId"
  */

  // console.log('formik.values ===', formik.values);

  // sudeti likusiems inputams klaidu atvaizdavima
  // extra prideti inputui klase inputErrorField jei jame yra klaida
  // console.log('formik.errors ===', formik.errors);
  // console.log('formik.touched ===', formik.touched);
  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          className={
            formik.touched.image && formik.errors.image ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        <InputError error={formik.errors.image} touch={formik.touched.image} />
        {/* sukurti InputError componenta kuris gaves props error, atvaizduos klaidos p taga */}
        {/* pvz <InputError error={formik.errors.image} /> */}
        <input
          className={
            formik.touched.title && formik.errors.title ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type='text'
          placeholder='Title'
          name='title'
        />

        {/* level2 error TODO: <InputError formik={formik} field={'title'} /> */}
        <InputError error={formik.errors.title} touch={formik.touched.title} />
        <textarea
          className={
            formik.touched.body && formik.errors.body ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p className='inputErroMsg'>{formik.errors.body}</p>
        )}
        <input
          className={
            formik.touched.reactions && formik.errors.reactions
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reactions}
          type='number'
          placeholder='Reactions'
          name='reactions'
        />
        {formik.touched.reactions && formik.errors.reactions && (
          <p className='inputErroMsg'>{formik.errors.reactions}</p>
        )}
        {/* prideti dar viea inputa
        text, jame validacija min 3 raides
        jame vartotojas iraso tagus atskirtus kableliais
        value="food, sport, jump up, buy smth"
        mes padarom masyva su reikmem
        ['food', 'sport', 'jump up', 'buy smth']
        */}
        <input
          className={
            formik.touched.tagsStringInput && formik.errors.tagsStringInput
              ? 'inputErrorField'
              : ''
          }
          placeholder='Enter comma separated tags'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tagsStringInput}
          type='text'
          name='tagsStringInput'
        />
        <InputError
          error={formik.errors.tagsStringInput}
          touch={formik.touched.tagsStringInput}
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
          type='number'
          name='userId'
          disabled
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
