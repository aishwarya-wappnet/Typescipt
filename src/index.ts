let sales: number = 123_456_789; // if the number is too large, ts allows the use of underscore to make the number more readable
let course: string = 'Typescipt';
let is_published: boolean = true;
let level;

function render(document: any){
    console.log(document);
}

let numbers : number[] = [1, 2, 3];
let numbers1 : [];  

// tuple is a fixed length array where each element has a particular type. Key Value pairs
let user: [number, string] = [1, 'Joe'];

// using enum you can represnt a list of constants
// if we define enum with const keyword, the compiler will generate moreoptimized code
// const small = 1;
// const medium = 2;
// const large = 3;
const enum Size {Small = 1, Medium, Large}

let mySize: Size = Size.Medium;
console.log(mySize);

// funtions

function calculateTax(income: number, taxYear?: number) : number{
    if((taxYear || 2022) < 2022)
        return income*1.2;
    return income * 1.3;
}

calculateTax(10_000);

// objects
let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void;
} = { 
    id: 1, 
    name: 'Joe',
    retire: (date: Date) => {
        console.log(date);
    }
 };

