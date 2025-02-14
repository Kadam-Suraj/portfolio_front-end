import React from 'react';
import ContactForm from '../Container/ContactForm/ContactForm';
import FAQ from '../Container/FAQ/FAQ';

const contact = () => {

  return (
    <div className='flex flex-col gap-20'>
      <ContactForm />
      <FAQ />
    </div>
  )
}

export default contact