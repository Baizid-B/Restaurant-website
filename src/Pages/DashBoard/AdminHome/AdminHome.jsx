import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { PiChefHat } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,PieChart, Pie, Legend} from 'recharts';



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: stats = 0, isLoading, isError} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    const { data: chartData} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () =>{
            const orderRes = await axiosSecure.get('/order-stats')
            return orderRes.data;
        }
    })

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading stats.</p>;
    }
    
    if (!chartData) {
        return <p>Loading chart data...</p>;
    }

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
      
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom picChart

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const piechartData = chartData.map(data =>{
        return {name: data.category, value:data.revenue}
    })

    return (
        <>
            <div>
                <Helmet>
                    <title>
                        Bistro Boss | Admin Home
                    </title>
                </Helmet>
                <h1 className="uppercase p-8 text-3xl font-semibold">
                    <span>Hi, Welcome Back! </span> 
                    {
                        user?.displayName ? user?.displayName : 'Back!'
                    }
                    </h1>
            </div>

            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 items-center gap-14 ml-8">

                <div className="py-4 px-12 place-items-center bg-[#d1a054] rounded-lg">
                    <div className="stat-value flex flex-row gap-3 items-center">
                        <div><IoWallet /></div>
                        <div>{stats.revenue}</div>
                    </div>
                    <div className="stat-desc font-semibold text-lg">Revenue</div>
                </div>

                <div className="py-4 px-12 place-items-center bg-[#d1a054] rounded-lg">
                    <div className="stat-value flex flex-row gap-3 items-center">
                        <div><FaUsers /></div>
                        <div>{stats.users}</div>
                    </div>
                    <div className="stat-desc font-semibold text-lg">Customers</div>
                </div>

                <div className="py-4 px-12 place-items-center bg-[#d1a054] rounded-lg">
                    <div className="stat-value flex flex-row gap-3 items-center">
                        <div><PiChefHat /></div>
                        <div>{stats.menuItems}</div>
                    </div>
                    <div className="stat-desc font-semibold text-lg">Menu Items</div>
                </div>

                <div className="py-4 px-12 place-items-center bg-[#d1a054] rounded-lg">
                    <div className="stat-value flex flex-row gap-3 items-center">
                        <div><MdLocalShipping /></div>
                        <div>{stats.orders}</div>
                    </div>
                    <div className="stat-desc font-semibold text-lg">Orders</div>
                </div>
            </div>

            {/* shape bar chart */}
            <div className="flex justify-center items-center gap-6">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={piechartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {piechartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </>
    );
};

export default AdminHome;