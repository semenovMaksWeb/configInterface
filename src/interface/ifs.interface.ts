import { StoreConfigElement } from "./store.interface";

export enum ifsOperator {
    "==" = "==",
    ">" = ">",
    "<" = "<",
    "!=" = "!=",
    "<=" = "<=",
    ">=" = ">=",
}

export type OperatorAction = { [key in ifsOperator]: (a: any, b: any) => boolean }

export type OperatorConfig = {
    operator: ifsOperator;
}

export type IfsRunConfig = StoreConfigElement | OperatorConfig | boolean;