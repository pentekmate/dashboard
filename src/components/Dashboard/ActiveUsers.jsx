import Chart from "react-apexcharts";
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
        <div className="from-70% h-[445px] flex justify-center rounded-2xl px-3 py-3 w-[640px] bg-gradient-to-b from-card-black to-card-blue">
        <div className="bg-gradient-to-b flex py-6 justify-center w-[620px] rounded-lg h-[250px] from-90% from-[#060C29] to-[#040C30] ">
            <Chart
                options={x.options}
                series={x.series}
                type="bar"
                height={222}
                width={620}
            />
        </div>
        </div>
    )

}
export default ActiveUsers