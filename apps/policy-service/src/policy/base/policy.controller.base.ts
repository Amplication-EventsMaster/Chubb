/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PolicyService } from "../policy.service";
import { PolicyCreateInput } from "./PolicyCreateInput";
import { PolicyWhereInput } from "./PolicyWhereInput";
import { PolicyWhereUniqueInput } from "./PolicyWhereUniqueInput";
import { PolicyFindManyArgs } from "./PolicyFindManyArgs";
import { PolicyUpdateInput } from "./PolicyUpdateInput";
import { Policy } from "./Policy";

export class PolicyControllerBase {
  constructor(protected readonly service: PolicyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Policy })
  async create(@common.Body() data: PolicyCreateInput): Promise<Policy> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        effectedDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Policy] })
  @ApiNestedQuery(PolicyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Policy[]> {
    const args = plainToClass(PolicyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        effectedDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Policy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PolicyWhereUniqueInput
  ): Promise<Policy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        effectedDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Policy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PolicyWhereUniqueInput,
    @common.Body() data: PolicyUpdateInput
  ): Promise<Policy | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          effectedDate: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Policy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PolicyWhereUniqueInput
  ): Promise<Policy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          effectedDate: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
