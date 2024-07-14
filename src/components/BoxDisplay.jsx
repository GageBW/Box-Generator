const BoxDisplay = (props) => {
    const { currentBoxes } = props;
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {
                currentBoxes.map((box, index) =>
                    <div style={{
                        height: "50px", width: "50px", 
                        backgroundColor: box, margin: "5px",
                        }} key={index} />)
            }
        </div>
    );
};
export default BoxDisplay;