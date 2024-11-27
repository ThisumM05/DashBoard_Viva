let x = 0; 
const number = [];

function refresh() {
    console.clear();
    number.length = 0; // Clear the array

    x = 0;
    while (x <= 11) { 
        const num2 = Math.floor(Math.random() * 100 + 1);
        number.push(num2);
        x++;
        console.log(num2);
    }

    engagementChart.data.datasets[0].data = number;
    engagementChart.update();
    myChart.data.datasets[0].data = number;
    myChart.update();
}

const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const barColors = [
    "rgba(0,0,255,1.0)", 
    "rgba(0,0,255,0.8)", 
    "rgba(0,0,255,0.6)", 
    "rgba(0,0,255,0.4)",
    "rgba(0,0,255,0.29)", 
    "rgba(0,0,255,0.36)", 
    "rgba(0,0,255,0.52)", 
    "rgba(0,0,255,0.71)",
    "rgba(0,0,255,0.65)", 
    "rgba(0,0,255,0.76)", 
    "rgba(0,0,255,0.66)", 
    "rgba(0,0,255,0.32)"
];

const ctxBar = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctxBar, {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: number 
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Social Media Analytics 2024"
        }
    }
});

const ctxLine = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(ctxLine, {
    type: 'line', 
    data: {
        labels: xValues,
        datasets: [{
            label: 'Engagement Rate',
            data: number, // Dynamic data
            borderColor: 'rgba(0, 0, 0)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Engagement %'
                }
            }
        }
    }
});
