export default function TabButton({children}){
    function handleClick() {
        console.log("hello", children)
    }

    return (
        <li>
        <button onClick={handleClick}>{children}</button>
        </li>
    )
}
