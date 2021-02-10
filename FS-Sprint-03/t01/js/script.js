

function removeDublicates(){
    function getUnique(array){
        var uniqueArray = [];
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    let buf = new Array();
    let withoutspaces = new Array();
    
    buf = str.split(' ');
    for (let i = 0; i < buf.length; i++) {
        if (buf[i]) {
            let tmp = " ";
            tmp += buf[i]
            withoutspaces.push(tmp);
        }
    }
    
    var unique = getUnique(withoutspaces);
    str = unique.join('');

        }
        let str = "Giant Spiders? What's next? Giant Snakes?";
        removeDublicates();
        console.log(str);// Giant Spiders?   
        