import { useEffect, useState } from 'react';

export default function UserListPage(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(
        () => {

            fetch('https://reqres.in/api/users?page=1')
                .then(res => res.json())
                .then(
                    (success) => {
                        setUsers(success.data);
                        setIsLoaded(true)
                    },
                    (error) => {
                        setError(error)
                    }
                )

        }
    )
    return (
        <ul>
            <div className='row'>
                {users.map(item => (
                    <div key={item.id} className='col-3'>
                        <div className="card" >
                            <img src={item.avatar} width="100" height={150} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn btn-primary">{item.email}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ul>
    );
}





