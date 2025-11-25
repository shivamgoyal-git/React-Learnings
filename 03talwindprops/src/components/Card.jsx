import React from 'react'

function Card({name = 'Unknown', post = 'staff', place = '(India)', img='https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'}) {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl m-5 p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Web developer who turns ideas into polished, responsive interfaces using modern JavaScript and React.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post } {place}
      </div>
    </figcaption>
  </div>
</figure>
        
    </div>
  )
}

export default Card