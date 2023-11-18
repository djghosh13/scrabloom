const Tile = (props) => {
   return  <div
    
    style={{
        backgroundColor: "beige",
        borderRadius: 4,
        height: 32,
        width: 32,
        alignContent: "center",
        color: "black",
    }}>
        {props.children}
    </div>
}

export default Tile;