// @flow
import { ConnectionHandler } from "relay-runtime";
import { isObject, isArray } from "lodash/fp";

export function connectionUpdater(
  store,
  parentId,
  connectionName,
  edge,
  before = false
) {
  if (edge) {
    const parentProxy = store.get(parentId);
    const conn = ConnectionHandler.getConnection(parentProxy, connectionName);
    if (!conn) {
      return;
    }

    if (before) {
      ConnectionHandler.insertEdgeBefore(conn, edge);
    } else {
      ConnectionHandler.insertEdgeAfter(conn, edge);
    }
  }
}

export function optimisticConnectionUpdater({
  parentId,
  store,
  connectionName,
  item,
  customNode,
  itemType
}) {
  const node = customNode || store.create(item.id, itemType);

  !customNode &&
    Object.keys(item).forEach(key => {
      node.setValue(item[key], key);
    });

  const edge = store.create(
    "client:newEdge:" + node._dataID.match(/[^:]+$/)[0],
    `${itemType}Edge`
  );
  edge.setLinkedRecord(node, "node");

  connectionUpdater({ edge, parentId, store, connectionName });
}

export function connectionDeleteEdgeUpdater({
  parentId,
  connectionName,
  nodeId,
  store
}) {
  const parentProxy = store.get(parentId);
  const conn = ConnectionHandler.getConnection(parentProxy, connectionName);

  if (!conn) {
    console.warn(`Connection ${connectionName} not found on ${parentId}`);
    return;
  }

  ConnectionHandler.deleteNode(conn, nodeId);
}

