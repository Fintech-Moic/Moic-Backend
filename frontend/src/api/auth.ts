import { FieldValues } from 'react-hook-form';

const SERVER_URL = 'https://moic.site/api/v1';

const signInApi = async (formData: FieldValues) => {
  await fetch(`${SERVER_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('access_token', data.data.accessToken);
    })
    .catch((error: Error) => {
      console.log(error);
    });
};

export default signInApi;
