import React, { useState } from 'react'
import './WhatWeDo.css'
const WhatWeDo = () => {
  const [seemore, setSeemore] = useState(false)
  const [readmore, setReadmore] = useState(false)
  return (
    <div className='whatwedo'>
      <h1>What We Do</h1>
      <div className='wwd-content'>
        <p>GET TO KNOW US</p>
        <h2>INTEGRATED SUPPLY CHAIN SOLUTIONS (ISCS)</h2>
      </div>
      <div className='warehouse'>
        <div className='ware-storage'>
          <h2>Warehousing, Storage & Distribution</h2>
          <p>Project Management & Implementation support at Fulfilment Centre
            ASCS makes an elaborate project management plan to serve as a guide for the execution and control phases as this plan is important for the success of any project.  It helps the organizations achieve goals and objectives within scope, time, and budgetary constraints. We can also help optimize the allocation of resources and integrate the inputs that will drive the completion of the project's objectives.
          </p>

        </div>
        <img className='warehouseimg' src={require('../../Assests/what-we-do-01.jpg')} alt="" />
      </div>

      <div className='supplychain'>
        <div className='supply-content'>
          <h2>Supply Chain design and Optimisation <br /> of Costs at Hubs / WH</h2>
          <p>Supply chain cost optimization is about managing costs in a way that helps achieve the best possible return on investment while ensuring a steady supply.  In its essence, supply chain cost optimization helps company reveal the hidden expenses through improving the supply chain performance. There’s an ideal world where everything operates as planned and then there’s the reality where: <br />

            <span className={`long-text ${seemore ? "expanded" : 'none'}`}>
              •	Deliveries could be late   <br />
              •	Demand planning could be inaccurate  <br />
              •	Costs could exceed forecasts <br />
              •	Warehouses could keep excessively high inventory levels. <br />
              <span>If there are any underperforming supply chain components the costs rise. Here, ASCS advises the areas companies should you focus on for cost optimization.
                And also, to improve supply chain processes and reduce costs, we recommend focusing on logistics optimization first as it is essential for supply chain performance.
                Inventory acts as a buffer against supply and demand volatility so that a company always has products available.  Any kind of excessive inventory can also be a source of additional costs.
              </span>
            </span>

            <span className='readmore' onClick={() => setSeemore((prev) => !prev)}>{seemore ? "ReadLess" : "Readmore"}</span></p>

        </div>
        <img className='chain' src="https://www.kepler-consulting.com/wp-content/uploads/2020/11/functions-of-the-supply-chain-1600x0-c-default.png" alt="" />
      </div>

      <div className='equipment'>
        <div className='equipment-content'>
          <h2>Equipment and Labour utilisation</h2>
          <p>Warehousing operations are becoming more complex and challenging with respect to the space availability and its optimum utilisation. Although the best practices vary from industry to industry, there are some best practices from experts in material handling, warehousing and logistics management.  The methodology of utilising the warehouse optimally have been coined as “SPACE”  <br />
            <span className={`long-text ${readmore ? "expanded" : 'none'}`}>

              S- Scope of expansion and ease <br />
              P- Pace up the movement of units <br />
              A- Avoid wastage of resources <br />
              C- Carryout the process in flows <br />
              E- Escalate the process

            </span>
            <span className='Readmore' onClick={() => setReadmore((prev) => !prev)}>{readmore ? "ReadLess" : "Readmore"}</span>
          </p>

        </div>
        <video className='video' src={require('../../Animation videos/Equipement and labour util.mp4')} loop autoPlay muted ></video>
      </div>

      <div className='transportation'>
        <div className='transport-content'>
          <h2>Transportation & Integrated Logistics</h2>
          <span>•	Primary Transportation</span>
          <span>•	Secondary Transportation</span>
          <h2>Product Management Solutions</h2>
          <span>• Data Management</span>
          <span>• Order Management</span>
          <span>• Inventory Management</span>
        </div>
        <video className='video' src={require('../../Animation videos/transport.mp4')} autoPlay loop muted></video>
      </div>

<div className='inventory-control'>
 <div className='inventorycontent'>
 <h2>INVENTORY CONTROL</h2>
 <p>
  <span>• We streamline your process and reduce your costs with an optimised vendor managed inventory solution.</span> <br />
  <span> • Real time data transparency.</span> <br />
  <span> • Help to understand core area of Shrinkage</span> <br />
  <span> •	Fixed Assets Audits and stock inventory audits</span> <br />
  <span> • Capacity to audit warehouse ranging from 500 sqft to 3 lakhs sqft</span>
 </p>
 </div>
</div>

    </div>
  )
}

export default WhatWeDo