import React, { useCallback, useRef, useState } from 'react'

const UsingRef = () => {

    const [gallery] = useState([
        "https://picsum.photos/id/100/400/400",
        "https://picsum.photos/id/200/400/400",
        "https://picsum.photos/id/300/400/400",
        "https://picsum.photos/id/400/400/400",
    ])

    const loaderRef = useRef()

    const loadImg = img => {
        loaderRef.current.src = img
    }

    return (
        <>
            <div>Using useRef</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className='list-group'>
                            {
                                gallery.map((imgSrc, index) => {
                                    return (
                                        <li key={index} className='list-group-item'>
                                            <img src={imgSrc} width={85} height={85} onClick={() => loadImg(imgSrc)} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <figure>
                            <img ref={loaderRef} className='border-1 shadow' width={400} height={400} />
                            <legend className='text-center'>Loader</legend>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsingRef