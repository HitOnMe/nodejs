export class BadRequestException extends Error{
    constructor(message){
        super(message)
        this.code = 401
    }
}
export class ForbiddenException extends Error{
    constructor(message){
        super(message)
        this.code = 403
    }
}
