import {z} from "zod"
export const StudentFields = z.enum(["id", "firstName", "lastName", "grade"]);

export const StudentSchema=z.object({
    [StudentFields.Enum.id]:z.string(),
    [StudentFields.Enum.firstName]:z.string(),
    [StudentFields.Enum.lastName]:z.string(),
    [StudentFields.Enum.grade]:z.number().int().min(1).max(11)
})
export type Student = z.infer<typeof StudentSchema>;
