"use client"
import { useState, Fragment } from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon,Bars3BottomRightIcon } from '@heroicons/react/24/outline'

function Navbar() {
  const [open, setOpen] = useState(false)
  

  const click = () => {
    setOpen(true);
    
}
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
            
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        {/* <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"> */}
                        <div className="text-orange-600  font-bold text-5xl font-bison mt-5 text-center">HISC   </div>
                        <ul className=" mt-20  text-md text-center  ">
                        <li className="p-6 text-2xl">Home </li>
                        <li className="p-6 text-2xl">About us</li>
                        <li className="p-6 text-2xl">Facility</li>
                        <li className="bg-orange-600 text-xs text-white ml-28  rounded-3xl w-48  mt-64
                         text-center p-4 ">SIGN UP NOW</li>       
                    </ul>
                        {/* </Dialog.Title> */}
                      </div>
                     
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      

<nav className="flex justify-between  ">
                <div className="text-orange-600   font-bold text-5xl font-poppins mt-6 ">HISC   </div>
                    <ul className="hidden  md:flex  md:gap-10 mt-10  text-xs ">
                        <li className="p-2">Home </li>
                        <li className="p-2">About us</li>
                        <li className="p-2">Facility</li>
                        <li className="bg-orange-500 text-white text-center rounded-2xl w-20 p-2">Sign up</li>       
                    </ul>
                    <div className=" p-4 rounded-3xl flex items-center justify-center md:hidden mt-5 cursor-pointer" onClick={click}>
                    <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(true)}
                        >
                          <span className="sr-only">Close panel</span>
                          <Bars3BottomRightIcon className="h-10 w-10" aria-hidden="true" />
                          
                        </button>

                        
                    </div> 

                     
            </nav>
        </div>
     );
}


export default Navbar