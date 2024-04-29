import React from 'react'
import "../../App.css"
import {logo_name} from '../../data'
export default function Footer() {
  return (
    <footer className="footer">
              <p>Copyright &#169; {logo_name} Made with <i class="fas fa-heart"></i> By <a className='agencylink' href='https://www.linkedin.com/in/md-ismail-hosen-81b176276/' target='_black'>Ouragency </a></p>
    </footer>
  )
}
