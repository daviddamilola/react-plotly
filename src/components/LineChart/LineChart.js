import React from 'react'
import Plot from 'react-plotly.js';

function LineChart() {
    return (
        <div>
            <Plot
                data={[
                    {
                        x: [1, 2, 3, 4, 5],
  y: [6, 8, 7, 8, 6],
                        name: 'spline',
  text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
  line: {shape: 'linear'},
                        mode: 'lines+markers',
                        marker: {
                            color: 'pink',
                            size: 8
                        },
                        line: {
                            color: 'rgb(128, 0, 128)',
                            width: 1
                        },
                        connectgaps: true,
                    },
                ]}
                layout={{ title: 'A Fancy Plot' , showlegend: false, legend: {
                    y: 0.5,
                    traceorder: 'reversed',
                    font: {size: 2 },
                    yref: 'paper'
                  }}}
            />
        </div>
    )
}

export default LineChart
