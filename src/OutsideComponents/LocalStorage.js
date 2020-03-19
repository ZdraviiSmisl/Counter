// export const saveState = (state) => {
//     let stateAsString = JSON.stringify(state);
//     localStorage.setItem('our-state', stateAsString)
// };
//
// export const restoreState = () => {
//     let state = {
//         resetDisable: false,
//         incrDisable: false,
//         setDisable: true,
//         count: 0,
//         startValue: '',
//         maxValue:'',
//         errorStart: false,
//         errorMax: false
//
//     };
//     let stateToString = localStorage.getItem('defaultState');
//     if (stateToString !== null) {
//         state = JSON.parse(stateToString);
//     }
//     return state;
// };