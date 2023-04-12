import React, { useState, useEffect } from 'react'

const BacktoTop = () => {
    const [backtoTop, setBackTotop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackTotop(true)
            }
            else {
                setBackTotop(false)
            }
        })
    }, [])
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backtoTop && (
                <img style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "30px",

                }} className='backtotop' src="https://cdn-icons-png.flaticon.com/512/10023/10023049.png" onClick={scrollTop} width='50px' alt="" />
            )}
        </div>
    )
}

export default BacktoTop