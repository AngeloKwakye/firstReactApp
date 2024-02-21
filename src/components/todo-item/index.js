function TodoItem({index, todo}) {
    return (
        <li className="list-group-item active" key={index}>
            <input className="form-check-input me-1" 
            type="checkbox"
            value=""
            id={index}/>
            <label className="form-check-label"
            for={index}>
                {todo}
            </label>
            {/* Take home Assignment: Delete a single todo */}
            <button className="btn btn-danger">Delete</button>
        </li>
    );
}

export default TodoItem;