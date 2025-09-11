// import React from "react";
// import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";

// const CardDialog = ({ open, onClose, project }) => {

//   const [openSections, setOpenSections] = useState({});

//   if (!project) return null; // null 체크

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <DialogTitle>{project.title}</DialogTitle>
//         <DialogContent>
//           <img
//             src={project.image}
//             alt={project.title}
//             className="rounded-lg mb-4 w-[800px] h-[500px]"
//           />
//           <p className="text-gray-700 mb-4">{project.description}</p>
//           <h4 className="font-semibold mb-2">사용 기술</h4>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.stack.map((tech, idx) => (
//               <span
//                 key={idx}
//                 className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           {project.github && (
//             <Button
//               variant="contained"
//               startIcon={<FaGithub />}
//               href={project.github}
//               target="_blank"
//             >
//               GitHub 바로가기
//             </Button>
//           )}
//         </DialogContent>
//       </motion.div>
//     </Dialog>
//   );
// };

// export default CardDialog;










import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { 
  X, 
  Calendar, 
  Users, 
  Code, 
  Monitor, 
  Shield, 
  Award, 
  ChevronRight, 
  ChevronDown,
  ExternalLink
} from "lucide-react";

const CardDialog = ({ open, onClose, project }) => {
  const [openSections, setOpenSections] = useState({});

  if (!project) return null;

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
          <h3 className="text-lg font-semibold text-white">{title}</h3>
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
      <span className="text-sm">{feature}</span>
    </div>
  );

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          maxHeight: '90vh',
          overflow: 'hidden'
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white rounded-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-6 relative">
          <IconButton
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            size="small"
          >
            <X size={20} />
          </IconButton>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Monitor className="text-white" />
              {project.title}
            </h1>
            <p className="text-lg opacity-90 mb-6">{project.subtitle || project.description}</p>
            
            {/* Project Info Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              {project.period && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="text-yellow-400 mb-2" size={20} />
                  <h4 className="font-semibold text-sm">개발 기간</h4>
                  <p className="text-xs opacity-90">{project.period}</p>
                </div>
              )}
              
              {project.teamType && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="text-green-400 mb-2" size={20} />
                  <h4 className="font-semibold text-sm">프로젝트 유형</h4>
                  <p className="text-xs opacity-90">{project.teamType}</p>
                </div>
              )}
              
              {project.github && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <FaGithub className="text-white mb-2" size={20} />
                  <h4 className="font-semibold text-sm">GitHub</h4>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-300 hover:text-blue-200 flex items-center gap-1"
                  >
                    Repository <ExternalLink size={12} />
                  </a>
                </div>
              )}
              
              {project.demo && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <FaExternalLinkAlt className="text-purple-400 mb-2" size={20} />
                  <h4 className="font-semibold text-sm">Demo</h4>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-purple-300 hover:text-purple-200 flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
              )}
              
              {project.status && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="text-red-400 mb-2" size={20} />
                  <h4 className="font-semibold text-sm">상태</h4>
                  <p className="text-xs opacity-90">{project.status}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogContent className="bg-gray-900 text-white p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Project Image */}
            {project.image && (
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full max-h-96 object-cover"
                />
              </div>
            )}

            {/* Tech Stack */}
            {project.stack && project.stack.length > 0 && (
              <CollapsibleSection title="기술 스택" id="tech" icon={Code}>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>
              </CollapsibleSection>
            )}

            {/* Project Goals */}
            {project.goals && (
              <CollapsibleSection title="프로젝트 목표" id="goals" icon={Award}>
                <div className="space-y-4">
                  {Array.isArray(project.goals) ? (
                    project.goals.map((goal, idx) => (
                      <FeatureItem key={idx} feature={goal} />
                    ))
                  ) : (
                    <p>{project.goals}</p>
                  )}
                </div>
              </CollapsibleSection>
            )}

            {/* Main Features */}
            {project.features && (
              <CollapsibleSection title="주요 기능" id="features" icon={Monitor}>
                <div className="space-y-2">
                  {Array.isArray(project.features) ? (
                    project.features.map((feature, idx) => (
                      <FeatureItem key={idx} feature={feature} />
                    ))
                  ) : (
                    <p>{project.features}</p>
                  )}
                </div>
              </CollapsibleSection>
            )}

            {/* Responsibilities */}
            {project.responsibilities && (
              <CollapsibleSection title="담당 역할" id="responsibilities" icon={Users}>
                <div className="space-y-2">
                  {Array.isArray(project.responsibilities) ? (
                    project.responsibilities.map((responsibility, idx) => (
                      <FeatureItem key={idx} feature={responsibility} />
                    ))
                  ) : (
                    <p>{project.responsibilities}</p>
                  )}
                </div>
              </CollapsibleSection>
            )}

            {/* Challenges */}
            {project.challenges && (
              <CollapsibleSection title="기술적 도전 및 문제 해결" id="challenges" icon={Shield}>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  {Array.isArray(project.challenges) ? (
                    project.challenges.map((challenge, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <h4 className="font-semibold text-red-400 mb-2">
                          {challenge.title || `도전 과제 ${idx + 1}`}
                        </h4>
                        <p className="text-gray-300 text-sm">{challenge.description || challenge}</p>
                        {challenge.solution && (
                          <div className="mt-2">
                            <span className="text-green-400 font-medium">해결책: </span>
                            <span className="text-gray-300 text-sm">{challenge.solution}</span>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">{project.challenges}</p>
                  )}
                </div>
              </CollapsibleSection>
            )}

            {/* Results & Reflection */}
            {project.results && (
              <CollapsibleSection title="개발 결과 및 회고" id="results" icon={Award}>
                <div className="space-y-4">
                  {project.results.achievements && (
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-2">📈 성과</h4>
                      <p className="text-gray-300 text-sm">{project.results.achievements}</p>
                    </div>
                  )}
                  
                  {project.results.lessons && (
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">💡 배운 점</h4>
                      <p className="text-gray-300 text-sm">{project.results.lessons}</p>
                    </div>
                  )}
                  
                  {project.results.improvements && (
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">🔧 개선사항</h4>
                      <p className="text-gray-300 text-sm">{project.results.improvements}</p>
                    </div>
                  )}
                </div>
              </CollapsibleSection>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <CollapsibleSection title="스크린샷" id="screenshots" icon={Monitor}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden">
                      {screenshot.image ? (
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title} 
                          className="w-full h-32 object-cover"
                        />
                      ) : (
                        <div className="h-32 bg-gray-700 flex items-center justify-center">
                          <Monitor className="text-gray-500" size={40} />
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-sm text-gray-300">{screenshot.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              )}
              
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default CardDialog;