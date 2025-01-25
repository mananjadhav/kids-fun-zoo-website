"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <Link href="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <i className="fa fa-book-reader me-3"></i>Kider
        </h1>
      </Link>
      <button type="button" className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <div className="navbar-nav mx-auto">
          <Link href="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link">
            About Us
          </Link>
          <Link href="/classes" className="nav-item nav-link">
            Classes
          </Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link href="/facility" className="dropdown-item">
                School Facilities
              </Link>
              <Link href="/team" className="dropdown-item">
                Popular Teachers
              </Link>
              <Link href="/call-to-action" className="dropdown-item">
                Become A Teachers
              </Link>
              <Link href="/appointment" className="dropdown-item">
                Make Appointment
              </Link>
              <Link href="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link href="/404" className="dropdown-item">
                404 Error
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
        <a href="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Join Us<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  )
}

