import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Github, ExternalLink, Code, Users, Calendar, MapPin, MessageCircle, Shield, Award, ChevronRight, ChevronDown, Monitor, Smartphone, Heart } from 'lucide-react';

const ZootopiaOrigin = ({ open, onClose, project }) => {

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ title, children, id, icon: Icon }) => (
    <div className="mb-6 bg-[#333333] overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-[#252525] hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-300" />}
          <h2 className="text-xl font-semibold text-[#b8b8b8]">{title}</h2>
        </div>
        {!openSections[id] ? <ChevronDown size={50} className="text-[#424242]" /> : <ChevronRight size={50} className="text-[#424242]" />}
      </button>
      {!openSections[id] && (
        <div className="px-6 py-4 text-gray-300">
          {children}
        </div>
      )}
      <div className="w-full h-[10px] bg-[#4e4e4e75]"></div>
    </div>
  );

  const TechBadge = ({ tech }) => (
    <span className="inline-block bg-[#00113380] text-[#b8b8b8] px-3 py-1 rounded-2xl text-sm mr-2 mb-2">
      {tech}
    </span>
  );

  const FeatureItem = ({ feature }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="w-2 h-2 bg-[#000000] rounded-full mt-2"></div>
      <span>{feature}</span>
    </div>
  );

  if (!project) return null; // null 체크

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{
    sx: {
      m: 2, // 상하좌우 margin 16px => margin 대신 padding도 가능
      borderRadius: 3, // 모서리 둥글게
    }
  }}>
      <div className="min-h-screen bg-gray-900 text-white max-h-[90vh] overflow-y-auto p-6">
      {/* Header */}
      <div className="w-full h-[20px] bg-gradient-to-r from-gray-600 to-gray-500"></div>
      <div className="bg-gradient-to-r from-gray-600 to-gray-500 py-12 px-6 gap-4 mx-4 border-[7px]"
            style={{
          borderStyle: "solid",
          borderWidth: "10px",
          borderImage: "linear-gradient(to right, #4b5563, #6b7280) 1",
        }}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold m-16 flex items-center gap-3">
            <Heart className="text-white" />
            반려동물 커뮤니티 (ZOOTOPIA)
          </h1>
          <p className="text-xl opacity-90 mb-6">Spring Boot + Thymeleaf 기반 반려동물 종합 커뮤니티 플랫폼</p>

          {/* Project Info Cards */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="text-yellow-400 mb-2" size={24} />
              <h3 className="font-semibold">개발 기간</h3>
              <p className="text-sm opacity-90">2025.06.26 ~ 2025.07.22</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-green-400 mb-2" size={24} />
              <h3 className="font-semibold">팀 프로젝트</h3>
              <p className="text-sm opacity-90">4명 팀 프로젝트</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Github className="text-white mb-2" size={24} />
              <h3 className="font-semibold">GitHub</h3>
              <a href="https://github.com/Yoosik-Shin/AI3_TEAM_ZOOTOPIA" className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-1">
                Repository <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="text-red-400 mb-2" size={24} />
              <h3 className="font-semibold">배포 현황</h3>
              <p className="text-sm opacity-90">[미출시]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Project Overview */}
        <div className="w-full h-[20px] bg-gradient-to-r from-gray-600 to-gray-500 "></div>
        <CollapsibleSection title="프로젝트 목표 및 담당 역할" id="goals" icon={Award}>
          <div className="space-y-6 bg-[#363636] border-[7px] border-[#363636]">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">💼 프로젝트 목표</h3>
              <p>Spring Boot, Thymeleaf 등을 이용해 사용자가 이해하기 쉬운 직관적인 UI, 자유게시판 등의 여러 기능들을 동물의 종류에 상관없이 모두 즐길 수 있는 커뮤니티</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">📌 담당 기능</h3>
              <div className="space-y-2">
                <FeatureItem feature="소셜 로그인 (네이버)" />
                <FeatureItem feature="추천 동물병원 정보 페이지 UI 및 기능 구현" />
                <FeatureItem feature="반려 동물 장례 정보페이지 UI" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">👨‍💻 담당 역할</h3>
              <p className="bg-[#363636] p-4 rounded-lg">
                맡은 기능 및 페이지에 대한 프론트엔드 및 백엔드 연동
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Tech Stack */}
        <CollapsibleSection title="기술 스택 및 아키텍처" id="tech" icon={Code}>
          <div className="space-y-6 bg-[#363636] border-[7px] border-[#363636]">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="Spring Boot" />
                <TechBadge tech="Spring Security" />
                <TechBadge tech="MyBatis" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="Thymeleaf" />
                <TechBadge tech="Bootstrap" />
                <TechBadge tech="HTML5" />
                <TechBadge tech="CSS3" />
                <TechBadge tech="JavaScript" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">External APIs</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="카카오 맵 API" />
                <TechBadge tech="네이버 소셜 로그인" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Main Features */}
        <CollapsibleSection title="주요 기능" id="features" icon={Monitor}>
          <div className="grid md:grid-cols-2 gap-6 bg-[#363636] border-[7px] border-[#363636]">
            <div className="bg-[#272727] p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-3">🏥 병원 관련 기능</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="카카오 맵 API를 이용한 내 주변 병원 검색" />
                <FeatureItem feature="추천 동물 병원 정보" />
                <FeatureItem feature="반려동물 장례 정보" />
              </div>
            </div>

            <div className="bg-[#272727] p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">👥 사용자 기능</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="회원가입 및 로그인" />
                <FeatureItem feature="네이버 소셜 로그인" />
                <FeatureItem feature="사용자 간 1:1 쪽지" />
              </div>
            </div>

            <div className="bg-[#272727] p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-3">🛍️ 서비스 기능</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="펫 보험, 펫 알바" />
                <FeatureItem feature="펫 스토어" />
              </div>
            </div>

            <div className="bg-[#272727] p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-3">💬 커뮤니티</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="자유게시판" />
                <FeatureItem feature="자랑게시판" />
                <FeatureItem feature="유실동물게시판" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Problem Solving */}
        <CollapsibleSection title="문제 해결 및 기술적 도전" id="problems" icon={Shield}>
          <div className="bg-[#363636] border-[7px] border-[#363636] rounded-lg p-6 flex flex-col gap-1 m-3">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">✅ 소셜 로그인 구현</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">도전 동기</h4>
                <p className="text-gray-300">
                  소셜 로그인이 있으면 사용자의 입장에서 편할 것 같았고 개인적으로도 꼭 해보고 싶어서 시도하였음
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">기술적 난관</h4>
                <p className="text-gray-300">
                  처음 적용하는 것은 둘째 치고 필터나 Spring Security 설정, user 테이블 수정 등 생각할 것이 상당히 많았음
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">해결 과정</h4>
                <p className="text-gray-300">
                  AI를 최대한 활용하여 수정해주어야 하는 부분을 최대한 누락 없이 관리하고 DB나 공통으로 사용하는 백엔드 코드가 바뀌는 부분에 대해 팀원들과 공유하며 구현 하였음
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Team Composition */}
        <CollapsibleSection title="팀 구성 및 역할" id="team" icon={Users}>
          <div className="grid md:grid-cols-2 gap-6 bg-[#363636] border-[7px] border-[#363636]">
            <div className="bg-[#272727c4] p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-3">👨‍💻 신유식</h3>
              <div className="space-y-1 text-sm">
                <p>• 추천 병원 UI & CRUD</p>
                <p>• 반려동물 장례 페이지 UI</p>
                <p>• 소셜로그인 (네이버)</p>
              </div>
            </div>

            <div className="bg-[#272727c4] p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">👨‍💻 이윤태</h3>
              <div className="space-y-1 text-sm">
                <p>• 보험 및 펫 아르바이트 페이지 개발</p>
                <p>• 메인 페이지 개발</p>
                <p>• CRUD 기반 백엔드 개발</p>
              </div>
            </div>

            <div className="bg-[#272727c4] p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-3">👨‍💻 전주원</h3>
              <div className="space-y-1 text-sm">
                <p>• 카카오맵 API 활용하여 지도 페이지 개발</p>
                <p>• CRUD 기반 커뮤니티 개발</p>
              </div>
            </div>

            <div className="bg-[#272727c4] p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-3">👨‍💻 홍성민</h3>
              <div className="space-y-1 text-sm">
                <p>• 애완동물 관련 제품 구매 및 결제 페이지 개발</p>
                <p>• CRUD 기반 백엔드 개발</p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Collaboration */}
        <CollapsibleSection title="협업 및 커뮤니케이션" id="collaboration" icon={MessageCircle}>
          <div className="bg-[#363636] border-[7px] border-[#363636] rounded-lg p-6 flex flex-col gap-1 m-3">
            <div className="bg-[#202020] p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">📋 프로젝트 관리</h3>
              <p>Notion을 사용하여 코드 및 여러 정보를 공유</p>
            </div>

            <div className="bg-[#202020] p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-3">🗃️ 데이터베이스 설계</h3>
              <p>ERD-Cloud를 통한 데이터베이스 설계 및 공유</p>
            </div>

            <div className="bg-[#202020] p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-3">🎨 UI/UX 설계</h3>
              <p>Figma를 통한 대략적인 화면 설계 및 공유</p>
            </div>

            <div className="bg-[#202020] p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-3">⚡ 버전 관리</h3>
              <p>Git, Github로 전체적인 버전 관리</p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Development Results */}
        <CollapsibleSection title="개발 결과 및 회고" id="results" icon={Award}>
          <div className="space-y-6 bg-[#363636] border-[7px] border-[#363636] flex flex-col gap-1.5">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">📈 개발 결과</h3>
              <p>커뮤니티의 주요 기능인 회원가입 및 로그인과 커뮤니티 게시판 기능 구현 완료</p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">🤔 회고</h3>
              <div className="space-y-3">
                <p><strong>성과:</strong> 처음 목표로 하였던 기능들은 미흡하지만 거의 구현을 완료했습니다.</p>
                <p><strong>아쉬운 점:</strong> 소셜 로그인을 네이버 밖에 적용하지 못한 것이 아쉬운 점으로 남았습니다.</p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Screenshots */}
        <CollapsibleSection title="담당 페이지 및 기능 스크린샷" id="screenshots" icon={Monitor}>
          <div className="grid md:grid-cols-3 gap-4 bg-[#363636] border-[7px] border-[#363636]">
            {[
              "메인 페이지",
              "회원가입",
              "로그인",
              "추천 병원",
              "반려동물 장례정보",
              "소셜로그인 (네이버)",
              "스토어",
              "내 주변 찾기",
              "펫 알바",
              "펫 보험",
              "게시판"
            ].map((screenshot, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="bg-gray-700 h-32 rounded-lg mb-3 flex items-center justify-center">
                  <Monitor className="text-gray-500" size={40} />
                </div>
                <p className="text-sm text-gray-300">{screenshot}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>


        {/* Learning Outcomes */}
        {/* <CollapsibleSection title="프로젝트를 통한 성장" id="learning" icon={Award}>
          <div className="bg-[#363636] border-[10px] border-[#363636] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">✅ 달성한 것들</h4>
                <div className="space-y-1 text-sm">
                  <p>• 웹 애플리케이션의 기본 구조 이해</p>
                  <p>• 서블릿과 JSP를 활용한 동적 웹페이지 개발</p>
                  <p>• MySQL과의 데이터베이스 연동</p>
                  <p>• 팀 프로젝트 경험과 협업 도구 활용</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400 mb-2">🎯 향후 개선 방향</h4>
                <div className="space-y-1 text-sm">
                  <p>• 미완성된 답변 등록 기능 완성</p>
                  <p>• 더 직관적인 UI/UX 개선</p>
                  <p>• 예외 처리 및 에러 핸들링 강화</p>
                  <p>• 모던 프레임워크로의 마이그레이션</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection> */}
      </div>
    </div>
    </Dialog>
  );
};

export default ZootopiaOrigin;
