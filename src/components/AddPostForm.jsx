import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from './InputError';
import { Redirect, useHistory } from 'react-router-dom';

function AddPostForm(props) {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      reactions: 0,
      tags: '',
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
      userId: Yup.number().positive().max(5).required(), // skaicius, teigiamas, nuo 1 iki 5 privalomas
    }),
    onSubmit: (values) => {
      console.log('values ===', values);

      history.push('/posts');
      // alert(JSON.stringify(values, null, 2));

      // **********************************************************************************
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          body: values.body,
          image: values.image,
          reaction: values.reactions,
          tags: values.tags,
          title: values.title,
          userId: values.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log('Sekme json ===', json);
          history.push('/posts');
        })
        .catch((error) => {
          onsole.log('Nesekme - error siunciant duomenis ??? ' + error);
        });

      ////////////////////////////////////////////////////////////////////////////////////////

      //??? sendDataFetch(values)
      // jei sekmingai nusiuntem tai console log sekme
      // jei ne tai nesekme

      // jei klaida ateina response? nepagauna klaidos?
      // toliau generuoti is response papildoma kortele?
      // redirect vyksta ir su klaida
    },
  });

  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className="card">
        <input
          className={
            formik.touched.image && formik.errors.image ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type="text"
          placeholder="Image"
          name="image"
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
          type="text"
          placeholder="Title"
          name="title"
        />

        {/* level2 error <InputError formik={formik} field={'title'} /> */}
        <InputError error={formik.errors.title} touch={formik.touched.title} />
        <textarea
          className={
            formik.touched.body && formik.errors.body ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name="body"
          placeholder="Your text"
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p className="inputErroMsg">{formik.errors.body}</p>
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
          type="number"
          placeholder="Reactions"
          name="reactions"
        />
        {formik.touched.reactions && formik.errors.reactions && (
          <p className="inputErroMsg">{formik.errors.reactions}</p>
        )}
        {/* prideti dar viea inputa
        text, jame validacija min 3 raides
        jame vartotojas iraso tagus atskirtus kableliais
        value="food, sport, jump up, buy smth"
        mes padarom masyva su reikmem
        ['food', 'sport', 'jump up', 'buy smth']
        */}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
          type="number"
          name="userId"
          disabled
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
