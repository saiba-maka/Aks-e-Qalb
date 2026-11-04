
function Hero() {
    return (
        <>
            <style>{`
                * {
                    box-sizing: border-box;
                }

                .hero {
                    min-height: 85vh;
                    padding: 80px 8%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(
                        135deg,
                        #1e1b4b,
                        #581c87,
                        #312e81
                    );
                    color: white;
                    font-family: Arial, sans-serif;
                }

                .hero-content {
                    max-width: 850px;
                    position: relative;
                    z-index: 2;
                }

                .hero-tag {
                    display: inline-block;
                    padding: 10px 22px;
                    border: 1px solid #c4b5fd;
                    border-radius: 30px;
                    color: #ddd6fe;
                    font-size: 14px;
                    margin-bottom: 25px;
                    letter-spacing: 1px;
                }

                .hero h1 {
                    font-size: clamp(42px, 7vw, 76px);
                    line-height: 1.1;
                    margin: 0 0 25px;
                    font-weight: 800;
                }

                .hero h1 span {
                    color: #f0abfc;
                }

                .hero p {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #e9d5ff;
                    max-width: 680px;
                    margin: 0 auto 35px;
                }

                .hero-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .hero-btn {
                    padding: 15px 30px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: 0.3s;
                    display: inline-block;
                }

                .primary-btn {
                    background: #f0abfc;
                    color: #3b0764;
                }

                .secondary-btn {
                    border: 1px solid white;
                    color: white;
                }

                .hero-btn:hover {
                    transform: translateY(-5px);
                    opacity: 0.85;
                }

                .hero-decoration {
                    position: absolute;
                    font-size: 100px;
                    opacity: 0.12;
                }

                .decoration-one {
                    top: 10%;
                    left: 8%;
                }

                .decoration-two {
                    bottom: 10%;
                    right: 8%;
                }

                @media (max-width: 600px) {
                    .hero {
                        padding: 70px 6%;
                        min-height: 75vh;
                    }

                    .hero p {
                        font-size: 16px;
                    }

                    .hero-btn {
                        width: 100%;
                    }
                }
            `}</style>

            <section className="hero" id="home">

                <div className="hero-decoration decoration-one">
                    😂
                </div>

                <div className="hero-decoration decoration-two">
                    🤪
                </div>

                <div className="hero-content">

                    <div className="hero-tag">
                        ✨ WELCOME TO THE MOST UNUSUAL PLACE
                    </div>

                    <h1>
                        A Little Crazy,
                        <br />
                        <span>A Lot of Happy!</span>
                    </h1>

                    <p>
                        Duniya ke aqalmand logon se tang aa gaye hain?
                        Toh janab, bilkul sahi jagah aaye hain!
                        Yahan logic kam aur pagalpan zyada milta hai.
                        Apni fikrein bahar chhor kar andar tashreef laayein.
                    </p>

                    <div className="hero-buttons">

                        <a href="#about" className="hero-btn primary-btn">
                            Enter The Pagal Khana 😂
                        </a>

                        <a href="#about" className="hero-btn secondary-btn">
                            Know Our Story
                        </a>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Hero;
