# React

## Links

1. https://formik.org/docs/tutorial
2. https://formik.org/docs/tutorial#schema-validation-with-yup
3. https://www.npmjs.com/package/yup


## One post obj

```javascript
{
    "id": 1,
    "image": "https://github.com/MariusCodeAcademy/posts-rest-json-server/blob/main/assets/html.jpg?raw=true",
    "title": "What is HTML?",
    "body": "HTML is a programming language that stands for Hypertext Markup Language. ,
    "archived": false,
    "userId": 9,
    "tags": ["front-end", "web-development"],
    "reactions": 2
  },
```

## Add formik

1. `npm install formik`
2. import useFormik hook and add configuration object
3. initialValues: pradindes input reiksmes
4. onSubmit - kas vyks pateikiant forma
5. susieti inputus su onChange ir value


## Add yup - validacijos paketas

1. `npm install yup`
2. import * as Yup from 'yup'

## Practice

1. prideti likusiem inputams klaidas su touched
2. prideti kad klases generuotusi su touched
3. pakeisti klaidos jsx 
```javascript
{formik.touched.image && formik.errors.image && (
  <p className='inputErroMsg'>{formik.errors.image}</p>
)}
```
i 
`<InputError error={formik.errors.image} touched={formik.touched.image} />`
4. vietoj `formik.touched.image && formik.errors.image ? 'inputErrorField' : ''` className padaryti su pagalbine funkcija getErrorClass(formik, 'image')
5. padaryti kad veiktu (level2) error `<InputError formik={formik} field={'title'} />`

## more practice

1. sukurti puslapi PostsPage
2. sukurti komponenta SinglePost kuris atvaizduos posta su siek tiek stiliaus.(atvaizuos is objekto pavaizduoto virsuje )
3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.
4. PostsPage generuoti SinglePost use paduodant jiems duomenis is state