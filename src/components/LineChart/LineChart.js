import React from 'react'
import Plot from 'react-plotly.js';

function LineChart() {
    return (
        <div>
            <Plot
                data={[
                    {
                        x: [150, 200,350,500,600,700],
                        y: [0, 1000000, 2000000, 3000000, 4000000],
                        name: 'spline',
                        text: ['Date: Nov 5th 2020<br> Total Participants: 1, 512, 000','Date: Nov 5th 2020<br> Total Participants: 1, 512, 000','Date: Nov 5th 2020<br> Total Participants: 1, 512, 000','Date: Nov 5th 2020<br> Total Participants: 1, 512, 000','Date: Nov 5th 2020<br> Total Participants: 1, 512, 000','Date: Nov 5th 2020<br> Total Participants: 1, 512, 000',],
                        line: { shape: 'linear' },
                        mode: 'lines',
                        line: {
                            color: 'fff6',
                            width: 3
                        },
                        connectgaps: true,
                    },
                ]}
                layout={{
                    height: 350,
                    plot_bgcolor:"transparent",
                    paper_bgcolor:"transparent",
                    title: 'A Fancy Plot', showlegend: false, legend: {
                        y: 0.5,
                        traceorder: 'reversed',
                        font: { size: 2, color: '#fff' },
                        yref: 'paper'
                    },
                    xaxis: {
                        tickvals:[1, 2, 3, 4, 5, 6],
                        tickfont: { color: '#fff' },
                        // showgrid: true,
                        ticktext: ['11/7','11/7','11/7','11/7','11/7',]
                    },
                    yaxis: {
                        tickfont: { color: '#fff' },
                    },
                }
                }
            />
        </div>
    )
}

export default LineChart
