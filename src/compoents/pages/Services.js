import { Link } from "react-router-dom"

export default function Services(props) {
    const servicesArr = props.services.map((service, i) => {
        return (
            <li key={`service-${i}`}> 
                <Link to={`/services/${service.id}`}>
                    {service.name}
                </Link>
            </li>
        )
    })
    return (
        <>
            <h2> Services Page</h2>
            <ol>{servicesArr}</ol>
        </>
    )
}