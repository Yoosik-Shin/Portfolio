import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Github, ExternalLink, Code, Users, Calendar, MapPin, MessageCircle, Shield, Award, ChevronRight, ChevronDown, Monitor, Smartphone } from 'lucide-react';

const TheJoyfulDelivery = ({ open, onClose, project }) => {

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ title, children, id, icon: Icon }) => (
    <div className="mb-6 bg-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-blue-400" />}
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        {openSections[id] ? <ChevronDown size={20} className="text-gray-400" /> : <ChevronRight size={20} className="text-gray-400" />}
      </button>
      {openSections[id] && (
        <div className="px-6 py-4 text-gray-300">
          {children}
        </div>
      )}
    </div>
  );

  const TechBadge = ({ tech }) => (
    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
      {tech}
    </span>
  );

  const FeatureItem = ({ feature }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
      <span>{feature}</span>
    </div>
  );

  if (!project) return null; // null 체크

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Truck className="text-white" />
            택배 접수 및 조회 관리 시스템 (The Joyful Delivery)
          </h1>
          <p className="text-xl opacity-90 mb-6">Java Servlet + JSP 기반 택배 관리 시스템</p>
          
          {/* Project Info Cards */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="text-yellow-400 mb-2" size={24} />
              <h3 className="font-semibold">개발 기간</h3>
              <p className="text-sm opacity-90">2025.05.16 ~ 2025.05.28</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-green-400 mb-2" size={24} />
              <h3 className="font-semibold">팀 프로젝트</h3>
              <p className="text-sm opacity-90">웹 개발</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Github className="text-white mb-2" size={24} />
              <h3 className="font-semibold">GitHub</h3>
              <a href="https://github.com/skymin022/the_joyful_delivery" className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-1">
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
        <CollapsibleSection title="프로젝트 목표 및 담당 역할" id="goals" icon={Award}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">💼 프로젝트 목표</h3>
              <p>웹페이지를 통한 간편한 택배 접수 및 조회 시스템</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">📌 담당 기능</h3>
              <div className="space-y-2">
                <FeatureItem feature="메인화면의 전체적인 UI 구현" />
                <FeatureItem feature="어드민 페이지의 문의사항 조회 및 문의사항 답변 기능 구현" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">👨‍💻 담당 역할</h3>
              <p className="bg-gray-800 p-4 rounded-lg">
                메인 화면 및 헤더와 푸터 UI, 어드민 페이지의 문의 사항 관리 기능 구현 [프론트엔드 / 백엔드 연동]
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Tech Stack */}
        <CollapsibleSection title="기술 스택 및 아키텍처" id="tech" icon={Code}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="Java" />
                <TechBadge tech="Servlet" />
                <TechBadge tech="MySQL" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge tech="JSP" />
                <TechBadge tech="HTML5" />
                <TechBadge tech="CSS3" />
                <TechBadge tech="JavaScript" />
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-yellow-400 font-semibold mb-2">🏗️ 아키텍처 특징</h3>
              <p className="text-gray-300 text-sm">
                전통적인 MVC 패턴을 기반으로 한 서블릿-JSP 아키텍처를 사용하여 
                웹 애플리케이션의 기본 구조를 학습하고 구현
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Main Features */}
        <CollapsibleSection title="주요 기능" id="features" icon={Monitor}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-400 mb-3">📦 택배 관리</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="비회원의 운송장 번호 조회" />
                <FeatureItem feature="회원 택배 접수 및 조회" />
                <FeatureItem feature="배송 현황 관리" />
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">👥 사용자 관리</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="회원 가입 및 로그인" />
                <FeatureItem feature="회원 정보 관리" />
                <FeatureItem feature="택배기사 관리" />
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-3">💬 고객 지원</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="고객센터 문의사항" />
                <FeatureItem feature="문의사항 조회" />
                <FeatureItem feature="관리자 답변 시스템" />
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-3">🔧 관리자 기능</h3>
              <div className="space-y-2 text-sm">
                <FeatureItem feature="관리자 로그인" />
                <FeatureItem feature="배송 현황 관리" />
                <FeatureItem feature="회원의 문의사항 관리" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Collaboration */}
        <CollapsibleSection title="협업 및 커뮤니케이션" id="collaboration" icon={MessageCircle}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">📋 프로젝트 관리</h3>
              <p>Notion을 사용하여 코드 및 여러 정보를 공유</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-3">🗃️ 데이터베이스 설계</h3>
              <p>ERD-Cloud를 통한 데이터베이스 설계 및 공유</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-3">🎨 UI/UX 설계</h3>
              <p>Figma를 통한 대략적인 화면 설계 및 공유</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-3">⚡ 버전 관리</h3>
              <p>Git, Github로 전체적인 버전 관리</p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Development Results & Reflection */}
        <CollapsibleSection title="개발 결과 및 회고" id="results" icon={Award}>
          <div className="space-y-6">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">📈 개발 성과</h3>
              <div className="space-y-2">
                <p>• 처음 설계하였던 UI는 유사하게 완성</p>
                <p>• 고객 문의사항을 클릭하여 답변 모달을 띄우는데 까지 성공</p>
                <p>• 기본적인 웹 애플리케이션 구조 이해 및 구현</p>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">🤔 회고 및 아쉬운 점</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">미완성 부분</h4>
                  <p className="text-gray-300 text-sm">메뉴 구성에서 아이디어가 떠오르지 않아 미완성된 부분이 있음</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">기술적 한계</h4>
                  <p className="text-gray-300 text-sm">답변을 등록하는 기능은 아직 미구현 상태로 남음</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">💡 학습 경험</h3>
              <div className="space-y-2">
                <p>• <strong>첫 웹 프로젝트</strong>로서 기본적인 웹 개발 프로세스 학습</p>
                <p>• <strong>Servlet과 JSP</strong>를 통한 서버 사이드 렌더링 경험</p>
                <p>• <strong>팀 협업</strong>과 <strong>Git 사용법</strong> 습득</p>
                <p>• <strong>데이터베이스 연동</strong>과 <strong>CRUD 기능</strong> 구현 경험</p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Screenshots */}
        <CollapsibleSection title="담당 페이지 및 기능 스크린샷" id="screenshots" icon={Monitor}>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "메인 페이지",
              "헤더 및 네비게이션",
              "푸터",
              "운송장 조회",
              "회원가입",
              "로그인",
              "택배 접수",
              "관리자 페이지",
              "문의사항 관리",
              "문의사항 답변 모달",
              "배송 현황",
              "회원 관리"
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
        <CollapsibleSection title="프로젝트를 통한 성장" id="learning" icon={Award}>
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">🚀 기술적 성장</h3>
            
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
        </CollapsibleSection>

      </div>
    </div>
    </Dialog>
  );
};

export default TheJoyfulDelivery;
