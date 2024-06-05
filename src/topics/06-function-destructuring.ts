
export interface Product{
    description: string,
    price: number
}

/** 
const phone: Product = {
    description: 'Nokia A1',
    price:150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price:250.0
}
**/

interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

/**function taxCalculation(options:TaxCalculationOptions): number[] {
    let total = 0;
    
    options.products.forEach(product=>{
        total += product.price;
    })
    return [total, total*options.tax];
}**/

//DESTRUCTURANDO
//function taxCalculationDestructurando({tax, products}:TaxCalculationOptions): [number, number] {
export function taxCalculationDestructurando(options:TaxCalculationOptions): [number, number] {

    const {tax, products} = options;

    let total = 0;

    //DESTRUCTURANDO
    products.forEach(({price})=>{
        total += price;
    })
    
    //DESTRUCTURANDO
    return [total, total*tax];
}

/**const shoppingCart = [phone, tablet]
const tax = 0.15;**/

/**const result = taxCalculation({
    tax: tax,
    products: shoppingCart,
})

console.log('Total', result[0]);
console.log('Total', result[1]);

**/

//DESTRUCTURANDO
/**const [total, taxTotal] = taxCalculationDestructurando({
    tax: tax,
    products: shoppingCart,
})

console.log('Total', total);
console.log('tax', taxTotal);**/