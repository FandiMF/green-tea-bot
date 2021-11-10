import Head from "next/head";

function login() {
    return (
        <div className="w-screen bg-cream h-screen pt-8">
            <Head>
                <title>Login Admin</title>
            </Head>

            <main>
                <div className="flex flex-col w-4/12 bg-white mx-auto px-12 py-12 h-[550px] space-y-5">
                    <img
                        className="h-[300px] w-[300px] mx-auto"
                        src="greentea.svg"
                        alt="logo"
                    />
                    <h1 className="text-gray-600 font-sans font-semibold text-[30px] text-center">
                        Login to your account
                    </h1>
                    <div className="flex flex-col">
                        <label
                            className="text-gray-500 text-[20px] font-sans"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="outline-none border-2 rounded-md px-3 py-3 mt-2 focus:border-dark-green"
                            type="text"
                            id="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="text-gray-500 text-[20px] font-sans"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="outline-none border-2 rounded-md px-3 py-3 mt-2 focus:border-dark-green"
                            type="text"
                            id="password"
                            placeholder="Your password"
                            required
                        />
                    </div>
                    <a
                        className="bg-dark-green text-white text-[20px] px-3 py-4 rounded-lg text-center cursor-pointer"
                        href="/"
                    >
                        Login
                    </a>
                </div>
            </main>
        </div>
    );
}

export default login;