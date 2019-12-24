export const chooseAndThenRoute = (myAction, myPath) => {
    return (dispatch) => {
        dispatch(myAction);
        browserHistory.push(myPath);
    }
};