import React from 'react'
import './faq.css'

const Faq = () => {
  return (
    <>
    <section className="faq-section py-10">
    <div className="accordion ">
    <h1 className=' font-semibold'>Frequently Asked Questions</h1>
    <p className="w-44 mx-auto leading-relaxed text-base h-2 mb-10 my-2 rounded-md bg-blue-500">
    </p>
    <div className="accordion-item ">
        <input type="checkbox" id="accordion1"/>
        <label htmlFor="accordion1" className="accordion-item-title"><span className="icon"></span>What is FLUX?</label>
        <div className="accordion-item-desc">FLUX is a Technical/robotics club at SATI focused on innovative and ambitious projects.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion2"/>
        <label htmlFor="accordion2" className="accordion-item-title"><span className="icon"></span>What types of events does FLUX organize?</label>
        <div className="accordion-item-desc">We organize software, hardware, techfest, gaming events, and bootcamps.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion3"/>
        <label htmlFor="accordion3" className="accordion-item-title"><span className="icon"></span>Who can participate in FLUX events?</label>
        <div className="accordion-item-desc">All students of SATI are welcome to participate in our events.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion4"/>
        <label htmlFor="accordion4" className="accordion-item-title"><span className="icon"></span>How can I stay updated on FLUX events?</label>
        <div className="accordion-item-desc">Follow us on social media and check our website regularly for updates.</div>
    </div>

    {/* <div className="accordion-item mb-10">
        <input type="checkbox" id="accordion5"/>
        <label htmlFor="accordion5" className="accordion-item-title"><span className="icon"></span>Can I organize a fundraising event for Bharat Shakti Foundation?</label>
        <div className="accordion-item-desc">Absolutely! We welcome and appreciate the initiative of individuals or groups organizing fundraising events on our behalf. Visit our "Fundraise for Us" page to find guidelines, resources, and information on how to get started.</div>
    </div> */}

</div>
</section>
    </>
  )
}

export default Faq