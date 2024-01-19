import React from 'react';
import ReactDOM from 'react-dom/client';
import { Fragment } from 'react'
import LoremPicsum from "./LoremPicsum";

const Feed: React.FC = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
            <div className="max-w-xl mx-auto mb-5">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        What's new?
                    </h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        See what your friends are up to.
                    </p>
                </div>
            </div>

            <div className="flex justify-center min-h-screen bg-gray-100">
                <div className="max-w-4xl w-full p-4">
                    <div className="bg-white p-8 rounded shadow-md">
                        <button
                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state=""><span className="absolute -inset-1.5"></span><span
                            className="sr-only">Open user menu</span><img className="h-8 w-8 rounded-full"
                                                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                          alt=""/>
                            <h1 className="text-2xl font-bold mb-4 ml-3">Andrew Ipsum</h1></button>
                        <h1 className="text-2xl font-bold mb-4">Post Title</h1>
                        <p className="text-gray-700">Post Content Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <h1 className="text-2xl font-bold my-5">Post Comments</h1>

                    <div className="bg-white p-8 rounded shadow-md">
                        <button
                            className="relative flex my-5 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state=""><span className="absolute -inset-1.5"></span><span
                            className="sr-only">Open user menu</span><img className="h-8 w-8 rounded-full"
                                                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                          alt=""/>
                            <h1 className="text-2xl font-bold ml-3">Andrew Ipsum</h1></button>
                        <p className="text-gray-700">Post Content Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris </p>
                        <button
                            className="relative flex my-5 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state=""><span className="absolute -inset-1.5"></span><span
                            className="sr-only">Open user menu</span>
                            <LoremPicsum/>
                            <h1 className="text-2xl font-bold ml-3">Andrew Ipsum</h1></button>
                        <p className="text-gray-700">Post Content Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris </p>
                        <button
                            className="relative flex my-5 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state=""><span className="absolute -inset-1.5"></span><span
                            className="sr-only">Open user menu</span>
                            <LoremPicsum/>
                            <h1 className="text-2xl font-bold ml-3">Andrew Ipsum</h1></button>
                        <p className="text-gray-700">Post Content Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris </p>
                        <button
                            className="relative flex my-5 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false"
                            data-headlessui-state=""><span className="absolute -inset-1.5"></span><span
                            className="sr-only">Open user menu</span>
                            <LoremPicsum/>
                            <h1 className="text-2xl font-bold ml-3">Andrew Ipsum</h1></button>
                        <p className="text-gray-700">Post Content Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Feed