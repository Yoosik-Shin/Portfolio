import React from 'react'

const ProjectList = () => {
    const projects = [
            {
                title: "반려동물 커뮤니티 Zootopia",
                subtitle: "zootopia_react",
                description: "React + Spring Boot 기반 반려동물 종합 커뮤니티 플랫폼",
                period: "2025.08.06 ~ 2025.08.27",
                teamType: "팀/개인 프로젝트",
                status: "배포 상태",
                github: "GitHub URL",
                demo: "데모 URL"
            },
            {
                stack: ["React", "Spring Boot", ...],
                goals: ["목표1", "목표2", ...],
                features: ["기능1", "기능2", ...],
                responsibilities: ["역할1", "역할2", ...],
                challenges: [
                    {
                    title: "문제 제목",
                    description: "문제 설명",
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