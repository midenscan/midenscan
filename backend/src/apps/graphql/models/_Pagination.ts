import { IsEmpty, IsNotEmpty } from "class-validator";
import * as Relay from "graphql-relay";
import { ObjectType, Field, ArgsType, ClassType, Int } from "type-graphql";

@ArgsType()
export class ConnectionArgs implements Relay.ConnectionArguments {
  @IsEmpty()
  @Field(() => String, { nullable: true })
  before?: Nullable<Relay.ConnectionCursor>;

  @Field(() => String, { nullable: true })
  after?: Nullable<Relay.ConnectionCursor>;

  // DEVNOTE: must always be set because only forward pagination is accepted
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  first?: Nullable<number>;

  // DEVNOTE: backwards pagination is currently not supported
  @IsEmpty()
  @Field(() => Int, { nullable: true })
  last?: Nullable<number>;
}

@ObjectType("PageInfo")
class PageInfo implements Relay.PageInfo {
  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Boolean)
  hasPreviousPage: boolean;

  @Field(() => String, { nullable: true })
  startCursor: Nullable<Relay.ConnectionCursor>;

  @Field(() => String, { nullable: true })
  endCursor: Nullable<Relay.ConnectionCursor>;
}

export function EdgeType<NodeType>(
  nodeName: string,
  nodeType: ClassType<NodeType>
) {
  @ObjectType(`${nodeName}Edge`, { isAbstract: true })
  abstract class Edge implements Relay.Edge<NodeType> {
    @Field(() => nodeType)
    node: NodeType;

    @Field(() => String)
    cursor: Relay.ConnectionCursor;
  }

  return Edge;
}

type ExtractNodeType<EdgeType> = EdgeType extends Relay.Edge<infer NodeType>
  ? NodeType
  : never;

export function ConnectionType<
  EdgeType extends Relay.Edge<NodeType>,
  NodeType = ExtractNodeType<EdgeType>
>(nodeName: string, edgeClass: ClassType<EdgeType>) {
  @ObjectType(`${nodeName}Connection`, { isAbstract: true })
  abstract class Connection implements Relay.Connection<NodeType> {
    @Field(() => PageInfo)
    pageInfo: PageInfo;

    @Field(() => [edgeClass])
    edges: EdgeType[];
  }

  return Connection;
}
