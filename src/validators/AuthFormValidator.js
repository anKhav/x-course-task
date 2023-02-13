export const AuthFormValidator = (str) => {
    return (str.length < 4 || str.length > 16);

}