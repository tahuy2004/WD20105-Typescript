import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type RegisterType = z.infer<typeof RegisterSchema>;
