import { z } from "zod"
export const ExamFields = z.enum(["id", "lessonId", "studentId", "date", "grade"]);

export const ExamSchema = z.object({
    [ExamFields.Enum.id]: z.string(),
    [ExamFields.Enum.lessonId]: z.string(),
    [ExamFields.Enum.studentId]: z.string(),
    [ExamFields.Enum.date]: z.date(),
    [ExamFields.Enum.grade]: z.number().int().min(1).max(11)
})
export type Exam = z.infer<typeof ExamSchema>;
