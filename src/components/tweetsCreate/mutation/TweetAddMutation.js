import { graphql, commitMutation } from 'react-relay';
import env from '../../../config/Enviroment';

const mutation = graphql`
  mutation TweetAddMutation($input: TweetAddInput!) {
    TweetAdd(input: $input) {
      error
    }
  }
`;

// Adds a new Tweet
const commit = (username, userImage, text, likes, onFinish, onError) => {
  return commitMutation(env, {
    mutation,
    variables: {
      input: {
        username,
        userImage,
        text,
        likes,
      },
    },
    onFinish,
    onError,
  });
};

export default commit;
