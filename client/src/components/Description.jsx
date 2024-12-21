import React from 'react'
import sampleImage from "../assets/sample_img1.png"

const Description = () => {

  return (
    <div className='mt-24 p-4'>
        <div className='text-center my-12'>
            <h1 className='text-4xl'>Create AI images </h1>
            <p className='text-gray-500 my-4 '>Turn your imagination into visuals</p>
        </div>
<div className="flex items-center justify-center">

        <div className='flex flex-col sm:flex-row gap-8 justify-between w-full max-w-5xl items-center'>
            <img src={sampleImage} alt="sample image" className='w-96 h-96' />
            <div>
                <h1 className='text-3xl'>Introducing the AI-Powered Text to Image Generator</h1>
                <p  className='text-gray-500 mt-6'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className='text-gray-500 mt-6'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>
</div>
    </div>
  )
}

export default Description