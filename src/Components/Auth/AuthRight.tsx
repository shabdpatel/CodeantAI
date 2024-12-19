import {useState} from "react";
import {KeyIcon} from "@heroicons/react/16/solid";

const AuthRight = () => {

    const [isSaas, setIsSaas] = useState(true)

    return (
        <div className={`flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4`}>
            <div className={`bg-white flex flex-col rounded-xl w-full border`}>
                <div className={`border-b flex flex-col p-5 w-full gap-4`}>
                    <div className={`flex items-center justify-center gap-4`}>
                        <img src={'/svg/logo.svg'} alt={'logo'}/>
                        <span className={`font-light`}>CodeAnt AI</span>
                    </div>
                    <div className={`flex justify-center text-2xl font-semibold mt-2`}>
                        Welcome to CodeAnt AI
                    </div>
                    <div>
                        <div className={`bg-gray-100/70 border rounded-xl`}>
                            <button className={`p-3 rounded-xl w-1/2 ${isSaas ? 'bg-[#1570EF] text-white' : ''}`} onClick={()=>{setIsSaas(true)}}>SAAS</button>
                            <button className={`p-3 rounded-xl w-1/2 ${isSaas ? '' : 'bg-[#1570EF] text-white'}`} onClick={()=>{setIsSaas(false)}}>Self Hosted</button>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col p-5`}>
                    <div className={`flex items-center justify-center w-full`}>
                        {
                            isSaas ? (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href={'/dashboard'} className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                            />
                                        </svg>
                                        Sign in with Github
                                    </a>
                                    <a href={'/dashboard'} className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2684FF]" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="M.778 1.213a1.5 1.5 0 0 0-.496 2.649l10.362 7.521.333.242.334-.242 10.362-7.521a1.5 1.5 0 0 0-.496-2.649L11.31.008a1.5 1.5 0 0 0-.62 0L.778 1.213Zm22.944 19.062L13.36 12.755l10.362-7.521v15.041ZM.278 20.275V5.234l10.362 7.521-10.362 7.52Z"
                                            />
                                        </svg>
                                        Sign in with Bitbucket
                                    </a>
                                    <a href={'/dashboard'} className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0078D4]" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"
                                            />
                                        </svg>
                                        Sign in with Azure Devops
                                    </a>
                                    <a href={'/dashboard'} className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FC6D26]" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0465l-4.4 3.2065h-5.7335l-4.4-3.2065a.875.875 0 0 0-.9997-.0465.851.851 0 0 0-.3362.405L.0326 9.5065l-.0337.0862a6.0657 6.0657 0 0 0 2.0115 7.0335l.0187.0138.0188.0112 4.9499 3.7164 2.4544 1.8645 1.5245 1.1544a.8888.8888 0 0 0 1.0732 0l1.5245-1.1544 2.4544-1.8645 4.9686-3.7414.0188-.0112.0187-.0138a6.0657 6.0657 0 0 0 2.0115-7.0335Z"
                                            />
                                        </svg>
                                        Sign in with GitLab
                                    </a>
                                </div>
                                ): (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href={'/dashboard'}
                                        className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#FC6D26]" aria-hidden="true">
                                            <path
                                                fill="currentColor"
                                                d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0465l-4.4 3.2065h-5.7335l-4.4-3.2065a.875.875 0 0 0-.9997-.0465.851.851 0 0 0-.3362.405L.0326 9.5065l-.0337.0862a6.0657 6.0657 0 0 0 2.0115 7.0335l.0187.0138.0188.0112 4.9499 3.7164 2.4544 1.8645 1.5245 1.1544a.8888.8888 0 0 0 1.0732 0l1.5245-1.1544 2.4544-1.8645 4.9686-3.7414.0188-.0112.0187-.0138a6.0657 6.0657 0 0 0 2.0115-7.0335Z"
                                            />
                                        </svg>
                                        Sign in with GitLab
                                    </a>
                                    <a href={'/dashboard'}
                                        className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <KeyIcon className={`w-5`}/>
                                        Sign in with SSO
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <span>By signing up you agree to the <b>Privacy Policy.</b></span>
            </div>
        </div>
    );
};

export default AuthRight;