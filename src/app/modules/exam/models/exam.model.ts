import { z } from "zod"


export const ExamFields = z.enum(["id", "score", "lessonId", "date", "studentId"]);
export const ExamSchema = z.object({
    [ExamFields.Enum.id]: z.string(),
    [ExamFields.Enum.lessonId]: z.string(),
    [ExamFields.Enum.date]: z.date(),
    [ExamFields.Enum.studentId]: z.string(),
    "lessonName": z.string().optional(),
    "studentName": z.string().optional(),
    [ExamFields.Enum.score]: z.number().int().min(1).max(100).nullable(),

})

export const NewExamSchema=z.object({
    id:z.string(),
    lessonId:z.string(),
    studentIds:z.array(z.string()),
    date: z.date(),
})




export type NewExam = z.infer<typeof NewExamSchema>;
export type Exam = z.infer<typeof ExamSchema>;
