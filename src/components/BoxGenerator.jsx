import { useState } from "react";

const BoxGenerator = (props) => {
    const {onNewBox} = props;
    const [newBox, setNewBox] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewBox(newBox);
        setNewBox("");
    }

    return (
        <>
            <h2>Box Generator</h2>
            <form onSubmit={handleSubmit}>
                <label>Color</label>
                <input type="text" onChange={ (e) => setNewBox(e.target.value) } value={newBox} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}
export default BoxGenerator;