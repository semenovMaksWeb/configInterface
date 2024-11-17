import { TypeVarEnum } from "./libs.interface";

export interface JsonMappingSchema {
    key: string;
    type: TypeVarEnum;
    init: boolean;
    path?: string[];
    root?: string[];
    const?: any;
    children?: JsonMappingSchema[];
}