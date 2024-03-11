'use client'
import React from 'react'
import {motion} from "framer-motion"

const PortfolioPage = () => {
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:"1"}}>
      Portfolio
    </motion.div>
  )
}

export default PortfolioPage
