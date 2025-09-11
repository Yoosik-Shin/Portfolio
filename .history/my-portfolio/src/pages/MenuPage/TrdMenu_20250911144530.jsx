import React from 'react'
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';

export const TrdMenu = () => {
  return(
  <>
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      {/* MUI 카드 들어갈 자리 */}
      <Card className="shadow-lg hover:shadow-xl transition-all">
        <CardMedia component="img" image="/project1.png" alt="Project 1" />
        <CardContent>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaReact className="text-blue-500" /> 프로젝트 제목
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            간단한 설명 텍스트...
          </p>
        </CardContent>
      </Card>

    </motion.div>
  </>
  )
}