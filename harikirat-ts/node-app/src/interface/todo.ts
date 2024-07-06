//define an interface to specify the structure of an todo object
interface TodoType{
    title:string;
    description:string;
    done:boolean;
}

//define the input prop for the todo component
interface TodoInput{
    todo:TodoType;
}

//Creating a react todo component 'Todo' that takes a 'todo' prop and renders it.

function Todo({todo}:TodoInput): JSX.Element{
    return(
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
        </div>
    );
}
