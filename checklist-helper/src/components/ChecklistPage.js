import React, { useContext } from 'react';
import {Button} from "@material-tailwind/react"
import GlobalStateContext from '../global/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import { goToInputScreen } from '../routes/coordinator';

export default function ChecklistPage() {
  const {myText} = useContext(GlobalStateContext)
  const navigate = useNavigate();

  const onClick = () => goToInputScreen(navigate);

  return (
      <div className="relative flex flex-col items-center w-full max-w-[24rem]">
        <p>
          Resultado <br/>
        </p>
        <Button
              size="sm"
              color="gray"
              className='!absolute right-1 top-1 rounded'
              onClick={onClick}
        >Try Again</Button>
        <div>
          {myText}
        </div>
        
    </div>
  );
}

