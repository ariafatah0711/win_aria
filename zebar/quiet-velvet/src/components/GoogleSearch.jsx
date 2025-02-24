const GoogleSearch = ({ commandRunner, explorerPath }) => {
    const style = {
        justifyContent: 'space-between',
    }
    const inputStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--font-color)',
        outline: 'none',
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const research = e.target[0].value;
        e.target[0].value = '';
        commandRunner(`focus --workspace 3`);
        commandRunner(`shell-exec ${explorerPath} https://www.google.com/search?q=${research.replaceAll(' ', '+')}`);
    }
    return (
        <form className="logo box" style={style} onSubmit={(e) => onSubmit(e)}>
            <i className="nf nf-fa-google"></i>
            <input style={inputStyle} type="text" placeholder="Search on Google"/>
        </form>
    );
};

export default GoogleSearch;