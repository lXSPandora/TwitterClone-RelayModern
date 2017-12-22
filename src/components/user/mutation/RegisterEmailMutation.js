import { graphql, commitMutation } from 'react-relay';
import env from '../../../config/Enviroment';

const mutation = graphql`
  mutation RegisterEmailMutation($input: RegisterEmailInput!) {
    RegisterEmail(input: $input) {
      token
    }
  }
`;

const commit = (email, name, image, password) => {
  const variables = {
    input: {
      email,
      name,
      image,
      password,
    },
  };
  return new Promise((resolve, reject) => {
    commitMutation(env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response.RegisterEmail.token);
        resolve(response.RegisterEmail.token);
      },
      onError: err => reject(err),
    });
  });
};

export default commit;
