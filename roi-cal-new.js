document.addEventListener('DOMContentLoaded', function() {
   var myChart1, myChart2, myChart4, myChart5;

function getFontSize(baseSize) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        return baseSize * 0.5; // Small screen (e.g., phones)
    } else if (screenWidth < 1024) {
        return baseSize * 0.8; // Medium screen (e.g., tablets)
    } else {
        return baseSize; // Large screen (e.g., desktops)
    }
}
function getBarSize(baseSize) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        return baseSize * 0.4; // Small screen (e.g., phones)
    } else if (screenWidth < 1024) {
        return baseSize * 0.75; // Medium screen (e.g., tablets)
    } else {
        return baseSize; // Large screen (e.g., desktops)
    }
}
// Assuming myChart1 to myChart6 are already defined
const charts = [myChart1, myChart2, myChart4, myChart5];

function updateChartsSettings() {
    charts.forEach(chart => {
        chart.options.scales.y.ticks.font.size = getFontSize(20);
        chart.options.scales.x.ticks.font.size = getFontSize(20);
        chart.options.plugins.datalabels.font.size = getFontSize(20);
        chart.options.plugins.title.font.size = getFontSize(30);

        // Update bar properties
        chart.data.datasets.forEach(dataset => {
            dataset.barThickness = getBarSize(200);
            dataset.maxBarThickness = getBarSize(200);
            dataset.minBarLength = getBarSize(2);
        });

        chart.update();
    });
}
window.addEventListener('resize', updateChartsSettings);
    function initializeChart() {
      var ctx1 = document.getElementById('myChart11').getContext('2d');
myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
                 labels: [
            ['Without CLEAR\u207d\u1d3f\u207e', 'De-dup'],
            ['After CLEAR\u207d\u1d3f\u207e', 'De-dup']
        ],
        datasets: [{
            barPercentage: 0.5,
            barThickness: getBarSize(200),
            maxBarThickness: getBarSize(200),
            minBarLength: getBarSize(2),
            data: [null, null], // Initial data set to null
            backgroundColor: ['#b1b1b1', '#ff6000'],
            borderColor: ['#b1b1b1', '#ff6000'],
            borderWidth: 1
        }]
    },
    options: {
        animation: false, // Disable animations
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 700000, // Initial suggested max value for y-axis
                ticks: {
                    color: 'white', // Change y-axis labels color
                    font: {
                        size: getFontSize(20) // Adjust font size for y-axis labels
                    },
                    callback: function(value) {
                        return '$' + value.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)', // Set grid line color with transparency for visibility
                    lineWidth: 2 // Set grid line width
                }
            },
            x: {
                ticks: {
                    color: 'white', // Change x-axis labels color
                    font: {
                        size: getFontSize(20) // Adjust font size for x-axis labels
                    }
                },
                grid: {
                    display: false // Disable x-axis grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: false // Disable the legend
            },
            datalabels: {
                color: 'white', // Change data labels color
                font: {
                    weight: 'bold',
                    size: getFontSize(20) // Adjust font size for data labels
                }
            },
            title: {
                display: false, // Display the title
                text: 'Storage Saving AWS - $${Total_Saving_AWS.toLocaleString()}', // Set the title text
                color: 'white', // Set the title color
                font: {
                    size: getFontSize(30) // Adjust font size for title
                },
                padding: {
                    bottom: 30 // Add space below the title
                }
            }
        },
        borderWidth: 2, // Set chart border width
        borderColor: '#ffffff' // Set chart border color
    }
});


          var ctx2 = document.getElementById('myChart12').getContext('2d');
        myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                 labels: [
            ['Days taken for Full', 'watchdown QC for', 'With Duplicate'],
            ['Days taken for Full', 'watchdown QC for', 'Without Duplicate']
        ],
                datasets: [{
                    barPercentage: 0.5,
                    barThickness: getBarSize(200),
                maxBarThickness: getBarSize(200),
                minBarLength: getBarSize(2),
                    data: [null, null], // Initial data set to null
                    backgroundColor: ['#b1b1b1', '#ff6000'],
                    borderColor: ['#b1b1b1', '#ff6000'],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false, // Disable animations
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax:10000, // Initial suggested max value for y-axis
                        ticks: {
                            color: 'white', // Change y-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for y-axis labels
                            },
                            callback: function(value) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)', // Set grid line color with transparency for visibility
                            lineWidth: 2 // Set grid line width
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white', // Change x-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for x-axis labels
                            }
                        },

                        grid: {
                            display: false // Disable x-axis grid lines
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Disable the legend
                    },
                    datalabels: {
                        color: 'white', // Change data labels color
                        font: {
                            weight: 'bold',
                            size: getFontSize(20) // Adjust font size for data labels
                        }
                    },
                    title: {
                        display: false, // Display the title
                        text: 'QC - Productivity Gain AWS', // Set the title text
                        color: 'white', // Set the title color
                        font: {
                            size: getFontSize(30) // Adjust font size for title
                        },
                        padding: {
                            //top: 20, Add space above the title
                            bottom: 30 // Add space below the title
                        }
                    }
                },

                borderWidth: 2, // Set chart border width
                borderColor: '#ffffff' // Set chart border color
            }
        });


      var ctx4 = document.getElementById('myChart14').getContext('2d');
        myChart4 = new Chart(ctx4, {
            type: 'bar',
            data: {
                 labels: [
            ['Without CLEAR\u207d\u1d3f\u207e', 'De-dup'],
            ['After CLEAR\u207d\u1d3f\u207e', 'De-dup']
        ],
                datasets: [{
                    barThickness: getBarSize(200),
                maxBarThickness: getBarSize(200),
                minBarLength: getBarSize(2),
                    data: [null, null], // Initial data set to null
                    backgroundColor: ['#b1b1b1', '#ff6000'],
                    borderColor: ['#b1b1b1', '#ff6000'],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false, // Disable animations
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 700000, // Initial suggested max value for y-axis
                        ticks: {
                            color: 'white', // Change y-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for y-axis labels
                            },
                            callback: function(value) {
                                return '$' + value.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                });
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)', // Set grid line color with transparency for visibility
                            lineWidth: 2 // Set grid line width
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white', // Change x-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for x-axis labels
                            }
                        },

                        grid: {
                            display: false // Disable x-axis grid lines
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Disable the legend
                    },
                    datalabels: {
                        color: 'white', // Change data labels color
                        font: {
                            weight: 'bold',
                            size: getFontSize(20) // Adjust font size for data labels
                        }
                    },
                    title: {
                        display: false, // Display the title
                        text: 'Storage Saving Microsoft', // Set the title text
                        color: 'white', // Set the title color
                        font: {
                            size: getFontSize(30) // Adjust font size for title
                        },
                        padding: {
                            //top: 20, Add space above the title
                            bottom: 30 // Add space below the title
                        }
                    }
                },

                borderWidth: 2, // Set chart border width
                borderColor: '#ffffff' // Set chart border color
            }
        });


        var ctx5 = document.getElementById('myChart15').getContext('2d');
        myChart5 = new Chart(ctx5, {
            type: 'bar',
            data: {
                 labels: [
            ['Days taken for Full', 'watchdown QC for', 'With Duplicate'],
            ['Days taken for Full', 'watchdown QC for', 'Without Duplicate']
        ],
                datasets: [{
                    barPercentage: 0.5,
                   barThickness: getBarSize(200),
                maxBarThickness: getBarSize(200),
                minBarLength: getBarSize(2),
                    data: [null, null], // Initial data set to null
                    backgroundColor: ['#b1b1b1', '#ff6000'],
                    borderColor: ['#b1b1b1', '#ff6000'],
                    borderWidth: 1
                }]
            },
            options: {
                animation: false, // Disable animations
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 10000, // Initial suggested max value for y-axis
                        ticks: {
                            color: 'white', // Change y-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for y-axis labels
                            },
                            callback: function(value) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)', // Set grid line color with transparency for visibility
                            lineWidth: 2 // Set grid line width
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white', // Change x-axis labels color
                            font: {
                                size: getFontSize(20) // Adjust font size for x-axis labels
                            }
                        },

                        grid: {
                            display: false // Disable x-axis grid lines
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Disable the legend
                    },
                    datalabels: {
                        color: 'white', // Change data labels color
                        font: {
                            weight: 'bold',
                            size: getFontSize(20) // Adjust font size for data labels
                        }
                    },
                    title: {
                        display: false, // Display the title
                        text: 'QC - Productivity Gain Microsoft', // Set the title text
                        color: 'white', // Set the title color
                        font: {
                            size: getFontSize(30) // Adjust font size for title
                        },
                        padding: {
                            //top: 20, Add space above the title
                            bottom: 30 // Add space below the title
                        }
                    }
                },

                borderWidth: 2, // Set chart border width
                borderColor: '#ffffff' // Set chart border color
            }
        });
updateChartsSettings();
    }

    function updateChart(chart, data1, data2) {
        chart.data.datasets[0].data = [
            data1.toFixed(2),
            data2.toFixed(2)
        ];
        chart.update();
    }
      $('#Submit-btn-roi-aws-2').click(function() {
        calculate_annual();
    });
    $('#Submit-btn-roi-mi-2').click(function() {
        calculate_annual_m();
    });

    function calculate_annual() {
        // Parse inputs and check for NaN values
        var A1a = parseFloat($("#A1a").val()) || 0;
        var A1b = parseFloat($("#A1b").val()) || 0;
        var A1c = parseFloat($("#A1c").val()) || 0;
        var A1d = parseFloat($("#A1d").val()) || 0;
        var A1e = parseFloat($("#A1e").val()) || 0;

		 if (isNaN(A1a) || A1a <= 0 || isNaN(A1b) || A1b <= 0 || isNaN(A1c) || A1c <= 0 || isNaN(A1d) || A1d <= 0 || isNaN(A1e) || A1e <= 0) {
        document.getElementById('error_message').textContent = 'All input values must be positive numbers.';
        document.getElementById('error_message').style.display = 'block';
           document.getElementById('error_message1').textContent = 'All input values must be positive numbers.';
        document.getElementById('error_message1').style.display = 'block';
         
        return;
    } else {
        document.getElementById('error_message').style.display = 'none';
      document.getElementById('error_message1').style.display = 'none';
    
    }

        var Totalfileversions = A1b * A1c;
        var StorageValuePerFileGB = ((3600 / 8 / 1024) * A1a * A1d / 1024) * 1024;
        var StorageValueallFileInOneGB = StorageValuePerFileGB * Totalfileversions;

        var Storage_Provider = $("#Storage_Provider").val();
        var Storage_region = $("#Storage_region").val();

        var TotalLibraryStorageInPB = StorageValueallFileInOneGB * A1e / 1024 / 1024;
        var DeDuplicationElimination = 0.4;
        var TotalStoragePostDeDup = TotalLibraryStorageInPB * (1 - DeDuplicationElimination);

        var awsPricing = [{
                provider: 'AWS',
                region: 'Ireland',
                storageType: 'S3_standard',
                price: 0.023000
            },
            {
                provider: 'AWS',
                region: 'Ireland',
                storageType: 'S3_glacier',
                price: 0.000990
            },
            {
                provider: 'AWS',
                region: 'USA - East',
                storageType: 'S3_standard',
                price: 0.023000
            },
            {
                provider: 'AWS',
                region: 'USA - East',
                storageType: 'S3_glacier',
                price: 0.000990
            },
            {
                provider: 'AWS',
                region: 'USA - West',
                storageType: 'S3_standard',
                price: 0.023000
            },
            {
                provider: 'AWS',
                region: 'USA - West',
                storageType: 'S3_glacier',
                price: 0.000990
            },
            {
                provider: 'AWS',
                region: 'APAC - India',
                storageType: 'S3_standard',
                price: 0.025000
            },
            {
                provider: 'AWS',
                region: 'APAC - India',
                storageType: 'S3_glacier',
                price: 0.002000
            },
            {
                provider: 'AWS',
                region: 'Singapore',
                storageType: 'S3_standard',
                price: 0.025000
            },
            {
                provider: 'AWS',
                region: 'Singapore',
                storageType: 'S3_glacier',
                price: 0.002000
            },
            {
                provider: 'AWS',
                region: 'Amsterdam',
                storageType: 'S3_standard',
                price: 0.023000
            },
            {
                provider: 'AWS',
                region: 'Amsterdam',
                storageType: 'S3_glacier',
                price: 0.000990
            },
            {
                provider: 'AWS',
                region: 'Germany',
                storageType: 'S3_standard',
                price: 0.024500
            },
            {
                provider: 'AWS',
                region: 'Germany',
                storageType: 'S3_glacier',
                price: 0.001800
            }
        ];

        var prices = {
            S3_standard: 0,
            S3_glacier: 0
        };

        awsPricing.forEach(function(item) {
            if (item.provider === Storage_Provider && item.region === Storage_region) {
                switch (item.storageType) {
                    case 'S3_standard':
                        prices.S3_standard = item.price;
                        break;
                    case 'S3_glacier':
                        prices.S3_glacier = item.price;
                        break;
                    default:
                        break;
                }
            }
        });

        var S3_standard = (parseFloat($("#S3_standard").val()) || 0) / 100;
        var S3_glacier = (parseFloat($("#S3_glacier").val()) || 0) / 100;

            if (S3_standard + S3_glacier !== 1) {
            document.getElementById('spam_message_paragraph').textContent = 'The sum of % split must equal 100%';
            document.getElementById('spam_message_paragraph').style.display = 'block';

            var S3_standard_without_dedup_result = 0;
            var S3_glacier_without_dedup_result = 0;
            var S3_standard_without_after_result = 0;
            var S3_glacier_without_after_result = 0;
            var Total_Saving_AWS1 = 0;
            var Days_saved_post_de_duplication = 0;
               var QC_with_duplicates = 0;
            var QC_without_duplicates =  0;
              var S3_standard_Total_without_dedup_result = 0;
            var S3_glacier_Total_without_dedup_result = 0;

            $("#S3_standard_price_without_dedup").val(S3_standard_without_dedup_result.toFixed(2));
            $("#S3_glacier_price_without_dedup").val(S3_glacier_without_dedup_result.toFixed(2));
            $("#S3_standard_price_after_dedup").val(S3_standard_without_after_result.toFixed(2));
            $("#S3_glacier_price_after_dedup").val(S3_glacier_without_after_result.toFixed(2));
            $("#Total_Saving_AWS").html('Storage Savings<br>$' + Math.round(Total_Saving_AWS1).toLocaleString());
            $("#Total_days_saving").html('QC Time Savings<br>' + Math.round(Days_saved_post_de_duplication).toLocaleString() + 'Days');

            // Update the chart with new data
            //updateChart(S3_standard_without_dedup_result, S3_glacier_without_dedup_result);
            updateChart(myChart1, S3_standard_Total_without_dedup_result, S3_glacier_Total_without_dedup_result);
             updateChart(myChart2, QC_with_duplicates, QC_without_duplicates);

            return;
        } else {
            document.getElementById('spam_message_paragraph').style.display = 'none';
          document.querySelector('.aws-graph').style.display = 'block';

            var S3_standard_without_dedup_result = TotalLibraryStorageInPB * S3_standard * prices.S3_standard * 1024 * 1024;
            var S3_glacier_without_dedup_result = TotalLibraryStorageInPB * S3_glacier * prices.S3_glacier * 1024 * 1024;
            var S3_standard_without_after_result = TotalStoragePostDeDup * S3_standard * prices.S3_standard * 1024 * 1024;
            var S3_glacier_without_after_result = TotalStoragePostDeDup * S3_glacier * prices.S3_glacier * 1024 * 1024;

            var S3_standard_Total_without_dedup_result = S3_standard_without_dedup_result + S3_glacier_without_dedup_result;
            var S3_glacier_Total_without_dedup_result = S3_standard_without_after_result + S3_glacier_without_after_result;
              var Total_Saving_AWS1 = S3_standard_Total_without_dedup_result - S3_glacier_Total_without_dedup_result;

            $("#S3_standard_price_without_dedup").val(S3_standard_Total_without_dedup_result.toFixed(2));
            $("#S3_glacier_price_without_dedup").val(S3_glacier_without_dedup_result.toFixed(2));
            $("#S3_standard_price_after_dedup").val(S3_glacier_Total_without_dedup_result.toFixed(2));
            $("#S3_glacier_price_after_dedup").val(S3_glacier_without_after_result.toFixed(2));
            $("#Total_Saving_AWS").html('Storage Savings<br>$' + Math.round(Total_Saving_AWS1).toLocaleString());

            var full_watch_down_QC_time = 48;
            var fte_in_team = 10;
            var Total_QC_time_for_all_versions = (full_watch_down_QC_time * Totalfileversions)/60;
            var QC_Time_for_all_files = (A1e * Total_QC_time_for_all_versions)/Totalfileversions;
            var capacity_per_day_team = fte_in_team * 8;
            var QC_hours_post_deduplication = QC_Time_for_all_files * (1 - 0.40);
            var Days_saved_post_de_duplication = (QC_Time_for_all_files/24) - (QC_hours_post_deduplication/24);
            var QC_with_duplicates = QC_Time_for_all_files/24;
            var QC_without_duplicates = QC_hours_post_deduplication/24;

             $("#Total_days_saving").html('QC Time Savings<br>' + Math.round(Days_saved_post_de_duplication).toLocaleString() + 'Days');

            // Update the chart with new data
            //updateChart(S3_standard_without_dedup_result, S3_glacier_without_dedup_result);
            updateChart(myChart1, S3_standard_Total_without_dedup_result, S3_glacier_Total_without_dedup_result);
            updateChart(myChart2, QC_with_duplicates, QC_without_duplicates);
        }
    }

    function calculate_annual_m() {
        // Parse inputs and check for NaN values
        var A1a = parseFloat($("#A1a").val()) || 0;
        var A1b = parseFloat($("#A1b").val()) || 0;
        var A1c = parseFloat($("#A1c").val()) || 0;
        var A1d = parseFloat($("#A1d").val()) || 0;
        var A1e = parseFloat($("#A1e").val()) || 0;

		 if (isNaN(A1a) || A1a <= 0 || isNaN(A1b) || A1b <= 0 || isNaN(A1c) || A1c <= 0 || isNaN(A1d) || A1d <= 0 || isNaN(A1e) || A1e <= 0) {
       document.getElementById('error_message').textContent = 'All input values must be positive numbers.';
        document.getElementById('error_message').style.display = 'block';
           document.getElementById('error_message2').textContent = 'All input values must be positive numbers.';
        document.getElementById('error_message2').style.display = 'block';
        return;
    } else {
        document.getElementById('error_message').style.display = 'none';
      document.getElementById('error_message2').style.display = 'none';
    }
        var Totalfileversions = A1b * A1c;
        var StorageValuePerFileGB = ((3600 / 8 / 1024) * A1a * A1d / 1024) * 1024;
        var StorageValueallFileInOneGB = StorageValuePerFileGB * Totalfileversions;

        var Storage_Provider = $("#Storage_Provider").val();
        var Storage_region = $("#Storage_region").val();

        var TotalLibraryStorageInPB = StorageValueallFileInOneGB * A1e / 1024 / 1024;
        var DeDuplicationElimination = 0.4;
        var TotalStoragePostDeDup = TotalLibraryStorageInPB * (1 - DeDuplicationElimination);

        var awsPricing = [{
                provider: 'Microsoft',
                region: 'Ireland',
                storageType: 'Hot',
                price: 0.023000
            },
            {
                provider: 'Microsoft',
                region: 'Ireland',
                storageType: 'Archive',
                price: 0.000990
            },
            {
                provider: 'Microsoft',
                region: 'USA - East',
                storageType: 'Hot',
                price: 0.021000
            },
            {
                provider: 'Microsoft',
                region: 'USA - East',
                storageType: 'Archive',
                price: 0.000990
            },
            {
                provider: 'Microsoft',
                region: 'USA - West',
                storageType: 'Hot',
                price: 0.021000
            },
            {
                provider: 'Microsoft',
                region: 'USA - West',
                storageType: 'Archive',
                price: 0.002000
            },
            {
                provider: 'Microsoft',
                region: 'APAC - India',
                storageType: 'Hot',
                price: 0.020000
            },
            {
                provider: 'Microsoft',
                region: 'APAC - India',
                storageType: 'Archive',
                price: 0.002000
            },
            {
                provider: 'Microsoft',
                region: 'Singapore',
                storageType: 'Hot',
                price: 0.020000
            },
            {
                provider: 'Microsoft',
                region: 'Singapore',
                storageType: 'Archive',
                price: 0.002000
            },
            {
                provider: 'Microsoft',
                region: 'Amsterdam',
                storageType: 'Hot',
                price: 0.020000
            },
            {
                provider: 'Microsoft',
                region: 'Amsterdam',
                storageType: 'Archive',
                price: 0.001800
            },
            {
                provider: 'Microsoft',
                region: 'Germany',
                storageType: 'Hot',
                price: 0.019600
            },
            {
                provider: 'Microsoft',
                region: 'Germany',
                storageType: 'Archive',
                price: 0.001800
            }
        ];

        var prices = {
            Hot: 0,
            Archive: 0
        };

        awsPricing.forEach(function(item) {
            if (item.provider === Storage_Provider && item.region === Storage_region) {
                switch (item.storageType) {
                    case 'Hot':
                        prices.Hot = item.price;
                        break;
                    case 'Archive':
                        prices.Archive = item.price;
                        break;
                    default:
                        break;
                }
            }
        });

        var hot = (parseFloat($("#hot").val()) || 0) / 100;
        var archive = (parseFloat($("#archive").val()) || 0) / 100;

           if (hot + archive !== 1) {
            document.getElementById('spam_message_paragraph1').textContent = 'The sum of % split must equal 100%';
            document.getElementById('spam_message_paragraph1').style.display = 'block';

            var Hot_without_dedup_result = 0;
            var Archive_without_dedup_result = 0;
            var Hot_without_after_result = 0;
            var Archive_without_after_result = 0;
            var Total_Saving_microsoft1 = 0;
            var Days_saved_post_de_duplication = 0;
               var QC_with_duplicates = 0;
            var QC_without_duplicates =  0;
              var Hot_Total_without_dedup_result = 0;
            var Archive_Total_without_dedup_result = 0;

            $("#Hot_price_without_dedup").val(Hot_without_dedup_result.toFixed(2));
            $("#Archive_price_without_dedup").val(Archive_without_dedup_result.toFixed(2));
            $("#Hot_price_after_dedup").val(Hot_without_after_result.toFixed(2));
            $("#Archive_price_after_dedup").val(Archive_without_after_result.toFixed(2));
            $("#Total_days_saving_mi").html('QC Time Savings<br>' + Math.round(Days_saved_post_de_duplication).toLocaleString() + 'Days');
            $("#Total_Saving_microsoft").html('Storage Savings<br>$' + Math.round(Total_Saving_microsoft1).toLocaleString());


            updateChart(myChart4, Hot_Total_without_dedup_result, Archive_Total_without_dedup_result);
            updateChart(myChart5, QC_with_duplicates, QC_without_duplicates);
            return;
        } else {
            document.getElementById('spam_message_paragraph1').style.display = 'none';
          document.querySelector('.micro-graph').style.display = 'block';
            var Hot_without_dedup_result = TotalLibraryStorageInPB * hot * prices.Hot * 1024 * 1024;
            var Archive_without_dedup_result = TotalLibraryStorageInPB * archive * prices.Archive * 1024 * 1024;
            var Hot_without_after_result = TotalStoragePostDeDup * hot * prices.Hot * 1024 * 1024;
            var Archive_without_after_result = TotalStoragePostDeDup * archive * prices.Archive * 1024 * 1024;


            var Hot_Total_without_dedup_result = Hot_without_dedup_result + Archive_without_dedup_result;
            var Archive_Total_without_dedup_result = Hot_without_after_result + Archive_without_after_result;
             var Total_Saving_microsoft1 = Hot_Total_without_dedup_result - Archive_Total_without_dedup_result;

            $("#Hot_price_without_dedup").val(Hot_Total_without_dedup_result.toFixed(2));
            $("#Archive_price_without_dedup").val(Archive_without_dedup_result.toFixed(2));
            $("#Hot_price_after_dedup").val(Archive_Total_without_dedup_result.toFixed(2));
            $("#Archive_price_after_dedup").val(Archive_without_after_result.toFixed(2));
             $("#Total_Saving_microsoft").html('Storage Savings<br>$' + Math.round(Total_Saving_microsoft1).toLocaleString());

             var full_watch_down_QC_time = 48;
            var fte_in_team = 10;
            var Total_QC_time_for_all_versions = (full_watch_down_QC_time * Totalfileversions)/60;
            var QC_Time_for_all_files = (A1e * Total_QC_time_for_all_versions)/Totalfileversions;
            var capacity_per_day_team = fte_in_team * 8;
            var QC_hours_post_deduplication = QC_Time_for_all_files * (1 - 0.40);
            var Days_saved_post_de_duplication = (QC_Time_for_all_files/24) - (QC_hours_post_deduplication/24);
            var QC_with_duplicates = QC_Time_for_all_files/24;
            var QC_without_duplicates = QC_hours_post_deduplication/24;

             $("#Total_days_saving_mi").html('QC Time Savings<br>' + Math.round(Days_saved_post_de_duplication).toLocaleString() + 'Days');

            updateChart(myChart4, Hot_Total_without_dedup_result, Archive_Total_without_dedup_result);
            updateChart(myChart5, QC_with_duplicates, QC_without_duplicates);
        }
    }
    initializeChart();
   $(".roi-input").keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter, decimal point (main keyboard and numpad)
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 110]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
    }
    // Prevent: + (main keyboard and numpad) and - (main keyboard and numpad)
    if ($.inArray(e.keyCode, [107, 109, 187, 189]) !== -1) {
        e.preventDefault();
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});
});
