

export const handleError = (error, req, res, next) => {
    const response = responseError(error)
    let code = 401
    
    return res.status(code).json(response)
}
export const handleSuccess = (res, data, content, token) => {
    const response = responseSuccess(data, content, token)
    return res.status(200).json(response)
}
export const responseError = (stack) => {
    return{
        status: 'error',
        code: stack.code,
        content: stack.message,
        message: 'fix error'
    }
}
export const responseSuccess = (data, content, token) => {
    return{
        status: 'success',
        code: '200',
        message: 'ok',
        content: content,
        data: data,
        token: token
    }
}