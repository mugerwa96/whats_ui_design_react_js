export const Card = (props) => {
    return (
        <div>
            {/* card__container */}
            <div className="px-3 my-3 flex justify-between items-center  gap-3">

                {/* left__side */}
                <div>
                    <img src={props.image} className="rounded-full w-10 h-10 bg-cover" alt="" />
                </div>

                {/* middle__side */}
                <div>
                    <p>
                        <span className="text-[100%] font-semibold text-black ">
                            {props.title}
                        </span> <br />
                        <span className="text-[80%]">
                           {props.describe}
                        </span>

                    </p>
        
                </div>

                {/* right__side */}
                <div>
                    <span className="text-[60%]">{props.time}</span>

                </div>
            </div>
        </div>
    )
}