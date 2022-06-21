import React from 'react';
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {

  let showType = false
  let showBrand = false
  let showDevice = false

  const openPopup = (e) => {
    const { className } = e.target;

    switch(className) {
      case 'createManager__type':
        console.log('%%%%%%%%   ===   ', )
        showType = true
        showBrand = false
        showDevice = false
      break;

      case 'createManager__brand':
        console.log('%%%%%%%%   ===   ', )

        showType = false
        showBrand = true
        showDevice = false
      break;

      case 'createManager__device':
        console.log('%%%%%%%%   ===   ', )

        showType = false
        showBrand = false
        showDevice = true
      break;

      default:
      return null
    }

  }
  return (
      <div className="createManager">
        Admin panel:
        <div className="createManager__type" onClick={e => openPopup(e)}>Add Type</div>
        <div className="createManager__brand" onClick={e => openPopup(e)}>Add Brand</div>
        <div className="createManager__device" onClick={e => openPopup(e)}>Add Device</div>

        <CreateBrand style={{display: showType ? 'none' : ''}}/>
        <CreateType style={{display: showBrand ? 'none' : ''}}/>
        <CreateDevice style={{display: showDevice ? 'none' : ''}}/>
      </div>
  );
};

export default Admin;