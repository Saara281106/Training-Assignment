import './Home.css'

export default function About(){
    return(
        <>
        <div className="container-fluid">
            <h1 className="fs-1 aboutH">About Us</h1>
            <p className='para2 fs-3'>Welcome to ShopEase, your trusted online shopping destination. We offer a wide range of products across multiple categories to meet your everyday needs. Our goal is to provide a simple, secure, and convenient shopping experience for every customer.</p>
            <img className='shop' src="/abimg.jpg" alt="" />
        </div>
        </>
    )
}