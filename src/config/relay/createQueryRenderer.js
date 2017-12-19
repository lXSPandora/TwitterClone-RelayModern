// @flow
import * as React from "react";
import hoistStatics from "hoist-non-react-statics";
import type { GraphQLTaggedNode, Variables } from "react-relay";
import { QueryRenderer } from "react-relay";
import Snackbar from "react-native-snackbar";
import env from "../Enviroment";
import LoadingView from "../../components/common/LoadingView";

export default function createQueryRenderer(
  FragmentComponent,
  Component,
  config
) {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props)
        : config.variables;

      return (
        <QueryRenderer
          environment={env}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            if (error) {
              return Snackbar.show({
                title: "Ocorreu um erro inesperado deseja tentar novamente?",
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                  title: "RETRY",
                  color: "rgb(0, 148, 255)",
                  onPress: () => {
                    retry();
                  }
                }
              });
            }

            if (props) {
              return <FragmentComponent {...this.props} query={props} />;
            }

            return <LoadingView />;
          }}
        />
      );
    }
  }

  return hoistStatics(QueryRendererWrapper, Component);
}
