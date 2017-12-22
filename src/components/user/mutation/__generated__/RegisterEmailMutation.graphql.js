/**
 * @flow
 * @relayHash 9926cc4d79cc4576f85cb929a42a6ddc
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RegisterEmailMutationVariables = {|
  input: {
    name: string;
    image: string;
    email: string;
    password: string;
    clientMutationId?: ?string;
  };
|};
export type RegisterEmailMutationResponse = {|
  +RegisterEmail: ?{|
    +token: ?string;
  |};
|};
*/


/*
mutation RegisterEmailMutation(
  $input: RegisterEmailInput!
) {
  RegisterEmail(input: $input) {
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
        "type": "RegisterEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterEmailMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RegisterEmailInput!"
          }
        ],
        "concreteType": "RegisterEmailPayload",
        "name": "RegisterEmail",
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
  "name": "RegisterEmailMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RegisterEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RegisterEmailMutation",
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
            "type": "RegisterEmailInput!"
          }
        ],
        "concreteType": "RegisterEmailPayload",
        "name": "RegisterEmail",
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
  "text": "mutation RegisterEmailMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    token\n  }\n}\n"
};

module.exports = batch;
