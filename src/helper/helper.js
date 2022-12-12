export function stringTagsToArr(str) {
  // lvl2
  return str
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length);

  // str === "html, css, node"
  // ['html', 'css', 'node']
  const tagArr = str.split(',');
  console.log('tagArr ===', tagArr);
  const arrWithNoWhiteSpace = tagArr.map((tag) => tag.trim());
  console.log('arrWithNoWhiteSpace ===', arrWithNoWhiteSpace);
  // ['0', 'blue', '', 'green', 'sun', '']
  const noEmptyTags = arrWithNoWhiteSpace.filter((tag) => tag.length);
  console.log('noEmptyTags ===', noEmptyTags);
  return noEmptyTags;
}

const BASE_URL = 'http://localhost:8001';

export function sendFetch(whatToSend) {
  let url = 'https://dummyjson.com/posts/add';
  url = 'http://localhost:8001/posts';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(whatToSend),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch(console.warn);
}

export function sendDelete(id) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  })
    .then((resp) => {
      console.log('resp ===', resp);
    })
    .catch(console.warn);
}
export function sendDeletePatch(id) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      archived: true,
    }),
  })
    .then((resp) => {
      console.log('resp ===', resp);
      if (resp.status === 200) return true;
      // return resp.json();
      console.warn('status is not 200 and there are no catch errror');
    })
    .catch(console.warn);
}

export function getPosts(endpoint = 'posts') {
  // pakeisti url taip kad naujausi postai butu virsuje (rikiuojam pagal id)
  // const url = 'http://localhost:8001/posts?_sort=id&_order=desc';
  return fetch(`${BASE_URL}/${endpoint}?archived=false`)
    .then((resp) => resp.json())
    .catch((err) => console.warn('some problem', err));
}
