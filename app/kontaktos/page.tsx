import React  from 'react'
import { useState } from 'react';

export default function Kontaktos() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: '',
      message: '',
    })
    
    

    return (
      <div className="bg-neutral-900 py-20">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-4xl font-bold">Kontakt Os</div>
          <hr className="opacity-10 py-2"/>

            <form>
              <div className="w-full flex flex-col my-4">
                  <label className="text-white"htmlFor="name">Dit Navn</label>
                  <input className="text-black bg-gray-50 border p-4" type="text" required autoComplete="off" id="name" />
              </div>

              <div className="w-full flex flex-col my-4">
                  <label className="text-bold" htmlFor="mail">E-Mail</label>
                  <input className="text-black bg-gray-50 border p-4" type="text" required autoComplete="off" id="name" />
              </div>

              <div className="w-full flex flex-col my-4">
                  <label className="text-bold" htmlFor="number">Telefonnummer</label>
                  <input className="text-black bg-gray-50 border p-4" type="text"  autoComplete="off" id="name" />
              </div>

              <div className="w-full flex flex-col my-4">
                <label className="text-bold" htmlFor="message">Besked</label>
                <textarea rows={4} required minLength={10} maxLength={500} className="text-black bg-gray-50 border p-4" placeholder="Skriv om dit emne her...." id=""></textarea>
              </div>

              <button type="submit" className="px-4 py-2 w-40 bg-gray-800 text-white font-medium">Send</button>

            </form>
  
        </div>
      </div>
  
      
  
        
    );
  }
  