import { userTokenAtom, verificationAtom } from "@/services/atoms"
import { verify_user } from "@/services/verify"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { useInterval } from "usehooks-ts"

export default function UserVerifyScreen() {

    const [ token, setToken ] = useState("")

    const [ _v, setVerified ] = useAtom(verificationAtom)

    const [ _t, setUserToken ] = useAtom(userTokenAtom)

    const [ verifying, setVerifying ] = useState(false)

    const greetInfo = [
        "Hello",
        "你好",
        "Please verify your identity",
        "请验证您的身份"
    ]

    const [ greeting, setGreeting ] = useState(0)

    const verifyUser = async (token: string) => {
        setVerifying(true)
        const res = await verify_user(token)
        const succeeded = res.status === 200
        if(succeeded) {
            setVerified(true)
            setUserToken(token)
        }
        setVerifying(false)
    }

    useEffect(() => {
        if(_t) verifyUser(_t);
    }, [_t])

    useInterval(() => {
        setGreeting(g => g + 1 == greetInfo.length ? 0: g + 1)
    }, 3000)

    const greet = greetInfo[greeting]
    //We need to verify your identity
    if(verifying) {
        return (
            <div className="h-screen w-screen z-50 
            flex flex-col justify-center items-center
            bg-gradient-to-br from-amber-300 to-lime-300 blur-md">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        )
    }

    return (
    <div className="h-screen w-screen z-50 
    flex flex-col justify-start items-center
    bg-gradient-to-br from-amber-300 to-lime-300">
        <div className="bg-clip-text bg-gradient-to-r from-lime-500 to-amber-500 py-24">
            <h1 className="text-6xl font-bold text-center 
            font-sans select-none uppercase ease-in-out
            text-stroke-3 text-stroke-transparent text-white">{greet}</h1>
        </div>
        <div className="absolute top-1/2 flex flex-col justify-center items-center">
            <input 
                className="rounded-md form-input backdrop:blur-md ring-0 border-0
                focus:border-amber-400 focus:ring-amber-400
                w-80 placeholder:font-extralight placeholder:italic font-extralight"
                value={token}
                placeholder="Enter your token here"
                onChange={(e) => setToken(e.target.value)}    
            />
            <button
                className={`px-6 py-2 my-3 bg-lime-500 rounded-md
                text-white font-semibold active:bg-lime-600
                disabled:cursor-not-allowed disabled:bg-gray-400`}
                disabled={token.length < 1}
                onClick={() => verifyUser(token)}
            >Verify</button>
        </div>
       
    </div>
    )
}