import React from 'react';
import Link from 'next/link';
import { FaBattleNet, FaEarlybirds } from 'react-icons/fa';

export default function Layout({ children }) {
    return (
        <div className="bg-gray-100 text-gray-700">
            <div className=" flex flex-row">
                <div
                    style={{ height: 'calc(100vh - 15px)' }}
                    className="fixed bg-purple-800 h-screen w-64 text-gray-100 p-4 m-2 rounded-lg flex-col"
                >
                    <Link href="/">
                        <div className="flex flex-row mb-4 p-2 rounded-lg cursor-pointer hover:bg-gray-600">
                            <FaBattleNet className="text-2xl" />
                            <span className="text-md ml-4">Dashboard</span>
                        </div>
                    </Link>

                    <Link href="/articles">
                        <div className="flex flex-row mb-4 p-2 rounded-lg cursor-pointer hover:bg-gray-600">
                            <FaEarlybirds className="text-2xl" />
                            <span className="text-md ml-4">Articles</span>
                        </div>
                    </Link>
                </div>

                <div className="px-4 py-2 rounded-lg w-full ml-64">
                    <div className="flex flex-row h-18 text-gray-100 p-4 rounded-lg bg-purple-800 justify-end">
                        <div className="flex flex-row -my-2">
                            <div>
                                <img
                                    className="inline object-cover w-12 h-12 mr-2 rounded-full border-gray-100 border-2"
                                    src="/img/avatar.jpg"
                                    alt="avatar"
                                />
                            </div>

                            <div className="mr-2">
                                <span className="text-sm">Mostafa Gholami</span>
                                <br />
                                <span className="text-sm">0936 589 5522</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
