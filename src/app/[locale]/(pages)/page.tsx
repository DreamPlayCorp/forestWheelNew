'use client';
import { useState } from 'react';
import Wheel from "@/app/Wheel";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations();
    const [blur, setBlur] = useState<boolean>(false);
    const labels = [
        t('sectors.first'),
        t('sectors.second'),
        t('sectors.third'),
        t('sectors.fourth'),
        t('sectors.fifth'),
        t('sectors.sixth'),
        t('sectors.seventh'),
        t('sectors.eighth'),
    ];
    const weights = [0, 70, 0, 30, 0, 0, 0, 0];


    return <main className={` ${blur ? 'blur' : null}`}>
        <div className="wrapper">
            <div className="logo">
                <img src="/Container.png" alt="logo"/>
            </div>
            <p className="header">
                {t('headerTop')} <br/> <span className="yellow">{t('headerYellowFirst')}</span>
                {t('and')} <span className="yellow">{t('headerYellowSecond')}</span> {t('headerFinish')}
            </p>
            <div className="avatar-wrapper left">
                <img src="/left_target.webp" alt="" className="avatar"/>
            </div>
            <div className="avatar-wrapper right">
                <img src="/hunter.webp" alt="" className="avatar"/>
            </div>
        <Wheel setBlur={setBlur} labels={labels} weights={weights} wordWrapWidthCoeff={+t('coeff')} oddGradient={'./grad1.png'} pairGradient={'./grad2.png'}/>
        </div>
    </main>;
}
