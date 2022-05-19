import logo from '../logo.svg';


export default function UserListPage(props) {

    return (

        <div className='row'>
            <div className='col-3'>
                <div className="card" >
                    <img src={logo} width="100" height={100} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">REACT</h5>
                        <p className="card-text">React is a JavaScript library for building user interfaces</p>
                        <a className="btn btn-primary">APPLY</a>
                    </div>
                </div>
            </div>
        </div>

    )

}