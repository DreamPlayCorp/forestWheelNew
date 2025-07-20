'use client';
import { useState } from 'react';
import Wheel from "@/app/Wheel";

export default function Home() {
    const [blur, setBlur] = useState<boolean>(false);
    const labels = ["1 BTC", "500% AND 777 FS", "€10.000", "TRY AGAIN",
        "PSS PRO", "500%", "TRY AGAIN", "777 FS"];
    const weights = [0, 70, 0, 30, 0, 0, 0, 0];

    return <main className={` ${blur ? 'blur' : null}`}>
        <div className="wrapper">
            <div className="logo">
                <img src="/Container.png" alt="logo"/>
            </div>
            <p className="header">
                Step into Dreamplay! 500% Welcome Bonus <br/> <span className="yellow">up to €6,000</span>
                and <span className="yellow">777 Free Spins</span> greet you like royalty.
            </p>
            <div className="avatar-wrapper left">
                <img src="/left_target.webp" alt="" className="avatar"/>
            </div>
            <div className="avatar-wrapper right">
                <img src="/hunter.webp" alt="" className="avatar"/>
            </div>
        <Wheel setBlur={setBlur} labels={labels} weights={weights} wordWrapWidthCoeff={.2}/>
        </div>
    </main>;
}
