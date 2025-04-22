"use client";

import useSignUp from "@/src/entities/auth/model/use-sign-up";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/shadcn-ui/components";

export default function SignUpPage() {
  const { form, onSubmit } = useSignUp();
  return (
    <>
      <section className="flex flex-col">
        <h2 className="text-3xl font-black">회원가입</h2>
        <p>모든 항목은 필수 입력사항입니다.</p>
      </section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input placeholder="아이디 입력" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>휴대폰 번호</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-1.5">
            <FormField
              control={form.control}
              name="userBirth"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>생년월일</FormLabel>
                    <div className="flex gap-2">
                      <Select
                        onValueChange={(value) =>
                          field.onChange({ ...field.value, year: value })
                        }
                        value={field.value.year}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="년도" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <SelectItem key={year} value={String(year)}>
                                {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={(value) =>
                          field.onChange({ ...field.value, month: value })
                        }
                        value={field.value.month}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="월" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => (
                            <SelectItem key={i + 1} value={String(i + 1)}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={(value) =>
                          field.onChange({ ...field.value, day: value })
                        }
                        value={field.value.day}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="일" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 31 }, (_, i) => (
                            <SelectItem key={i + 1} value={String(i + 1)}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
          </div>
          <Button type="submit">회원가입</Button>
        </form>
      </Form>
    </>
  );
}
