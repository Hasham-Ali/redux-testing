const initialState = 0

const updowncounter = (state = initialState , action) => {

    switch (action.type) {

        case "increment" : state + 1;
        case "decrement" : state - 1;

        default : return state;
    }
}

export default updowncounter;