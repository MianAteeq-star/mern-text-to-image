import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import sampleImage from "../assets/sample_img1.png"
import { AuthContext } from '../context/authContext'

const Result = () => {
  const [image, setImage] = useState(sampleImage)
  const [loading, setLoading] = useState(false)
  const [isImageLoaded , setIsImageLoaded] = useState(false)
  const [input , setInput] = useState('')
  const {generateImage} = useContext(AuthContext)


  const  handleSubmitImageGenerate = async (e)=>{
    e.preventDefault()
    setLoading(true)
    if(input){

      const imageSrc = await generateImage(input)
      if(imageSrc){
        setIsImageLoaded(true)
        setImage(imageSrc)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form  onSubmit={handleSubmitImageGenerate}
      className='flex flex-col items-center justify-center min-h-[90vh] p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full max-w-sm'>
        <div className='relative'>
          <motion.img 
            src={image} 
            alt="" 
            className='w-full rounded' 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {loading && (
            <motion.span 
              className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 10 }}
            ></motion.span>
          )}
        </div>
        {loading ? <motion.div className='mt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Loading...</motion.div> : null}
      </div>
      {
        !isImageLoaded &&
      <motion.div 
      className='flex w-full max-w-xl bg-neutral-500 text-white text-sm rounded-full mt-10 p-0.5'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-4 p-2 sm:p-4' />
        <button className='bg-black px-4 py-2 sm:px-10 sm:py-3 rounded-full'>Generate</button>
      </motion.div>

      }
      {
        isImageLoaded && 
      <motion.div 
        className='flex flex-col sm:flex-row justify-center items-center gap-2 my-6 text-white text-sm'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className='bg-transparent border border-black text-black px-4 py-2 sm:px-8 sm:py-3 cursor-pointer rounded-full' onClick={()=> setIsImageLoaded(false)} >Generate Another</p>
        <a href={image} download className='bg-black px-4 py-2 sm:px-8 sm:py-3 cursor-pointer rounded-full'>Download</a>
      </motion.div>
      }
    </motion.form>
  )
}

export default Result