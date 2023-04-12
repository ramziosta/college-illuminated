import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in Page',
  description: 'Form to log in to the user account',
};
export default function Login() {
  // throw new Error(" Not Today") intentional testing error
  return (
    <>
      <h1>Log in</h1>
    </>
  )
}
