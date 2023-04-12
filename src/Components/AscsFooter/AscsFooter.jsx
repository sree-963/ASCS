import React from 'react'
import './AscsFooter.css'
import ReactWhatsapp from 'react-whatsapp'

const AscsFooter = () => {
    return (
        <div class="ascsfooter">
            <img class="img" src={require("../../Assests/ascs footer logo.png")} alt="" />

            <ReactWhatsapp style={{ backgroundColor: "#3B83AB", border: "none" }} number='+91 8341510555' message='Hi Sir'> <img class='whatsapp' width='70px' src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="" />
            </ReactWhatsapp>

        </div>
    )
}

export default AscsFooter;