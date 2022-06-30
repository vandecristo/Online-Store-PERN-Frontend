const CreateType = ({ data, setData }) => {

    const handleChange = e => {
        setData(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={e =>  handleSubmit(e)}>
            <title>Create Type:</title>
            <input type="text" placeholder='name' value={data} onChange={e =>  handleChange(e)}/>
        </form>
    );
};

export default CreateType;
