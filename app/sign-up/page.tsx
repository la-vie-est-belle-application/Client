"use client";

import { useState } from "react";
import { handleSignUp } from "@/src/entities/auth";

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");

  return (
    <div className="auth-container">
      <div className="tabs">
        <button
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          회원가입
        </button>
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          로그인
        </button>
      </div>

      {activeTab === "signup" ? (
        <form action={handleSignUp} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">성별</label>
            <select id="gender" name="gender" required>
              <option value="">성별을 선택하세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">휴대폰 번호</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="휴대폰 번호를 입력하세요"
            />
          </div>

          <button type="submit">회원가입</button>
        </form>
      ) : (
        <form className="login-form">{/* 로그인 폼 구현 */}</form>
      )}
    </div>
  );
}
