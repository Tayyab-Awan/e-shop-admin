export const getAPIURL = () => {
    if (process.env.NODE_ENV === 'production')
        return process.env.REACT_APP_SERVICE_URI;
    else
        return 'http://127.0.0.1:5000'
}
