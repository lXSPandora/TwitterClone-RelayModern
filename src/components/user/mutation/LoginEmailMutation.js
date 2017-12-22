import { graphql, commitMutation } from "react-relay";
import env from "../../../config/Enviroment";

const mutation = graphql`
  mutation LoginEmailMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
    }
  }
`;

const commit = (email, password) => {
  const variables = {
    input: {
      email,
      password
    }
  };
  return new Promise((resolve, reject) => {
    commitMutation(env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response.LoginEmail.token);
        resolve(response.LoginEmail.token);
      },
      onError: err => reject(err)
    });
  });
};

export default commit;
