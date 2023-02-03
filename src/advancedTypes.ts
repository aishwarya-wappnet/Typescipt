// Type aliases
// The unknown types
// The never types
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void;
}
let employee1: Employee = {
    id: 1, 
    name: 'Joe',
    retire: (date: Date) => {
        console.log(date);
    }
 };

 // Unions
 function kgToLbs(weight: number | string): number{
    // Type narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2;
    }
 }
 kgToLbs(10);
 kgToLbs('10kg')

 // Intersection
 type Draggable = {
    drag: () => void
 }

 type Resizable = {
    resize: () => void 
 }

 type UIWidget = Draggable & Resizable;

 let textBox: UIWidget = {
    drag: () => {},
    resize: ()  => {}
 }

 // literal(exact, specific) types: to limit the values
 type Quantity = 50 | 100;
 let quantity: Quantity = 100;

 type Metric = 'cm' | 'inch';

 // Nullable Types
function greet(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase());
    else
    console.log('Hola!')
}

greet(undefined);

// Optional Chaining
type Customer = {
    birthday?: Date;
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0  ? null : {birthday: new Date()}
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
// Optional property access property
console.log(customer?.birthday?.getFullYear());

// Optional element access operator

// customers?.[0]

// Optional call
let log: any = null;
log?.('a'); // this piece of code will be executed only if log is referencing an actual function of else we will get undefined