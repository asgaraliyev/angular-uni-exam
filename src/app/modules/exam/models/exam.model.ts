import { z } from "zod"


export const ExamFields = z.enum(["id", "lessonId", "date",]);
export const ExamSchema = z.object({
    [ExamFields.Enum.id]: z.string(),
    [ExamFields.Enum.lessonId]: z.string(),
    [ExamFields.Enum.date]: z.date(),
})


export const ExamResultFields = z.enum(["id", "examId", "grade", "studentId"]);
export const ExamResultSchema = z.object({
    [ExamResultFields.Enum.id]: z.string(),
    [ExamResultFields.Enum.examId]: z.string(),
    [ExamResultFields.Enum.studentId]: z.string(),
    [ExamResultFields.Enum.grade]: z.number().int().min(1).max(11),
})




export type Exam = z.infer<typeof ExamSchema>;
export type ExamResult = z.infer<typeof ExamResultSchema>;
