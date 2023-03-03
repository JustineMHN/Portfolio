

var age =parseInt(prompt()); //parseInt allow to converted to a integer and the prompt allow to user to put in a input 

switch (age) {
    case 18:
        console.log('Majeure')
        break;
    case 15:
        console.log('Mineure')
        break;
    case 24:
        console.log('OLD')
        break;

    default:
        console.log('Sorry you are not availlable!')
        break;
}
var nombre = 3;
for (let index = 0; index < 13; index++) {
    console.log(`3 * ${index} = ${index * 3}`) // utilisation des tils pour faciliter et rendre lisible le code (alt gr + 7 pour afficher le til)
} 

var tab = []
tab.push('admission', 'admise', 'obtention', 'caq', 'visa');
tab.unshift('deposé')
tab.pop()
tab.shift()
tab.splice(2, 2, 'Canada')
tab1 = [...tab, 'Maleine', 'Pierrot' ]
tab1.reverse()
tab1.join()
var tab2 = tab1.join('-')
tab3 = tab2.split('-')
tab3

var table_multiplication = (nombre, limit = 12) =>{
    if (typeof(limit) !== 'number') {
        limit = 12
    }

    if (nombre && typeof(nombre) == 'number') {
        for (let index = 0; index <= limit; index++) {
            console.log(`${nombre} * ${index} = ${nombre * index}`);

        }
    } else{
        console.log('Veuillez entrer un nombre')
    }
    
}

/* var travel = new Object

travel.uni = 'université laval'
travel.val = 'admission & aadmise'
travel.que = 'caq'
travel.pe = 'visa'
t = travel["pe"]
t */


table_multiplication(20, 3)
var voyager = {
    pays: 'Benin',
    destination : 'France',
    objectif: 'etudier',
    papier: 'à jour',
    admission: (destination) => {'Hello! your admission in our university in '+ destination+ ' is accepted. Congratulation' }
                                                                                                     
}
voyager.name = 'Justine Mehounou'
voyager

travel = {...voyager,
    address : {
        ville: 'Cotonou',
        zone: 'aglangandan',
        maison: '0242 Mehounou '
    },
    university: 'ESILV',
    caq : (university) => {`After your admission in  ${university}  You should obtain a caq before the visa `}                                                                                                                
}
travel
travel.caq('ESILV')
ville = travel.address['ville']
ville