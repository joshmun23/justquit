var smoke_count;
$(function () {
    var userID = $('#decision-smoke').attr('href').match(/[0-9]/g).join('');

    $('#chart-button').on('click', function(e) {
        e.preventDefault();

        // var $data = $.ajax({
        //   // var query = { smokes: 'daily', options: {[
        //   //   cost: true
        //   // ]} }
        //   url : '/users/' + userID + '/smokes',
        //   // data : { user_id: userID },
        //   dataType: 'json',
        //   method: 'get',
        //   success: function(response) {
        //     return response
        //   }
        // });
        // // $.get('/users/' + userID + '/smokes', function(response) {
        // //     dataType: 'json'
        // // });
        $('#charts-container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Cigarette Consumption'
            },
            xAxis: {
                categories: ['Day 1', 'Day 2', 'Day 3']
            },
            yAxis: {
                title: {
                    text: 'Cigarettes Smoked'
                }
            },
            series: [{
                name: 'Jane', // later to be user.name
                data: [4, 1, 4] // later to be an array of 7 days worth of smoked cigarettes
            }]
        });
    });


});
