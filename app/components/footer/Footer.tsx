import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../public/assets/c_i_white.png'
import Image from 'next/image';
import FooterNavbar from '../footer-navbar/FooterNavbar'


export default function Footer() {
  return (
    <>
      <div className={styles.footer}>

        <div>
          <div>
            <Image src={logo} alt="logo" width={233} height={65}  />
            <p>Contact Info</p>
            <p>Contact Info....</p>
          </div>
          <div>
            <p>college Illuminated</p>
            <p>Address</p>
            <p>Address</p>
          </div>
          <p>c Copyright 2023 college Illuminated</p>
        </div>
        <FooterNavbar />

      </div>
    </>
  )
}
