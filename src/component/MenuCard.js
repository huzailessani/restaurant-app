import React from 'react'

const MenuCard = ({ menuData }) => {
    return (

        <div>
            <section className='main-card--container'>
                {menuData.map((item) => {
                    const { id, name, category, image, description } = item

                    return (

                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className='card-number card-circle subtle'>
                                        {id}
                                    </span>
                                    <span className="card-author subtle">
                                        {name}
                                    </span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">
                                        {description}
                                    </span>
                                    <div className="card-read">Read</div>
                                    <img src={image} alt="" />
                                    <span className="card-tag subtle">order Now</span>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </section>
        </div>

    )
}

export default MenuCard