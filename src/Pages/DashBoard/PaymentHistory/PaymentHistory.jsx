import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments, isLoading} = useQuery({
        queryKey: ['payments', user.email],
        queryFn:async () =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>
                <Helmet>
                    <title>Bistro Boss | Payment History</title>
                </Helmet>

                <SectionTitle
                    subHeading="What's now"
                    Heading='Payment History'
                ></SectionTitle>
            </div>

            <div className="p-8">
                <h1 className="ml-32 mb-4">Total Payment: {payments.length}</h1>

                {/* table design */}
                <div className="overflow-x-auto ml-28">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase bg-black text-white">
                                {/* <th>#</th> */}
                                <th>EMAIL</th>
                                <th>transectionId</th>
                                {/* <th>CATEGORY</th> */}
                                <th>TOTAL PRICE</th>
                                <th>PAYENT DATE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    payments.map((item,index) => <tr key={item._id}>
                                    {/* <td>
                                        {index + 1}
                                    </td> */}
                                    
                                    <td>
                                        {item.email}
                                    </td>

                                    <td>
                                        {item.transactionId}
                                    </td>
                                    {/* <td>
                                        {item.category}
                                    </td> */}
                                    <td>$ {item.price}</td>

                                    <td>{item.data}</td>
                                    
                                    <td>{item.status}</td>
                                    </tr>)
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;