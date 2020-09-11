export const todoReducer = ( state = [] , action )=>{
    
    switch (action?.type) {
        case "add":
            return [ ...state, action.payload ];   
        
        case "delete":{
            const id = action.payload;
            return state.filter( todo => todo.id != id )
        }
        
        case "toggle":
            return state.map( todo => ( todo.id == action.payload ) ? { ...todo, done: !todo.done } : todo);

        case "toggle-old":{
            const id = action.payload;
            
            return state.map( todo =>{ 
                if(todo.id == id) 
                    return { ...todo, done: !todo.done }   
                else
                    return todo;
            });
        }

        default:
            return state;
    }
}