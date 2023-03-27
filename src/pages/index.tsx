/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import { Navbar } from "./newnavbar";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";


const HomePage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <>

    {/* ====================== Head Start ====================== */}

    <Head>
      <title>Our - Education - System</title>
      <link rel="shortcut icon" href="https://source.unsplash.com/1200x900/?books,library" type="image/x-icon" />
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
    </Head>

    {/* ====================== Head End ====================== */}



    {/* ====================== Navbar Start  ====================== */}


    {/* <Navbar /> */}
    
    <nav className="fixed w-full bg-gradient-to-bl from-green-500 to-pink-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Link href="/" className="text-white hover:text-red-400 text-4xl sm:text-2xl font-bold md:text-3xl hover:italic">
                Education
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-8">
              <div className="flex space-x-3 md:space-x-5 mdlg:space-x-8 lg:space-x-12">
                <Link href="#home" className="hover:italic hover:text-teal-600 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Home
                </Link>
                <Link href="#about" className="hover:italic hover:text-pink-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  About
                </Link>
                <Link href="#services" className="hover:italic hover:text-green-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Services
                </Link>
                <Link href="#priceing" className="hover:italic hover:text-blue-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Pricing
                </Link>
                <Link href="#contact" className="hover:italic hover:text-orange-400 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Contact
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-gradient-to-bl from-purple-500 to-orange-400  text-center" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-5">
            <hr />
            <Link href="#home" className="hover:italic hover:text-teal-600 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Home
            </Link>
            <br />
            <hr />
            <Link href="#about" className="hover:italic hover:text-pink-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              About
            </Link>
            <br />
            <hr />
            <Link href="#services" className="hover:italic hover:text-green-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Services
            </Link>
            <br />
            <hr />
            <Link href="#priceing" className="hover:italic hover:text-blue-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Pricing
            </Link>
            <br />
            <hr />
            <Link href="#contact" className="hover:italic hover:text-orange-400 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Contact
            </Link>
            <hr />
          </div>
        </div>
      )}
    </nav>
    <nav className="w-full bg-gradient-to-bl from-green-500 to-pink-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Link href="/" className="text-white hover:text-red-400 text-4xl sm:text-2xl font-bold md:text-3xl hover:italic">
                Education
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-8">
              <div className="flex space-x-3 md:space-x-5 mdlg:space-x-8 lg:space-x-12">
                <Link href="#home" className="hover:italic hover:text-teal-600 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Home
                </Link>
                <Link href="#about" className="hover:italic hover:text-pink-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  About
                </Link>
                <Link href="#services" className="hover:italic hover:text-green-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Services
                </Link>
                <Link href="#priceing" className="hover:italic hover:text-blue-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Pricing
                </Link>
                <Link href="#contact" className="hover:italic hover:text-orange-400 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Contact
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-gradient-to-bl from-purple-500 to-orange-400  text-center" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-5">
            <hr />
            <Link href="#home" className="hover:italic hover:text-teal-600 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Home
            </Link>
            <br />
            <hr />
            <Link href="#about" className="hover:italic hover:text-pink-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              About
            </Link>
            <br />
            <hr />
            <Link href="#services" className="hover:italic hover:text-green-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Services
            </Link>
            <br />
            <hr />
            <Link href="#priceing" className="hover:italic hover:text-blue-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Pricing
            </Link>
            <br />
            <hr />
            <Link href="#contact" className="hover:italic hover:text-orange-400 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
              Contact
            </Link>
            <hr />
          </div>
        </div>
      )}
    </nav>


    {/* ====================== Navbar End  ====================== */}




    {/* ====================== Hero Section Start ====================== */}

    <div id="home" className=" relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">

      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <svg viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
        <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
        <defs>
          <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
            <stop stop-color="#776FFF" />
            <stop offset="1" stop-color="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
        <defs>
          <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
            <stop stop-color="#776FFF" />
            <stop offset="1" stop-color="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center"> */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us :</h2>
        </div><br />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity Start <br /> using our app today</h2><br />
        <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt.<br /> Qui irure qui lorem cupidatat commodo. Elit <br /> sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas<br /> id pellentesque eu sed consectetur.<br /> Malesuada adipiscing sagittis vel nulla.<br /></p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
        {/* </div> */}
      </div>
    </div>

    {/* ====================== Hero Section End  ====================== */}



    {/* ====================== Heading Start ====================== */}

    <center className="text-green-500 text-5xl " >
      <br /><p className="italic">Welcome To Our</p>
      <p className="font-extrabold">Latest - Education - System</p>
    </center >

    {/* ====================== Heading End  ====================== */}



    {/* ====================== Video Start  ====================== */}

    <div id="priceing" className="bg-orange-50">
      <br />
      <video className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoPlay muted loop controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>

    </div>

    {/* ====================== Video End ====================== */}



    {/* ====================== About Us Start ====================== */}

    <div id="about" className="text-center">
      <br />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>


      <div id="accordion-arrow-icon" data-accordion="open">
        <h2 id="accordion-arrow-icon-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
          </button>
        </h2>
        <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus in aliquid obcaecati rem animi. Iure assumenda nam aperiam nemo voluptate libero neque nulla accusamus fugit dolorem. Nostrum, rerum odit.</p>
            <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet  consectetur adipisicing elit . Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
          </div>
        </div>

      </div>

      <div id="accordion-arrow-icon" data-accordion="open">
        <h2 id="accordion-arrow-icon-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
          </button>
        </h2>
        <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus in aliquid obcaecati rem animi. Iure assumenda nam aperiam nemo voluptate libero neque nulla accusamus fugit dolorem. Nostrum, rerum odit.</p>
            <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet  consectetur adipisicing elit . Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
          </div>
        </div>

      </div>

      <div id="accordion-arrow-icon" data-accordion="open">
        <h2 id="accordion-arrow-icon-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit!</span>
          </button>
        </h2>
        <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus in aliquid obcaecati rem animi. Iure assumenda nam aperiam nemo voluptate libero neque nulla accusamus fugit dolorem. Nostrum, rerum odit.</p>
            <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet  consectetur adipisicing elit . Lorem ipsum dolor sit amet  consectetur adipisicing elit.</p>
          </div>
        </div>

      </div>
    </div>

    {/* ====================== About Us End ====================== */}



    {/* ====================== Cards Start ====================== */}
    <div id="services"></div>
    <div className="apnecardsdiv" >
      <div className="bg-blue-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
        </div>
        <div className="text-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Learn Us</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?students,america">
                  <img id="hacimg" src="https://source.unsplash.com/1200x900/?students,america"
                    alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?arts,america">
                  <img id="hacimg" src="https://source.unsplash.com/1200x900/?arts,america"
                    alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?universities,china">
                  <img id="hacimg" src="https://source.unsplash.com/1200x900/?universities,china"
                    alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?books,library">
                  <img id="hacimg" src="https://source.unsplash.com/1200x900/?books,library"
                    alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div >

    <div className="apnecardsdiv">
      <div className="bg-blue-50">
        <div className="text-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Learn Us</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?school,students"><img id="hacimg" src="https://source.unsplash.com/1200x900/?school,students" alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?drawings,arts"><img id="hacimg" src="https://source.unsplash.com/1200x900/?drawings,arts" alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?sience,physics"> <img id="hacimg" src="https://source.unsplash.com/1200x900/?sience,physics" alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

            <section className="group text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <a href="https://source.unsplash.com/1200x900/?chemistry,biology"> <img id="hacimg" src="https://source.unsplash.com/1200x900/?chemistry,biology" alt="" className="h-full w-full object-cover object-center group text-center-hover:opacity-75" /></a>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Education - System</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Learn Us</p>
              <div className="grid-uniform">
                <Link className="btn" href="/">Learn With Us</Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>

    {/* ====================== Cards End ====================== */}



    {/* ====================== Form Start ====================== */}

    <div id="contact" className="isolate bg-red-50  py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div className="mt-2.5">
              <input required type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div className="mt-2.5">
              <input required type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
            <div className="mt-2.5">
              <input required type="text" name="company" id="company" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input required type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea required name="message" id="message" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a href="mailto:rrabeeshussain@gmail.com">Send My Form</a></button>
        </div>
      </form>
    </div>
    <button>
      <a href="#home">
        <img id="go" src="top.png" alt="" />
      </a>
    </button>
    {/* ====================== Form End  ====================== */}



    {/* ====================== Footer Start ====================== */}

    <footer className="bg-gray-800 items-center w-full rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://ranarabees.github.io/Responsive_Portfolio_Website/" className="flex items-center mb-4 sm:mb-0">
            <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RanaVerse</span>
          </a>
          <ul className=" flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100088975870807" className="mr-4 hover:underline md:mr-6 ">
                <img className="h-14 w-14 inline-block" src="/facebook.png" alt="facebook Not Loaded" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RanaRabees" className="mr-4 hover:underline md:mr-6">
                <img className="h-14 w-14 inline-block" src="/twiter.png" alt="twiter Not Loaded" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/TEa2Fcmb" className="mr-4 hover:underline md:mr-6 ">
                <img className="h-14 w-14 inline-block" src="/discord.png" alt="discord Not Loaded" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 md:text-center text-center sm:text-center dark:text-gray-400">
          © <a href="https://ranarabees.pythonanywhere.com/" className="hover:text-white text-center">RanaVerse™ </a>.
          <p className="hover:text-green-500 text-center"> All Rights Reserved. This site is proudly built by </p>
          <a href="https://ranarabees.pythonanywhere.com/" className="hover:text-red-500 text-center"> RanaVerse .</a></span>


      </div>
    </footer>

    {/* ====================== Footer End ====================== */}
  </>;
}

export default HomePage;



