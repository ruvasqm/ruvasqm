// based on: https://codepen.io/AdamDipinto/pen/pooMmro
// credit to https://codepen.io/AdamDipinto
import { ReactElement } from 'react'

const Blob = ({ children }: { children: ReactElement }) => {
    return (
        <div className='square blob w-50 h-50 lg:h-96 lg:w-96'>
            <span></span>
            <span></span>
            <span></span>
            <div className='content'>{children}</div>
            <style jsx>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Open Sans', sans-serif;
                    }

                    .square {
                        position: relative;
                        margin: 0 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .square span:nth-child(1) {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 2px solid white;
                        border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
                        transition: 0.5s;
                        animation: animate 6s linear infinite;
                    }

                    .blob:hover span:nth-child(1) {
                        border: none;
                        background: #f0db4f;
                    }

                    .square span:nth-child(2) {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 2px solid white;
                        border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
                        transition: 0.5s;
                        animation: animate 4s linear infinite;
                    }

                    .blob:hover span:nth-child(2) {
                        border: none;
                        background: #f0db4f;
                    }

                    .square span:nth-child(3) {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 2px solid white;
                        border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
                        transition: 0.5s;
                        animation: animate2 10s linear infinite;
                    }

                    .blob:hover span:nth-child(3) {
                        border: none;
                        background: #f0db4f;
                    }

                    .content {
                        position: relative;
                        padding: 40px 60px;
                        color: #fff;
                        text-align: center;
                        transition: 0.5s;
                        z-index: 1000;
                    }

                    @keyframes animate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes animate2 {
                        0% {
                            transform: rotate(360deg);
                        }
                        100% {
                            transform: rotate(0deg);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Blob
