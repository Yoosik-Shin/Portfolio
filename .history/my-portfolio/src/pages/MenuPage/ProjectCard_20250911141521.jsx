import React from 'react'

const ProjectCard = () => {
  return (
    <>
        <h1>3rdMenu</h1>
        <div className="d-card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="d-card-body">
            <h2 className="d-card-title">
            Card Title
            <div className="d-badge d-badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="d-card-actions justify-end">
            <div className="d-badge d-badge-outline">Fashion</div>
            <div className="d-badge d-badge-outline">Products</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProjectCard