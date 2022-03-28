const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX]; 

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

function getHighest(stock){
    if(stock === 'GME'){
       return Math.max(GME)
    }
    if(stock === 'MSFT'){
        return Math.max(MSFT)
    }
    if(stock === 'DIS'){
        return Math.max(DIS)
    }
    if(stock === 'BNTX'){
        return Math.max(BNTX)
    }
}

async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    
    stocks.forEach( stock => stock.values.reverse())
    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map( value => value.datetime),
            datasets: stocks.map (stock => ({
                label: stock.meta.symbol ,
                data: stock.values.map( value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),

            }))
        }
    });
    //Highest Stock Chart
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: stocks[3].meta.symbol,
            datasets: stocks.map (stock => ({
                label: stock.meta.symbol ,
                data: stock.values.map( value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),

            }))
        }
    });
}

main()