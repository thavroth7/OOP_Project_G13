export enum Gender {
    MALE,
    FEMALE
}
export abstract class Person {
    protected phone: number
    constructor (protected name: string, protected age: number) {}

    setPhone(phone: number) {
        this.phone = phone
    }
}