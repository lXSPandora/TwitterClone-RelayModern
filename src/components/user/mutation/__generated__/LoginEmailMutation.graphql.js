/**
 * @flow
 * @relayHash 37ae2d7e1235be50aa3f102cdade0342
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LoginEmailMutationVariables = {|
  input: {
    email: string;
    password: string;
    clientMutationId?: ?string;
  };
|};
export type LoginEmailMutationResponse = {|
  +LoginEmail: ?{|
    +token: ?string;
  |};
|};
*/


/*
mutation LoginEmailMutation(
  $input: LoginEmailInput!
) {
  LoginEmail(input: $input) {
    token
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginEmailMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LoginEmailInput!"
          }
        ],
        "concreteType": "LoginEmailPayload",
        "name": "LoginEmail",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LoginEmailMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "LoginEmailMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LoginEmailInput!"
          }
        ],
        "concreteType": "LoginEmailPayload",
        "name": "LoginEmail",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation LoginEmailMutation(\n  $input: LoginEmailInput!\n) {\n  LoginEmail(input: $input) {\n    token\n  }\n}\n"
};

module.exports = batch;
