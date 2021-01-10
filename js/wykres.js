var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
        // The type of chart we want to create
    type: 'bar',
    
        // The data for our dataset
    data: {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec',
                    'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        datasets: [{
            label: 'Średnia pogoda',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 3, 8, 14, 20, 26, 26, 27, 20, 14, 8, 4]
        }]
    },
    
        // Configuration options go here
    options: {}
});

