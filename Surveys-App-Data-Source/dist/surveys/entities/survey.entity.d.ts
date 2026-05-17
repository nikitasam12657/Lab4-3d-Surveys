import { Response } from "../../responses/entities/response.entity";
export declare class Survey {
    id: string;
    title: string;
    description: string;
    responses: Response[];
}
