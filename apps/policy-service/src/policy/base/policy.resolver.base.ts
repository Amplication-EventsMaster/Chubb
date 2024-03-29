/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePolicyArgs } from "./CreatePolicyArgs";
import { UpdatePolicyArgs } from "./UpdatePolicyArgs";
import { DeletePolicyArgs } from "./DeletePolicyArgs";
import { PolicyCountArgs } from "./PolicyCountArgs";
import { PolicyFindManyArgs } from "./PolicyFindManyArgs";
import { PolicyFindUniqueArgs } from "./PolicyFindUniqueArgs";
import { Policy } from "./Policy";
import { PolicyService } from "../policy.service";
@graphql.Resolver(() => Policy)
export class PolicyResolverBase {
  constructor(protected readonly service: PolicyService) {}

  async _policiesMeta(
    @graphql.Args() args: PolicyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Policy])
  async policies(@graphql.Args() args: PolicyFindManyArgs): Promise<Policy[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Policy, { nullable: true })
  async policy(
    @graphql.Args() args: PolicyFindUniqueArgs
  ): Promise<Policy | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Policy)
  async createPolicy(@graphql.Args() args: CreatePolicyArgs): Promise<Policy> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Policy)
  async updatePolicy(
    @graphql.Args() args: UpdatePolicyArgs
  ): Promise<Policy | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Policy)
  async deletePolicy(
    @graphql.Args() args: DeletePolicyArgs
  ): Promise<Policy | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
