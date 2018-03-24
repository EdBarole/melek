/**
 * Interface defines a product.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

export class IProduct {
    
    public id: number;
    public name: string;
    public cost: number;
    public quantity: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
