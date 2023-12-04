import Chart from "react-apexcharts";
import ActiveUsersCard from "./ActiveUsersCard";
function ActiveUsers() {
    const x = {
        options: {
            chart: {
                width: '1px',
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                hideSeries: true,
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    columnWidth: '7px',
                    horizontal: false,

                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                show: false,
                labels: {
                  show: false
                },
                axisBorder: {
                    show: false
                  },
                axisTicks: {
                    show: false
                  }
            },
            fill: {
                colors: ['#ffffff']
            },
            yaxis:{
                tickAmount: 5,
                min: 0,
                max: 500,
                labels:{
                    show:true,
                    style:{
                        colors:["#ffffff"],
                        fontFamily:'Plus Jakarta Sans , sans-serif',
                        fontWeight: 700,
                        fontSize: '10px',
                    }
                }
            },
            grid: {
                show: false,
            }
        },
        series: [
            {
                name: "series-1",
                data: [330, 250, 110, 280, 480, 410, 310, 150]
            }
        ]
    };



    return (
        <div className="h-[445px] py-6 flex flex-col items-center  rounded-2xl gap-6 px-5 w-[640px] bg-gradient-to-t to-10% from-doc-bg-blue to-doc-bg-black">
        <div className="bg-gradient-to-b flex justify-center w-[620px] rounded-lg h-[250px] from-90% from-[#060C29] to-[#040C30] ">
            <Chart
                options={x.options}
                series={x.series}
                type="bar"
                height={222}
                width={620}
            />
        </div>
        <div className="w-full">
            <p className="text-slate-50 w-full text-start font-signin-p font-bold text-lg teszt ">Active Users</p>
            <p className="text-slate-500 w-full text-start font-signin-p text-sm teszt "><span className="text-green-600">(+23)</span> than last week</p>
        </div>  
        <div className="w-full flex justify-between" >
            <ActiveUsersCard title={"Users"} amount={"32,924"}></ActiveUsersCard>
            <ActiveUsersCard title={"Clicks"} amount={"2,42m"}></ActiveUsersCard>
            <ActiveUsersCard title={"Sales"} amount={"2,400$"}></ActiveUsersCard>
            <ActiveUsersCard title={"Items"} amount={"320"}></ActiveUsersCard>
        </div>      
        </div>
    )

}
export default ActiveUsers