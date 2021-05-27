import React from 'react'


const Footer = ()=> {
     const year=new Date().getFullYear();
  return (
    <>
   <footer>
       <p>Copyright © {year} Created by Neha Garg</p>
   </footer>

    </>
  );
}

export default Footer;
