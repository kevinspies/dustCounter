const lineReader = require('line-reader');
let uldum = 0;
let shadow = 0;


lineReader.eachLine('card.txt', function (line) {
    console.log(line);
    try {
        let arr = line.split(" ");
        if (arr[0] == "uldum") {
            console.log("ULDUM!")
            let arr2 = arr[1].split(",");
            arr2.forEach(element => {
                console.log(element)
                if (element == "l") {
                    uldum += 1600;
                }
                if (element == "e") {
                    uldum += 400;
                }
                if (element == "r") {
                    uldum += 100;
                }
                if (element == "c") {
                    uldum += 40;
                }
                if (element == "2e") {
                    uldum += 800;
                }
                if (element == "2r") {
                    uldum += 200;
                }
                if (element == "2c") {
                    uldum += 80;
                }
            });
        }
        if (arr[0] == "shadows") {
            console.log("SHADOWS!")
            let arr2 = arr[1].split(",");
            arr2.forEach(element => {
                console.log(element)
                if (element == "l") {
                    shadow += 1600;
                }
                if (element == "e") {
                    shadow += 400;
                }
                if (element == "r") {
                    shadow += 100;
                }
                if (element == "c") {
                    shadow += 40;
                }
                if (element == "2e") {
                    shadow += 800;
                }
                if (element == "2r") {
                    shadow += 200;
                }
                if (element == "2c") {
                    shadow += 80;
                }
            });
        }
    }
    catch{
        console.log("whoops!");
    }
    console.log("results: uldum: " + uldum + " shadows: " + shadow);
});


