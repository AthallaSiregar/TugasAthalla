// PENENTUAN HARI ESOK

//Pake else if: 

let Hari = prompt ('Sekarang hari apa?');

function esok (Hari){

    if (Hari == 'senin'){
        console.log('besok hari selasa');
        document.write('besok hari selasa')
    }

        else if (Hari == 'selasa'){
            console.log('besok hari rabu');
            document.write('besok hari rabu')
        }

        else if (Hari == 'rabu'){
            console.log("besok hari kamis");
            document.write('besok hari kamis')
        }

        else if (Hari == 'kamis'){
            console.log("besok hari jumat");
            document.write('besok hari jumat')
        }

        else if (Hari == 'jumat'){
            console.log("besok hari sabtu");
            document.write('besok hari sabtu')
        }

        else if (Hari == 'sabtu'){
            console.log("besok hari minggu");
            document.write('besok hari minggu')
        }
           
        else if (Hari == 'minggu'){
            console.log("besok hari senin");
            document.write('besok hari senin')
        }

        else {
            console.log ('error');
            document.write('error')
            
        }
        
     return null   
    }
    console.log(esok(Hari))



//pake switch case:

let Hari = prompt ('Sekarang hari apa?');

function esok (hari){

        switch (hari) {

            case 'senin':
                console.log ('besok hari selasa');
                document.write('besok hari selasa');break

            case 'selasa':
                console.log('besok hari rabu');
                document.write('besok hari rabu');break
            
            case 'rabu':
                console.log('besok hari kamis');
                document.write('besok hari kamis');break
            
            case 'kamis':
                console.log('besok hari jumat');
                document.write('besok hari jumat');break

            case 'jumat':
                console.log('besok hari sabtu');
                document.write('besok hari sabtu');break
            
            case 'sabtu':
                console.log('besok hari minggu');
                document.write('besok hari minggu');break
            
            case 'minggu':
                console.log('besok hari senin');
                document.write('besok hari senin');break
            
            default:
                console.log('Error')
                document.write('Error');
        }
        return null   

    }
    
    console.log(esok(Hari))


let hari = prompt('sekarang hari apa?');






// DERET ANGKA GENAP

let angka = prompt ('hingga angka berapa?')

function genap (angka){
    for ( i =0; i <= angka; i++) {
        if(i%2 == 0){
            document.write(i + "<br>");
            console.log(i);
        }
    }  
return 'Done'
}

console.log(genap(angka))



// DERET ANGKA GANJIL

let angka = prompt ('hingga angka berapa?')

function ganjil (angka){
    for (i=0; i<= angka; i++) {
        if(i%2 != 0){
            document.write(i + "<br>");
            console.log(i);
        }
    }
return 'Done'
}

console.log(ganjil(angka))