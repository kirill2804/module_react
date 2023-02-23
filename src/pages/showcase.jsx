
import Header from '../components/app-header'
import Cards from '../components/cards'

function Showcase(props){
    return (
        <>
            <Header/>
            <Cards data={props.data}/>
        </>
    )
}

export default Showcase