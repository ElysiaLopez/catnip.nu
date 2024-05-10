import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input } from 'reactstrap';

function CreateEvent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="bg-white rounded-lg py-3 px-6 font-bold text-xl shadow-sm hover:bg-purple-300 hover:text-white hover:shadow-lg" color="primary" onClick={toggle}>
        Create Event
      </button>
      <Modal className="z-10 fixed w-128 m-auto top-4 left-128 bg-white rounded-xl shadow-md p-6" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}><h1 className="text-center font-bold text-xl">Create Event</h1></ModalHeader>
        <ModalBody >
        <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Name of Organization </h2>
                </InputGroupText>
                <Input className="p-1 w-64 border-purple-200 border-2 rounded-md" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Location </h2>
                </InputGroupText>
                <Input className="p-1 w-64 border-purple-200 border-2 rounded-md"/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Title of Event </h2>
                </InputGroupText>
                <Input className="p-1 w-64 border-purple-200 border-2 rounded-md"/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Tags </h2>
                </InputGroupText>
                <Input className="p-1 w-64 border-purple-200 border-2 rounded-md"/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Description</h2>
                </InputGroupText>
                <textarea className="p-1 h-24 w-96 border-purple-200 border-2 rounded-md"/>
            </InputGroup>
            <br />
        </ModalBody>
        <ModalFooter>
          <Button className="p-2 px-4 rounded text-white font-bold bg-purple-300" onClick={toggle}>
            Publish
          </Button>{' '}
          <Button className="p-2 px-4" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateEvent;