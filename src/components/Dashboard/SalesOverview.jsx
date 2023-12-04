import Chart from "react-apexcharts";
function SalesOverview(){

    const x = {
        series: [{
            data: [500, 300, 166, 150, 300, 200,400,300,211,355,400,460]
          }, {
            data: [300, 155, 80, 122, 200, 180, 41,333,215,67,245,111]
          }],
          options: {
            chart: {
              height: 445,
              type: 'area',
              toolbar: {
                show: false
              },
              hideSeries:true,
            },
            legend:{
                show:false
            },
            colors:['#2CD9FF', '#0075FF',],
            fill: {
                colors: ['rgba(0, 117, 255, 1)', 'rgba(0, 117, 255, 1)']
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels:{
                style:{
                    colors:["#ffffff","#ffffff"],
                    fontFamily:'Plus Jakarta Sans , sans-serif',
                    fontWeight: 700,
                    fontSize: '10px',
                }},
              type: 'string',
              categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",],
                
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
            dataLabels: {
                enabled: false
              },
              grid: {
                show: true,
                borderColor:
                '#56577A',
                strokeDashArray: 7,
            }
          },
    }
   
    return(
        <div className="from-70% h-[445px] rounded-2xl  py-6  w-[924px] bg-gradient-to-b from-card-black to-card-blue">
            <p className="text-slate-50 px-4 font-black text-lg font-signin-p">Sales overview</p>
            <p className="text-slate-500 px-4 py-3 font-black text-sm font-signin-p"><span className="text-green-500">(+5) more</span> in 2021</p>
            <Chart
              options={x.options}
              series={x.series}
              type="area"
              height={350}
            />
        </div>
    )

}

export default SalesOverview