import React, { useState } from 'react';
import ContactForm from '../Container/ContactForm/ContactForm';
import FAQ from '../Container/FAQ/FAQ';

const contact = () => {


  return (
    <div className='justify-center lg:max-w-[1560px] min-h-screen mx-auto mt-48 px-4'>
      <ContactForm />
      <FAQ />
    </div>
  )
}

export default contact