import React from 'react';
import Head from "next/head";
import A from "./A";


const MainContainer = ({children, keywords}) => {
    return (
        // Это реакт фрагмент. Я обернул в него приложение, чтобы можно было добавить мета тег
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs, " + keywords}></meta>
                <title>Privet</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text={"Пользователи"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                    {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                        `}
            </style>
        </>
        
    );
};

export default MainContainer;