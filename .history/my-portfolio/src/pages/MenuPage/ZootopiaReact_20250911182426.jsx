import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Github, ExternalLink, Code, Users, Calendar, MapPin, MessageCircle, Shield, Award, ChevronRight, ChevronDown, Monitor, Smartphone } from 'lucide-react';

const ZootopiaReact = ({ open, onClose, project }) => {

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
      <div className="min-h-screen bg-gray-900 text-white min-h-[500px] max-h-[90vh] overflow-y-auto p-6 bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Smartphone className="text-white" />
              반려동물 커뮤니티 (zootopia_react)
            </h1>
            <p className="text-xl opacity-90 mb-6">React + Spring Boot 기반 반려동물 종합 커뮤니티 플랫폼</p>
            
            {/* Project Info Cards */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="text-yellow-400 mb-2" size={24} />
                <h3 className="font-semibold">개발 기간</h3>
                <p className="text-sm opacity-90">2025.08.06 ~ 2025.08.27</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="text-green-400 mb-2" size={24} />
                <h3 className="font-semibold">팀 프로젝트</h3>
                <p className="text-sm opacity-90">풀스택 개발</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Github className="text-white mb-2" size={24} />
                <h3 className="font-semibold">GitHub</h3>
                <a href="https://github.com/jjwon55/zootopia_react" className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-1">
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
                <h3 className="text-lg font-semibold text-blue-400 mb-3">💼 프로젝트 목표</h3>
                <p>1차 정규 프로젝트의 백엔드를 REST 방식으로 변경, 프론트엔드를 React로 변경 후 추가 기능 구현</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">📌 추가 구현 기능</h3>
                <div className="space-y-2">
                  <FeatureItem feature="소셜로그인 - 네이버 외에 카카오와 구글 추가" />
                  <FeatureItem feature="추천 병원 등록 페이지의 미흡한 점 수정 및 보완" />
                  <FeatureItem feature="사용자 간 1:1 쪽지 시스템" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">👨‍💻 담당 역할</h3>
                <p className="bg-gray-800 p-4 rounded-lg">
                  추천 동물병원 정보페이지 UI 및 기능 구현, 동물 장례 정보 페이지 UI, 사용자 간 1:1 쪽지, 소셜 로그인 [프론트엔드 / 백엔드 연동]
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Tech Stack */}
          <CollapsibleSection title="기술 스택 및 아키텍처" id="tech" icon={Code}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="Spring Boot" />
                  <TechBadge tech="JWT" />
                  <TechBadge tech="REST API" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="React" />
                  <TechBadge tech="Tailwind CSS" />
                  <TechBadge tech="MUI" />
                  <TechBadge tech="React Router" />
                  <TechBadge tech="HTML5" />
                  <TechBadge tech="CSS3" />
                  <TechBadge tech="JavaScript" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">External APIs</h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="카카오 맵 API" />
                  <TechBadge tech="소셜 로그인 API" />
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Main Features */}
          <CollapsibleSection title="주요 기능" id="features" icon={Monitor}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-3">🏥 병원 관련 기능</h3>
                <div className="space-y-2 text-sm">
                  <FeatureItem feature="카카오 맵 API를 이용한 내 주변 병원 검색" />
                  <FeatureItem feature="추천 동물 병원 정보" />
                  <FeatureItem feature="병원 등록 및 수정" />
                  <FeatureItem feature="병원 상세 정보 조회" />
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-green-400 mb-3">👥 사용자 기능</h3>
                <div className="space-y-2 text-sm">
                  <FeatureItem feature="회원가입 및 로그인" />
                  <FeatureItem feature="소셜 로그인 (네이버, 카카오, 구글)" />
                  <FeatureItem feature="사용자 간 1:1 쪽지" />
                  <FeatureItem feature="커뮤니티 게시판" />
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-400 mb-3">🛍️ 서비스 기능</h3>
                <div className="space-y-2 text-sm">
                  <FeatureItem feature="펫 보험, 펫 알바" />
                  <FeatureItem feature="펫 스토어" />
                  <FeatureItem feature="동물 장례 정보" />
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-3">💬 커뮤니티</h3>
                <div className="space-y-2 text-sm">
                  <FeatureItem feature="자랑게시판" />
                  <FeatureItem feature="유실동물 게시판" />
                  <FeatureItem feature="다양한 커뮤니티 게시판" />
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Problem Solving */}
          <CollapsibleSection title="문제 해결 및 기술적 도전" id="problems" icon={Shield}>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">✅ 이벤트 버블링으로 인한 중복 이벤트 발생</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">문제 상황</h4>
                  <p className="text-gray-300">쪽지함에서 상세 쪽지 페이지 접속과 쪽지 삭제가 동시에 이뤄지는 문제 발견</p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">원인 분석</h4>
                  <p className="text-gray-300">이벤트 버블링으로 상세 페이지 접속과 삭제라는 두 가지 이벤트가 한번의 클릭으로 동시에 발생</p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">해결 방법 검토</h4>
                  <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                    <p><strong>방법 1:</strong> e.stopPropagation() + e.preventDefault() 사용</p>
                    <p><strong>방법 2:</strong> 상세 페이지 링크와 삭제 버튼을 UI적으로 분리</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-2">선택한 해결책</h4>
                  <p className="text-gray-300">
                    <strong>방법 2를 선택</strong> - 근본적인 원인의 해결이라고 판단했고, 분리를 하면 UI가 조금 더 보기 편해질 것이라는 판단
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Development Results */}
          <CollapsibleSection title="개발 결과 및 회고" id="results" icon={Award}>
            <div className="space-y-6">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">📈 개발 결과</h3>
                <p>목표로 했던 대부분의 기능 구현 완료</p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">🤔 아쉬웠던 점</h3>
                <div className="space-y-3">
                  <p>• 관리자 이외의 권한 (반려동물 전문가 및 수의사 권한)을 이용한 서비스를 구현하지 못한 점</p>
                  <p>• 비주류 동물을 위한 차별화된 기능을 충분히 구현하지 못하고 병원 필터 기능에만 그친 점</p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">💡 배운 점</h3>
                <p>
                  배포 이후에 동작하지 않는 기능들을 발견하였고, 개발 환경과 배포 환경은 생각보다 많이 다르며 
                  개발 환경에서 정상 작동하는 기능들이 배포 이후에는 동작하지 않을 수도 있다는 것을 깨달았습니다. 
                  앞으로의 개발에서는 배포 환경을 꼭 고려하여 개발해야겠다고 생각했습니다.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Collaboration */}
          <CollapsibleSection title="협업 및 커뮤니케이션" id="collaboration" icon={Users}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-3">📋 프로젝트 관리</h3>
                <p>Notion을 사용하여 코드 및 여러 정보를 공유</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-green-400 mb-3">⚡ 버전 관리</h3>
                <p>Git, Github로 전체적인 버전 관리</p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Screenshots */}
          <CollapsibleSection title="담당 페이지 및 기능 스크린샷" id="screenshots" icon={Monitor}>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "서브 메뉴 수정 및 보완",
                "추천 병원 리스트", 
                "병원 상세 페이지",
                "지도로 이동 및 검색",
                "병원 등록 & 수정 페이지",
                "쪽지함",
                "쪽지 상세 페이지",
                "쪽지 보내기",
                "소셜로그인"
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

        </div>
    </div>
    </Dialog>
  );
};

export default ZootopiaReact;
