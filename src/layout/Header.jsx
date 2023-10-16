
const Header = () => {

    const animate = () => {
        const letter1 = document.getElementById('letter1');
        const letter2 = document.getElementById('letter2');
        const header = document.getElementById('header');

        setTimeout(() => {
            letter1.classList.add('animate');
        }, 500);

        setInterval(() => {
            letter2.classList.add('animate');
            header.classList.add('animateBg');

        }, 600);
    }


    return (
        <div className={"flex"}>
            <h1 className={"text-title font-bold overflow-hidden"}><span className={'inline-block'} id={'one'}>W</span></h1>
            <h1 className={`text-title font-bold translate-y-[100%] overflow-hidden`} id={'letter1'} onAnimationEnd={animate}><span className={'inline-block'} id={'four'}>e</span></h1>
            <h1 className={"text-title font-bold overflow-hidden"}><span className={'inline-block'} id={'two'}>bD</span></h1>
            <h1 className={"text-title font-bold translate-y-[100%] overflow-hidden"} id={'letter2'} onAnimationEnd={animate}><span className={'inline-block'} id={'five'}>e</span></h1>
            <h1 className={"text-title font-bold overflow-hidden"}><span className={'inline-block'} id={'three'}>v</span></h1>


        </div>
    );
};

export default Header;