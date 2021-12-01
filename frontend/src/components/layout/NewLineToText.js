const NewLineToText = (props) => {
    
    const nuevaLineaATexto = (text) => {
        return text.split('\n').map(str => <p>{str}</p>);
    }

    return nuevaLineaATexto(props.text)
}

export default NewLineToText;