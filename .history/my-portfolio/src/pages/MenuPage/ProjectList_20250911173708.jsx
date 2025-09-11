import React from 'react'

const ProjectList = () => {
    const projects = [
            {
                title: "반려동물 커뮤니티 Zootopia",
                subtitle: "zootopia_react",
                description: "React + Spring Boot 기반 반려동물 종합 커뮤니티 플랫폼",
                period: "2025.08.06 ~ 2025.08.27",
                teamType: "팀 프로젝트",
                status: "미배포",
                github: "https://github.com/jjwon55/zootopia_react",
                demo: "없음"
            },
            {
                stack: ["React", "Spring Boot", "Tailwind CSS", "React Router", "JWT", "HTML5", "CSS3", "JavaScript"],
                goals: ["1차 정규 프로젝트의 백엔드를 REST 방식으로 변경, 프론트엔드를 React로 변경 후 추가 기능 구현"],
                features: ["소셜로그인 - 네이버 외에 카카오와 구글 추가", "추천 병원 등록 페이지의 미흡한 점 수정 및 보완", "사용자 간 1:1 쪽지 시스템"],
                responsibilities: ["추천 동물병원 정보페이지 UI 및 기능 구현", "동물 장례 정보 페이지 UI", "사용자 간 1:1 쪽지", "소셜 로그인"],
                challenges: [
                    {
                    title: "이벤트 버블링으로 인한 중복 이벤트 발생",
                    description: "쪽지함에서 상세 쪽지 페이지 접속과 쪽지 삭제가 동시에 이뤄지는 문제 발견",
                    solution: "해결 방법"
                    }
                ]
            },
            {
                results: {
                    achievements: "성과",
                    lessons: "배운 점",
                    improvements: "개선사항"
                },
                screenshots: [
                    { title: "스크린샷 제목", image: "이미지 URL" }
                ]
            },
        ]









  return (
    <div>ProjectList</div>
  )
}

export default ProjectList