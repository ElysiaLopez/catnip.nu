import {
    Card,
    CardBody,
  } from 'reactstrap';

  import React from 'react'
  import Map from './Map'

const center = {
  address: '1999 Campus Dr, Evanston, IL 60208',
  lat: 42.053420432400294,
  lng: -87.67267981942202
}

function MapCard() {
    return (
      <>
      <Card>
        <CardBody>
        {/* <Map location={center} zoomLevel={17} /> */}
        <img src="https://media.discordapp.net/attachments/1067928129949147196/1216121873704947722/image.png?ex=6611b1c1&is=65ff3cc1&hm=dbb5fbf05e98669e4523bf52e7ac778bfcb82b84a07165ee5cde71d9ec229c2e&=&format=webp&quality=lossless&width=822&height=546"></img>
        </CardBody>
      </Card>
      </>
    );
  }
  
  export default MapCard;
  
  