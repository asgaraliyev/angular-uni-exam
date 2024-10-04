import {z} from "zod"
export const LessonFields = z.enum(["id", "name", "grade", "teacherFirstName", "teacherLastName"]);

export const LessonSchema=z.object({
    [LessonFields.Enum.id]: z.string(),
    [LessonFields.Enum.name]: z.string(),
    [LessonFields.Enum.grade]:z.number().int().min(1).max(11),
    [LessonFields.Enum.teacherFirstName]:z.string(),
    [LessonFields.Enum.teacherLastName]:z.string(),
})
export type Lesson = z.infer<typeof LessonSchema>;
