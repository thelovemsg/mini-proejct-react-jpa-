const MyButton = ({text, type, onClick}) => {
    
    const BTN_TYPE =['positive', 'negative'].includes(type) ? type : 'default';
    return (
        <button className={["MyButton",`MyButton_${BTN_TYPE}`].join(' ')} onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defaultProps = {
    type : 'default',
};
 
export default MyButton;