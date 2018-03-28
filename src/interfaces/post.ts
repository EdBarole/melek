/**
 * Interface defines a post.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

export class IPost {
    
    public id: number;
    public title: string;
    public contents: string;
    public image: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
