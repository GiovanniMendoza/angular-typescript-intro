export interface Passenger {
    name: string;
    children?: string[]
}

const passgenger1: Passenger = {
    name: "Giovanni",
}

const passgenger2: Passenger = {
    name: "Melisa",
    children: ['zoe', 'milan']
}

const retunrChildrenNumber = (passenger:Passenger):number => {
    
    const howManyChildre = passenger.children?.length || 0;
    //const howManyChildre = passenger.children!.length;

    console.log(passenger.name, howManyChildre);

    return howManyChildre;
    
} 

retunrChildrenNumber(passgenger1);