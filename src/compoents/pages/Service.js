import { useParams , Link} from "react-router-dom"
import Services from "./Services"
export default function Service(props) {
    let { id } = useParams()
    console.log(id)
    const service = props.services.find((service) => service.id.toString() === id)
    console.log(service)
    if(!service) return (
        <div>
            <h3>We don't offer that service</h3>
        </div>
    )
    return (
        <div>
            <Services services={props.services}/>
            <div>
                <h3>{service.name}</h3>
                <p>{service.price}</p>
                <p>{service.description}</p>
            </div>
        </div>
    )
}