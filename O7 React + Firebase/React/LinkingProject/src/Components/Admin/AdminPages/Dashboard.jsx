import './pages.css'

export default function Dashboard(){
    return(
        <>
        <div className="container-fluid">
            <h1>DASHBOARD</h1>
            <div className="row">
                <div className="col-md col-sm-12 text-bg-danger ms-3">
                    <h1>83</h1>
                    <p>REGISTERED USERS</p>
                </div>
                <div className="col-md col-sm-12 ms-3 text-bg-success">
                    <h1>157</h1>
                    <p>DAILY VISITORS</p>
                </div>
                <div className="col-md col-sm-12 ms-3 text-bg-warning me-3">
                    <h1>43</h1>
                    <p>NEW MESSAGES</p>
                </div>
            </div>
        </div>
        
        </>
    )
} 