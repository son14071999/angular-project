export class Product {
    productCode: string
    productName: string
    starRating: number = 0

    constructor(productCode: string, productName: string, starRating: number = 0) {
        this.productCode = productCode
        this.productName = productName
        this.starRating = starRating
    }
}
