import React from "react"

export default function Main() {
    return (
      <>
        <div className="main--text">
            <h1>Oluwamodupe Ibiyemi</h1>
            <h3>Frontend Developer</h3>
            <h4>ibiyemideborah@gmail.com </h4>
            <div className="button">
                <div><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#1E1F26"/>
                <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#1E1F26"/>
                </svg>
                </div>
                <button onClick={() => window.location ='mailto:ibiyemideborah@gmail.com'}><h1 className="button--text">Email</h1></button>
            </div>
        </div>
        <div className="main--about">
            <h1>About</h1>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and i'm always looking for new things to learn.</p>
        </div>
        <div className="main--about">
            <h1>Interests</h1>
            <p>Food expert. Music lover. Reader. Entrepreneur.</p>
        </div>
      </>
    ) 
}