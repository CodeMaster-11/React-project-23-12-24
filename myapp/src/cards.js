import './cards.css'


function Card(props)
{
    return(
        <>
            <div className="stylish-container">
                <img src={props.imgsrc} alt="Image_Not_Found" className="stylish-img" />
                <h2 className="stylish-h2">{props.title}</h2>
                <a href={props.link} target="">
                    <button className="beautiful-btn">Watch Now</button>
                </a>
            </div>
        </>
    )
}
export default Card;