import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="relative w-full">
                <img className="w-full" src="https://images.squarespace-cdn.com/content/v1/5bbe5f86809d8e661488fd30/1600807018129-OVCOHFZSIO8082S9RQW0/image.gif" alt="" />
                <div className="absolute bottom-1/2 left-1">
                    <h1 className="font-bold text-[64px] text-red-700">Oops!</h1>
                    <p className="font-bold text-[32px] text-blue-600">Pages Not Found</p>
                    <Link to={'/'}><button className="btn btn-accent">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;