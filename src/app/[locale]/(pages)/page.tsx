'use client';
import { useState } from 'react';
import Wheel from "@/app/Wheel";
import {useTranslations} from "next-intl";
import {ReadonlyURLSearchParams, useSearchParams} from "next/navigation";
import Modal from "@/app/components/modal/modal";
interface Params {
    [key: string]: string | null;
}
export default function Home() {
    const t = useTranslations();
    const paramsObj = useSearchParams();
    const getParams = (names: string[], paramsObj: ReadonlyURLSearchParams) => {
        let params: Params = {};

        names.forEach((name: string) => {
            const value = paramsObj.get(name);
            params[name] = value;
        })
        return params;
    }

    const params = getParams(['stag', 'tracking_link'], paramsObj)
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
                <img src="/girl.webp" alt="" className="avatar"/>
            </div>
            <div className="avatar-wrapper right">
                <img src="/boy.webp" alt="" className="avatar"/>
            </div>
        <Wheel
            setBlur={setBlur}
            labels={labels}
            weights={weights}
            wordWrapWidthCoeff={+t('coeff')}
            oddGradient={'./grad1.png'}
            pairGradient={'./grad2.png'}
            oddColorText={'#000'}
            pairColorText={'#fff'}
        />
        </div>
        <Modal show={blur} elementClass={'popup'} activeClass={'active'} >
                <h2>CONGRATS!</h2>
                <p>YOU HAVE WON:</p>

                <div className="content">
                    <div className="content-image">
                        <img src="/ezgif-2-572a4b516b%201.png" alt="" className="girl"/>
                    </div>
                    <p>
                        500% Welcome Bonus up to €6,000 and 777 Free Spins
                    </p>
                </div>
                <a href={`https://dreamplay.bet/?registration=true&stag=${params.stag}&tracking_link=${params.tracking_link}`} className="button-claim">Claim</a>
        </Modal>
    </main>;
}
