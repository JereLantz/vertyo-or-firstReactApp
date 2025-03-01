//function CoreConcept(props){
export default function CoreConcept({image, title, description}){
    // tällä syntaxilla ei tarvii viitata enää siihen objektiin, vaan tämä antaa noi objektin
    // datat erillisinä muuttujina
    return (
        <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    )
}

