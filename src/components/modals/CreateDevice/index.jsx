import { useContext } from 'react';

import { Context } from "../../../index";

const CreateDevice = () => {
    const {device} = useContext(Context);

    return (
        <form id="newDeviceData">
            <title>Create Device:</title>
            <input type="text" placeholder='name'/>
            <input type="text" placeholder='price'/>
            <div>
                <select form="newDeviceData">
                    {device.types.map(type => <option key={type.id}> {type.name}</option>)}
                </select>
            </div>
            <div>
                <select form="newDeviceData">
                    {device.brands.map(type => <option key={type.id}> {type.name}</option>)}
                </select>
            </div>
            <input type="text" placeholder='Write info about device '/>
            <input type="file" placeholder='file'/>
            <input type="submit" form="newDeviceData" value="Create"/>
        </form>
    );
};

export default CreateDevice;
